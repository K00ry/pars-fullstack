const express = require("express");
const router = express.Router();
const KerbSchema = require("../models/kerbStone").KerbStone;

// GET request for fetching  sub-documents and render in admin page

router.get("/kerbStone", (req, res, next) => {
  console.log(req.query.genreId);
  KerbSchema.findOne({ genreId: req.query.genreId })
    .exec()
    .then(block => {
      res.status(200).json(block);
    })
    .catch((err, prod) => {
      console.log(err);
      res.status(500).json(prod);
    });
});

//POST reqest to add new sub-document to MongoDB

router.post("/kerbStone", (req, res) => {
  console.log(req.body.genreId);

  KerbSchema.findOne({ genreId: req.body.genreId })
    .exec()
    .then(kerbs => {
      kerbs.sizes.push({
        type: req.body.type,
        price: req.body.price,
        shipping: req.body.shipping
      });
      kerbs.save((err, prod) => {
        console.log(err);
        res.status(200).json({
          ...prod,
          message: `product ${prod.sizes[prod.sizes.length - 1].type} got saved`
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// GET request for deleting a sub-document

router.get("/kerbStone/delete", (req, res, next) => {
  const receivedId = req.query._id;
  KerbSchema.findOne({ genreId: req.query.genreId })
    .exec()
    .then(kerbs => {
      kerbs.sizes.id(receivedId).remove();
      kerbs.save();
      res.status(200).json(kerbs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
