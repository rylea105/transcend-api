const Posts = require('../models/post.model.js');


exports.add = (req, res) => {
    const addObj = new Posts(req.body);
    addObj.save(err =>{
        if (err) return res.status(500).send(err);
        return res.status(200).send(addObj);
    })
};

exports.edit = (req, res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        
        req.body,

        {new: true},

        (err, editObj) => {
            if (err) return res.status(500).send(err);
            return res.send(editObj);
        }
    )
};

exports.findAll = (req, res) => {
    Posts.find()
        .then(posts => {
          console.log(posts);
            res.send(posts);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving posts."
            });
        });
  };

exports.checkreq = (req, res) => {
    res.json({
        text: 'ID' + req.body.id,
      });
};