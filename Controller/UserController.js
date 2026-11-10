const UserModel = require('../Model/UserModel')
const bcrypt = require('bcrypt')

const SignUp = (req,res)=>{
    const {username , email , password}=req.body
    if(username===''|| email===''|| password===''){
        res.render('SignPage' , {error:'Plese fill all fields'})
    } 
    const hashedPassord = bcrypt.hashSync(password , 13)
    const hasheduser = {...req.body , password:hashedPassord}
    const user = new UserModel(hasheduser)
    user.save()
    .then(user=>{
        console.log(user)
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

const Login = (req,res)=>{
    const {email , password} = req.body
    if(email==="" || password===""){
        res.render('loginPage' , {error:'Plese fill all fields'})
    }
    UserModel.findOne({email:email})
    .then(user =>{
        if(user===null){
            res.render('loginPage' , {error:'user is not regesterd yet'})
        } else {
        let CorrectPass = bcrypt.compareSync(password ,user.password )
        if(CorrectPass){
            console.log('LogedIn') // Login logic
            res.cookie('User' ,{username:user.username , email:user.email} , {httpOnly:true , secure :true , maxAge:10*60*1000} )
            res.cookie('UserLogged', true)
            res.redirect('/')
        } else {
             res.render('loginPage' , {error:'password is Incorrect'})
        }}
    })
    .catch(err => console.log(err))
}

module.exports={
    SignUp,
    Login
}