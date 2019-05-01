const express = require("express");
const path = require("path");
const router = express.Router();
const KerbSchema = require("../models/kerbStone").KerbStone;
const BlockSchema = require("../models/blocks").Blocks;
const PaversSchema = require("../models/pavers").Pavers;
const SlabsSchema = require("../models/slabs").Slabs;
const MosaicsSchema = require("../models/mosaics").Mosaics;
const RingsSchema = require("../models/rings").Rings;
const SitesSchema = require("../models/sites").Sites;
const BarriersSchema = require("../models/barriers").Barriers;



router.get("/main", (req, res) => {

  KerbSchema.find().exec((err, kerbs) =>{
    BlockSchema.find().exec((err, blocks) =>{
      PaversSchema.find().exec((err, pavers) =>{
        SlabsSchema.find().exec((err, slabs) =>{
          MosaicsSchema.find().exec((err, mosaics) =>{
            RingsSchema.find().exec((err, rings) =>{
              SitesSchema.find().exec((err, sites) =>{
                BarriersSchema.find().exec((err, barriers) =>{
        let all = [];
        all.push(kerbs);
        all.push(blocks);
        all.push(pavers);
        all.push(slabs);
        all.push(mosaics);
        all.push(rings);
        all.push(sites);
        all.push(barriers);
        res.send(all);
                });
              });
            });
          });
        });
      });
    });
  });


});


module.exports = router;
