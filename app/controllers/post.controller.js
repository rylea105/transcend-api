const posts = require('../models/post.model.js');

exports.add = (req, res) => {
    posts.save(req.body);
    res.send(req.body);
};
