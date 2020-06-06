var express=require('express');
var cors =require('cors');
var mongoose =require('mongoose');
var bodyparser=require('body-parser');
var path=require('path');

const routing=require('./routes/route')

const url='mongodb://localhost:27017/todolist';
const connect=mongoose.connect(url);

connect.then((db)=>{
    console.log('connected to server');
  },(err)=>{
    console.log(err);
  });

var app=express();
 var port=3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/',routing);

app.listen(port,()=>{
    console.log('started '+port)
});