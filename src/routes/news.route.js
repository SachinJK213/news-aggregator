const express = require("express");
const NEWSROUTES = express.Router();

const verifyToken = require("../middlewares/auth.middleware");
const { getNews, getTopNews } = require("../controllers/news.controller");
NEWSROUTES.use(express.urlencoded({ extended: false }));
NEWSROUTES.use(express.json());

NEWSROUTES.get("/", verifyToken, getNews);

NEWSROUTES.get("/top", verifyToken, getTopNews);

module.exports = NEWSROUTES;
