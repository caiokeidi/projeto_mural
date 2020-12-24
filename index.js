
const express = require("express");
const apiRoute = require("./routes/api");
const path = require("path");

const app = express();

app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, "public")));
app.use('/newPost', express.static(path.join(__dirname, "public/newPost.html")));
app.use('/post', express.static(path.join(__dirname, "public/post.html")));




const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running on port ", PORT);
    
})