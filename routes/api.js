
const express = require("express");
const router = express.Router();
const posts = require("../models/posts");
const bodyParser = require("body-parser");


router.get('/allPosts', (req, res) => {
    
    res.json(JSON.stringify(posts.getAll()));
})

router.post('/newPost', bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let text = req.body.text;

    posts.newPost(title, text);


    res.send("Post enviado com sucesso")

})

router.get('/post/:id', (req, res) => {
    let postagem = posts.getPost(req.params.id);

    res.json(JSON.stringify(postagem));

})

module.exports = router;

