const PostModel = require('../Model/PostModel')
const CommentModel= require('../Model/CommentModel')

const CreatePost = (req,res)=>{
    // const {Title , Body} = req.body
    console.log(req.body)
    const newPost = new PostModel(req.body)
    newPost.save()
    .then(()=>{
        console.log('Saved')
        res.redirect('/')
    })
    .catch(err =>{console.log(err)})
}

const DeletePost = (req,res)=>{
   const {id}=req.params
    PostModel.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/')
    })
    .catch(err =>{
        cosnole.log(err)
    })
}

const EditPost = (req,res)=>{
    const {id}=req.params
    const {title , body}=req.body
    PostModel.findByIdAndUpdate(id ,req.body)
    .then((EditedPost)=>{
        console.log(EditedPost)
        res.redirect('/')
    })
    .catch(err => comsole.log(err))

}

const CreateComment = (req,res)=>{
    // const {commentBody}=req.body
    const {postid}=req.params
    const newcomment = new CommentModel(req.body)
    newcomment.save()
    .then((comment)=>{
        PostModel.findById(postid)
        .then(post=>{
            post.commentid.push(comment._id)
            post.save()
            .then(post=>{
                 res.redirect('/')
            })
        })  
    })
    .catch(err=>console.log(err))
}
module.exports={
    CreatePost,
    DeletePost,
    EditPost,
    CreateComment
}