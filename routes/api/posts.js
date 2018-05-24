const express = require('express'); 
const router = express.Router();
// Import the postsController here 
const postsController = require('./../../controllers/posts');

router.get('/posts', postsController.index);
router.post('/posts', postsController.create);
router.get('/posts/:post_id', postsController.show);
router.put('/posts/:post_id', postsController.update);
router.delete('/posts/:post_id', postsController.destroy);

module.exports = router;