//All require module
var express = require("express");
var router = express.Router();

//Route to carousel
router.get("/", (req, res) => {
    res.status(200).render("../views/mainpages/carousel.ejs");
})

//Route to Album
router.get("/a", (req, res) => {
    res.status(200).render("../views/mainpages/album.ejs");
})

//Route to blog
router.get("/b", (req, res) => {
    res.status(200).render("../views/mainpages/blog.ejs");
})

module.exports = router;