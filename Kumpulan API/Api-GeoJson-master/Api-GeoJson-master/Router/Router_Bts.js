"use strict";
const router = require("express").Router();
const BtsController = require("../controller/Controller_Bts");
router.post("/add", (req, res) => {
  BtsController.add(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
router.get("/get", (req, res) => {
  BtsController.getBts(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
router.delete("/delete/:id", BtsController.delete);
router.put("/update/:id", BtsController.update);

module.exports = router;
