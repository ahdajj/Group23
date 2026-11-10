const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title:{
        type:String,
    },
    body:{
        type:String
    },
    commentid:[{
        type:mongoose.Types.ObjectId,
        ref:'Comment'
        }]

},{timestamps:true})

const Post = mongoose.model('Post' , PostSchema)

module.exports=Post