const PostModel = require('../Model/PostModel')


const Homepage = (req,res)=>{
    console.log(req.cookies)
    PostModel.find()
    .populate('commentid')
    .then((data)=>{
        res.render('Home' , {Posts:data})
    })
    .catch(err=>{console.log(err)})
}

const CreatePage = (req,res)=>{
    res.render('CreatePost')
}

const EditPage = (req,res)=>{
    const {id}=req.params
    PostModel.findById(id)
    .then((OnePost)=>{
        res.render('EditPage' , {post:OnePost})
    })
    .catch(err => console.log(err))

}
const SignupPage = (req,res)=>{
    res.render('SignPage' , {error:''})
}
const LoginPage =(req,res)=>{
    res.render('LoginPage' , {error:''})
}
module.exports = {
    Homepage,
    CreatePage,
    EditPage,
    SignupPage,
    LoginPage
}