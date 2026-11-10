const express = require('express')
const app = express()
const Router = require('./Config/Routes')
require('./Config/DB')

app.listen(3000 , ()=>{console.log('Server is running on port 3000')})

app.set('view engine' ,'ejs') 
// app.use(express.json())
app.use(express.urlencoded({extended: true}))





app.use(Router)