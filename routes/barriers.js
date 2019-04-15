const express = require("express");
const router = express.Router();
const BlockSchema = require("../models/barriers").Barriers;

// GET request for fetching  sub-documents and render in admin page

router.get("/barriers", (req, res, next) => {
    // console.log(req.query.genreId);
    BlockSchema.findOne({ genreId: req.query.genreId })
        .exec()
        .then(slab => {
            res.status(200).json(slab);
        })
        .catch((err, slab) => {
            console.log(err);
            res.status(500).json(slab);
        });
});

/// posting new product size price and shipping

router.post("/barriers", (req, res) => {
    // console.log(req.body);

    BlockSchema.findOne({ genreId: req.body.genreId })
        .exec()
        .then(kerbs => {
            kerbs.sizes.push({
                type: req.body.type,
                // size: req.body.size,
                // price: req.body.price,
                // shipping: req.body.shipping,
            });
            kerbs.save((err, slab) => {
                console.log(err);
                res.status(200).json({
                    sizes: slab.sizes.map(doc => doc.type),
                    message: `product ${slab.sizes[slab.sizes.length - 1].type} got saved`
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// GET request for deleting a sub-document

router.get("/barriers/delete", (req, res, next) => {
    // console.log(req.query._id);
    const receivedId = req.query._id;
    BlockSchema.findOne({ genreId: req.query.genreId })
        .exec()
        .then(slab => {
            slab.sizes.id(receivedId).remove();
            slab.save();
            res.status(200).json(slab);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;