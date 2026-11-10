const express = require('express')
const Router = express.Router()
const PostModel = require('../Model/PostModel')
const CommentModel= require('../Model/CommentModel')

// const PageCont = require('../Controller/PageController')
// Router.get('/', PageCont.Homepage)


Router.get('/' , (req,res)=>{
    PostModel.find()
    .populate('commentid')
    .then((data)=>{
        console.log(data)
        res.render('Home' , {Posts:data})
    })
    .catch(err=>{console.log(err)})
})

Router.get('/Create' , (req,res)=>{
    res.render('CreatePost')
})


Router.post('/createpost' , (req,res)=>{
    // const {Title , Body} = req.body
    console.log(req.body)
    const newPost = new PostModel(req.body)
    newPost.save()
    .then(()=>{
        console.log('Saved')
        res.redirect('/')
    })
    .catch(err =>{console.log(err)})
})

Router.post('/delete/:id' , (req,res)=>{
   const {id}=req.params
    PostModel.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/')
    })
    .catch(err =>{
        cosnole.log(err)
    })
})

Router.get('/Edit/:id', (req,res)=>{
    const {id}=req.params
    PostModel.findById(id)
    .then((OnePost)=>{
        res.render('EditPage' , {post:OnePost})
    })
    .catch(err => console.log(err))

})

Router.post('/EditPost/:id' , (req,res)=>{
    const {id}=req.params
    const {title , body}=req.body
    PostModel.findByIdAndUpdate(id ,req.body)
    .then((EditedPost)=>{
        console.log(EditedPost)
        res.redirect('/')
    })
    .catch(err => comsole.log(err))

})

Router.post('/newcomment/:postid' , (req,res)=>{
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
})

module.exports= Router