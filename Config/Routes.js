const express = require('express')
const Router = express.Router()
const PageCont = require('../Controller/PageController')
const PostCont = require('../Controller/PostController')
const UserCont = require('../Controller/UserController')

// Router.get('/', PageCont.Homepage)


Router.get('/' , PageCont.Homepage)
Router.get('/Create' , PageCont.CreatePage)
Router.get('/Edit/:id', PageCont.EditPage)
Router.get('/signup',PageCont.SignupPage)
Router.get('/login' ,PageCont.LoginPage )

Router.post('/createpost' , PostCont.CreatePost)
Router.post('/delete/:id' , PostCont.DeletePost)
Router.post('/EditPost/:id' , PostCont.EditPost)
Router.post('/newcomment/:postid' , PostCont.CreateComment)
Router.post('/signup' ,UserCont.SignUp )
Router.post('/login' , UserCont.Login)

module.exports= Router