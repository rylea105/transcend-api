const posts = require('../models/post.model.js');

exports.add = (req, res) => {
    posts.create(req.body);
    res.send(req.body);
};
