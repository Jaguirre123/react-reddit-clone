const express = require('express'); 
const router = express.Router;
// Import the commentsController here

router.post('/api/posts/:post_id/comments', commentsController.create);
router.put('/api/posts/:post_id/comments/:comment_id', commentsController.update);
router.delete('/api/posts/:post_id/comments/:comment_id', commentsController.destroy);

module.exports = router;