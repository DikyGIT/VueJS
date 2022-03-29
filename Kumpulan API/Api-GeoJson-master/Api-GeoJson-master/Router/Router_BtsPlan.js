"use strict";
const router = require("express").Router();
const Controller = require("../controller/Controller_BtsPlan");
router.post("/add", (req, res) => {
    Controller.add(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
router.get("/get", (req, res) => {
    Controller.getBts(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
router.delete("/delete/:id", Controller.delete);
router.put("/update/:id", Controller.update);

module.exports = router;
