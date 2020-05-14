const express = require("express")
const router = express.Router();
const Post = require("../models/Post")

//gets back all the posts
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
});

//submits the post
router.post('/', async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try {
        const savedPost= await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({ message: err });
    }

//specific post
router.get('/:postId', async (req,res)=>{
    try{
        const specificPost = await Post.findById(req.params.postId);
        res.json(specificPost);
    }
    catch(err){
        res.json({message:err})
    }
    
});

router.delete('/:postId',async (req,res)=>{
    try{
        const deletePost = await Post.remove({_id:req.params.postId});
        res.json(deletePost);
    }catch(err){
        res.json({message:err})
    }
    



})
    
});

module.exports = router;