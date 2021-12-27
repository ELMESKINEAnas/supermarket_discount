const {createUser,getUserByUserId,getUsers,getUsersByUserEmail, getAdminGenerale} = require ("./user.controllers");

const router = require('express').Router();

const { checkToken } = require("../../auth/token_validation")


router.post("/",checkToken, createUser);
router.get('/:id',checkToken, getUserByUserId);
router.get('/',checkToken, getUsers);
router.post("/login", getUsersByUserEmail);
router.post("/admin",getAdminGenerale);


module.exports = router;