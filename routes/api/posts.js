const express = require('express'); 
const router = express.Router;
// Import the postsController here 

router.get('/api/posts', postsController.index);
router.post('/api/posts', postsController.create);
router.get('/api/posts/:post_id', postsController.show);
router.put('/api/posts/:post_id', postsController.update);
router.delete('/api/posts/:post_id', postsController.destroy);

module.exports = router;