const Post = require('../models/feed');
const getHomePage  = (req,res) =>{
    Post.find()
    .then(posts => {
        res.render('home', { posts });
    })
    .catch(error => {
        res.status(500).send(' Error');
    });
}
const getAllPosts = (req, res) => {
    Post.find()
        .then(posts => {
            res.render('index', { posts });
        })
        .catch(error => {
            res.status(500).send('Error');
        });
};


const renderAddPostForm = (req, res) => {
    res.render('addPost');
};

const addPost = (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    newPost.save()
        .then(() => {
            res.redirect('/feed');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Server Error');
        });
};

const renderEditPostForm = (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.render('editPost', { post });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('error');
        });
};


const editPost = (req, res) => {
    const { title, content } = req.body;
    Post.findByIdAndUpdate(req.params.id, { title, content })
        .then(() => {
            res.redirect('/feed');
        })
        .catch(error => {
           
            res.status(500).send('Server Error');
        });
};


const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/feed');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Server Error');
        });
};



module.exports ={
    getAllPosts,
    renderAddPostForm ,
    addPost,
    deletePost,
    editPost,
    renderEditPostForm,
    getHomePage

}