const express = require('express')
const app = express()
const Router = require('./Config/Routes')
require('./Config/DB')
const CookieParser= require('cookie-parser')

app.listen(3000 , ()=>{console.log('Server is running on port 3000')})

app.set('view engine' ,'ejs') 
// app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(CookieParser())




app.use(Router)