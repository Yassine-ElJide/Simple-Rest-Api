const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', async (req,res) => {
    const posts = await Post.find();
    res.send(posts);
})


router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    const savedPosts = await post.save();
    res.json(savedPosts);
})


router.get('/:id', async(req,res) => {
    const singlePost = await Post.findById(req.params.id);
    res.json(singlePost);

})

router.delete('/:id', async (req,res) => {
    const removedPost = await Post.remove({_id: req.params.id})
})
module.exports = router