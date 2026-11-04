const mongoose = require('mongoose')


const DBURL = 'mongodb+srv://ahd:JnZoTn5lLZpOSWNa@cluster0.eh9taen.mongodb.net/Group23?'
mongoose.connect(DBURL)
.then(()=>{console.log('DB is Connected')})
.catch((err)=>{console.log(err)})