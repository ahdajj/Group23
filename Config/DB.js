const mongoose = require('mongoose')


const DBURL = 'Your Own mogngoDB URL'
mongoose.connect(DBURL)
.then(()=>{console.log('DB is Connected')})
.catch((err)=>{console.log(err)})