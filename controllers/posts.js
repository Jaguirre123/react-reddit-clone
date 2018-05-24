const Post = require('./../models/Post');

function index(req, res) {
  Post.find({}, function (err, posts) {
    if (err) res.send(err);
    else res.json(posts);
  });
}

function create(req, res) {
  let post = new Post(req.body);
  post.save(err => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(post);
  });
}

function show(req, res) {
  Post.findById(req.params._id)
    .populate('comments')
    .exec(function (err, post) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(post)
    });
}

function update(req, res) {
  Post.findByIdAndUpdate(req.params.post_id)
    .then((err, post) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(post);
  })
}

function destroy(req, res) {
  Post.findByIdAndRemove(req.params.post_id, (err, post) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({post: post});
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};