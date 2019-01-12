const express = require("express");
const router = express.Router();
const BlockSchema = require("../models/blocks").Blocks;

// router.get("/", (req, res, next) => {
//   BlockSchema.findOne({ genreId: "pooke" })
//     .exec()
//     .then(block => {
//       console.log(block);
//       // const sizesArray = block.sizes.length;
//       // block.sizes[sizesArray - 1].remove();
//       // block.save();
//       res.status(200).json(block);
//     })
//     .catch((err, prod) => {
//       console.log(err);
//       res.status(500).json({
//         ...prod,
//         message: `product ${prod.sizes[3].type} got saved!`
//       });
//     });
// });

//// GET request to show whats on DB

router.get("/blocks", (req, res, next) => {
  BlockSchema.find()
    .exec()
    .then(block => {
      console.log(block);

      res.status(200).json(block);
    })
    .catch((err, prod) => {
      console.log(err);
      res.status(500).json(prod);
    });
});

/// posting new product size price and shipping

router.post("/blocks", (req, res) => {
  // console.log(req.body);

  BlockSchema.findOne({ genreId: req.body.genreId })
    .exec()
    .then(kerbs => {
      kerbs.sizes.push({
        type: req.body.type,
        size: req.body.size,
        price: req.body.price,
        shipping: req.body.shipping
      });
      kerbs.save((err, prod) => {
        // console.log(err);
        res.status(200).json({
          sizes: prod.sizes.map(doc => doc.type),
          message: `product ${prod.sizes[prod.sizes.length - 1].type} got saved`
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
