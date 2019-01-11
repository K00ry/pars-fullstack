const express = require("express");
const router = express.Router();
const Product = require("../models/kerbStone").KerbStone;

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then(kerbs => {
      // const response = {
      //   count: kerbs.length
      // };
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
      kerbs.sizes.push({ kir: "kos" });
      kerbs.save((err, prod) => {
        console.log(err);

        res.status(200).json(prod);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

  // Product.find()
  // let jaber = new Product(req.body);
  //
  // jaber.save((err, product) => {
  //   if (err) console.log("Error", err);
  //   else console.log("product saved!");
  //   res.json(product);
  // });
});

module.exports = router;
