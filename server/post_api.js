var express = require('express');
var router = express.Router();


var Post = require('./post');

/*
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
*/

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

// more routes for our API will happen here
// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

// create a post (accessed at POST http://localhost:8080/api/posts)
.post(function (req, res) {

    var post = new Post(); // create a new instance of the post model
    console.log("post");
    post.imageEncoded = req.body.imageEncoded; // set the posts name
    post.description = req.body.description;
    post.userID = req.body.userID;
    post.tags = req.body.tags;
    post.privacy = req.body.privacy;
    // save the post and check for errors
    post.save(function (err) {
        if (err)
            return res.send(err);

        res.json({
            message: 'Post created!'
        });


    });
})

.get(function (req, res) {
    //use .sort("-_id").limit(20) for pagination
    Post.find().sort("-_id")
        .exec(function (err, post) {
            if (err)
                return res.send(err);

            res.json(post);
        });


});

/////used for searching. Not being used right now
router.route('/posts/search')

.get(function (req, res) {
    Post.find({
        userID: req.query.userID
    }, function (err, post) {
        if (err)
            return res.send(err);

        res.json(post);
    });
});

// on routes that end in /posts/:post_id
// ----------------------------------------------------
router.route('/posts/:post_id')

// get the post with that id (accessed at GET http://localhost:8080/api/posts/:post_id)
.get(function (req, res) {
        Post.findById(req.params.post_id, function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    })
    .post(function (req, res) {
        // use our post model to find the post we want
        Post.findById(req.params.post_id, function (err, post) {
            if (err)
                res.send(err);
            post.imageEncoded = req.body.imageEncoded; // set the posts name
            post.description = req.body.description;
            post.userID = req.body.userID;
            post.tags = req.body.tags;
            post.privacy = req.body.privacy; // update the posts info
            // save the post
            post.save(function (err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Post edited!'
                });
            });

        });
    })
    .delete(function (req, res) {
        Post.remove({
            _id: req.params.post_id
        }, function (err, post) {
            if (err)
                res.send(err);

            res.json({
                message: 'Sucessfully deleted'
            });
        });
    });

module.exports = router;
