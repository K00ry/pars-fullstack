const express = require("express");
const router = express.Router();
const BlockSchema = require("../models/mosaics").Mosaics;

// GET request for fetching  sub-documents and render in admin page

router.get("/mosaics", (req, res, next) => {
    console.log(req.query.genreId);
    BlockSchema.findOne({ genreId: req.query.genreId })
        .exec()
        .then(mos => {
            res.status(200).json(mos);
        })
        .catch((err, mos) => {
            console.log(err);
            res.status(500).json(mos);
        });
});

/// posting new product size price and shipping

router.post("/mosaics", (req, res) => {
    // console.log(req.body);

    BlockSchema.findOne({ genreId: req.body.genreId })
        .exec()
        .then(mos => {
            mos.sizes.push({
                type: req.body.type,
                size: req.body.size,
                price: req.body.price,
                shipping: req.body.shipping,
            });
            mos.save((err, mos) => {
                // console.log(err);
                res.status(200).json({
                    sizes: mos.sizes.map(doc => doc.type),
                    message: `product ${mos.sizes[mos.sizes.length - 1].type} got saved`
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// GET request for deleting a sub-document

router.get("/mosaics/delete", (req, res, next) => {
    // console.log(req.query._id);
    const receivedId = req.query._id;
    BlockSchema.findOne({ genreId: req.query.genreId })
        .exec()
        .then(mos => {
            mos.sizes.id(receivedId).remove();
            mos.save();
            res.status(200).json(mos);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;