const express = require("express")
const router = express.Router()
const form = require("../models/form");

router.get("/", function(req, res) {
    
    form.find({}).select("-__v").then((userData) => {
        res.render('data', {userData: userData})
    })
})

module.exports = router