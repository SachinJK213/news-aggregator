const express = require("express");
const authRoutes = express.Router();

const { login, register } = require("../controllers/auth.controller");

authRoutes.use(express.json());
authRoutes.use(express.urlencoded({ extended: false }));

//Reistration 
authRoutes.post("/register", register);

//Login
authRoutes.post("/login", login);

module.exports = authRoutes;
