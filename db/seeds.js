/*

    Seed your Post model here. An example of a seeds file can be found here: 
    https://github.com/ga-students/wdi-dt-57/blob/7135e7aaea0c284e2c4859fa5f7929f923b7c7b4/work/w08/d2/01-async-patterns-in-js/mon-juice/db/seeds.js

*/
require('dotenv').config({path: '../.env'});
require('./config');

// Import our Mongoose models
const Post = require('./../models/Post');
const Comment = require('./../models/Comment');

// Destroy all data in database
const seed = Promise.all([Post.remove({}), Comment.remove({})])

// Let's create 4 students 
seed.then(() => {
    return Post.create([
        { title: 'Cats are cool', content: 'are creepy', thumbnail_image_url: 'https://i.imgur.com/43Otn.jpg', votes: 3, comments: [] },
        { title: 'Dogs are sick', content: 'man bestfriend', thumbnail_image_url: 'https://i.imgur.com/j6EuCvX.jpg', votes: 4, comments: [] },
        { title: 'Koala are awesome', content: 'Aussy', thumbnail_image_url: 'https://i.imgur.com/FkfihI0.jpg', votes: 5, comments: [] },
        { title: 'Lions fast', content: 'viscous', thumbnail_image_url: 'https://i.imgur.com/3J6XuQf.jpg', votes: 6, comments: [] },
    ])
})

// Let's log out all students and add add 2 teachers


// Let's log out teachers and close the connection to our Mongoose database
.then(posts => {
    posts[0].comments.push({content: 'They are adorable', votes: 99});
    posts[1].comments.push({content: 'We did it Reddit', votes: 72});
    posts[2].comments.push({content: 'I hate this game', votes: 69});
    Promise.all([ posts[0].save(), posts[1].save(), posts[2].save() ])
        .then(function() {
            require('mongoose').connection.close();
            process.exit();
        });
 })
 .catch(err => console.log(err));