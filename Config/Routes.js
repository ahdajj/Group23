const express = require('express')
const Router = express.Router()
const PostModel = require('../Model/PostModel')
// const PageCont = require('../Controller/PageController')
// Router.get('/', PageCont.Homepage)


Router.get('/' , (req,res)=>{
    PostModel.find()
    .then((data)=>{
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




module.exports= Router