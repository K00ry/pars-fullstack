const express = require("express");
const router = express.Router();
const BlockSchema = require("../models/pavers").Pavers;

// GET request for fetching  sub-documents and render in admin page

router.get("/pavers", (req, res, next) => {
    console.log(req.query.genreId);
    BlockSchema.findOne({ genreId: req.query.genreId })
        .exec()
        .then(paver => {
            res.status(200).json(paver);
        })
        .catch((err, prod) => {
            console.log(err);
            res.status(500).json(prod);
        });
});

/// posting new product size price and shipping

router.post("/pavers", (req, res) => {
    // console.log(req.body);

    BlockSchema.findOne({ genreId: req.body.genreId })
        .exec()
        .then(kerbs => {
            kerbs.sizes.push({
                type: req.body.type,
                size: req.body.size,
                price: req.body.price,
                shipping: req.body.shipping,
                img:req.body.img,
                inSquarefeet:req.body.inSquarefeet,
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

// GET request for deleting a sub-document

router.get("/pavers/delete", (req, res, next) => {
    // console.log(req.query._id);
    const receivedId = req.query._id;
    BlockSchema.findOne({ genreId: req.query.genreId })
        .exec()
        .then(paves => {
            paves.sizes.id(receivedId).remove();
            paves.save();
            res.status(200).json(paves);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
