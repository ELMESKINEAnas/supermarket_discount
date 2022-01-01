const { createPromo, createRespRayon, deletePromo, getAllPromos, getAllRespRayons } = require("./admnCentre.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createRespRayon", createRespRayon);
router.get("/getAllRespRayon", getAllRespRayons);
router.post("/createPromo",checkToken, createPromo);
router.delete("/deletePromo", deletePromo);
router.get("/getAllPromos",checkToken, getAllPromos);


module.exports = router