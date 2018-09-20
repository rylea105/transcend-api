const posts = require('../models/post.model.js');

exports.create = (req, res) => {
    posts.push(req.body)
    res.status(201).json(req.body)
};

exports.edit = (req, res) => {
    const updateIndex = posts.findIndex(post => post.number === req.params.number)
    res.json(Object.assign(posts[updateIndex], req.body))
};