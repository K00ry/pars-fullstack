const express = require("express");
const router = express.Router();
const Product = require("../models/kerbStone").KerbStone;

router.get("/", (req, res, next) => {
  Product.findOne({ genreId: "hand" })
    .exec()
    .then(kerbs => {
      console.log(kerbs);
      kerbs.sizes[3].remove();
      kerbs.save();
      res.status(200).json(kerbs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/kerbStone", (req, res) => {
  console.log(req.body);

  Product.findOne({ genreId: req.body.genreId })
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
          message: `product ${prod.sizes[3].type} got saved`
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
