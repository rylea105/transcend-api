const posts = require('../models/post.model.js');

exports.create = (req, res) => {
    posts.push(req.body)
    res.status(201).json(req.body)
};
