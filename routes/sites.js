const express = require("express");
const router = express.Router();
const SitesSchema = require("../models/sites").Sites;


router.get("/sites", (req, res, next) => {
    // console.log(req.query.genreId);
    SitesSchema.find()
        .exec()
        .then(block => {
            res.status(200).json(block);
        })
        .catch((err, prod) => {
            console.log(err);
            res.status(500).json(prod);
        });
});

module.exports = router;