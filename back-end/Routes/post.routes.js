const router = require('express').Router();
const postController = require('../Controllers/post.controller');


//routes pour les posts
router.get('/', postController.readPost);
router.post('/', postController.createPost);
//route pour modifier un message
router.put('/:id', postController.updatePost);
//route pour supprimer un message
router.delete('/:id', postController.deletePost);
//route pour ajouter un like
router.patch('/like-post/:id', postController.likePost);
//route pour retirer un like
router.patch('/unlike-post/:id', postController.unlikePost);

//route pour ajouter un commentaire à un post 
router.patch('/comment-post/:id', postController.commentPost);
//route pour modifier un commentaire dans un posts
router.patch('/edit-comment-post/:id', postController.editCommentPost);
//route pour supprimer un commentaire
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);

module.exports = router;