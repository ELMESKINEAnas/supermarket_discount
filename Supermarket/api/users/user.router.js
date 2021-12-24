const {createUser,getUserByUserId,getUsers,getUsersByUserEmail} = require ("./user.controllers");

const router = require('express').Router();

const { checkToken } = require("../../auth/token_validation")

router.post("/",checkToken, createUser);
router.get('/:id',checkToken, getUserByUserId);
router.get('/',checkToken, getUsers);
router.post("/login", getUsersByUserEmail);


module.exports = router;