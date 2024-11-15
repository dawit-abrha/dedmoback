const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/', PostController.getHomePage);
router.get('/feed', PostController.getAllPosts);

router.get('/addPost', PostController.renderAddPostForm);


router.post('/addPost', PostController.addPost);


router.get('/editPost/:id', PostController.renderEditPostForm);


router.post('/editPost/:id', PostController.editPost);


router.get('/deletePost/:id', PostController.deletePost);




module.exports = router;