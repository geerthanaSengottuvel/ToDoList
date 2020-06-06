const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const listSchema=new Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        status:{
            type:String,
            required:true
        },
        label:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        archiev:{
            type:Boolean,
            default:false
        }
    }
)

var List=mongoose.model('List',listSchema);

module.exports= List;