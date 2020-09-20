const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin,X-Requested-With, Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT,OPTIONS");
  next();
})

app.post("/posts",(req,res,next)=>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message:"post added"
  });
});

app.use(("/posts"),(req, res, next) => {
  const posts = [{id:"3433244324", title: "freemem", content: "fwweweww"}]
  res.status(200).json({
    message: "posts came",
    posts: posts
  })
});

module.exports = app;
