const express = require('express')
const router = express.Router()
const {getUsersController,createUserController} = require("../controller /controller")

router.get("/:id",getUsersController)

router.post("/create",createUserController)


module.exports = router;
