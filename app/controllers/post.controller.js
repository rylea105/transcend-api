const posts = require('../models/post.model.js');

exports.add = (req, res) => {
    const addObj = new posts(req.body);
    addObj.save(err =>{
        if (err) return res.status(500).send(err);
        return res.status(200).send(addObj);
    })
};

exports.edit = (req, res) => {
    posts.findByIdAndUpdate(
        req.params.id,
        
        req.body,

        {new: true},

        (err, editObj) => {
            if (err) return res.status(500).send(err);
            return res.send(editObj);
        }
    )
};
