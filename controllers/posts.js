const Post = require('./../models/Post');

function index(req, res) {
  Post.find({}, function(err, posts) {
    if (err) res.send(err);
    else res.json(posts);
  });
}

function create(req, res) {
  
}

function show(req, res) {

}

function update(req, res) {

}

function destroy(req, res) {

}

module.exports = {
    index, 
    create, 
    show, 
    update, 
    destroy
};