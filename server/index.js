import express from "express";
import nodemon from "nodemon";
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import { name } from "ejs";
import cors from "cors";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '\\public'));
app.use(cors())
app.use(express.json())

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:9999/mon')
  .then(() => console.log('Connected!'));

  const Schema = mongoose.Schema;
  const BlogPost = new Schema({
    name: String,
    surname: String,
    address: String,
    email: {type: String,unique:true,require:true},
    age: Number
  });

  const MyModel = mongoose.model('Hero', BlogPost);

app.get('/api',async function (req, res) {
  const user = await MyModel.find();
  console.log(user)

    
    res.json(user)
  })

// app.post('/', function(req,res){
//   console.log("Done")
// })




app.listen(4000,function(req,res){
    console.log("server started")
})