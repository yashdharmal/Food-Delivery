const express = require('express');
const jwt = require("jsonwebtoken")
const SECRECT_KEY = "skajdfhO*&^D*&E$r8739rbc";






const authMiddleware = (req, res, next) => {
    try {
        let token = req.headers.auth

        let tokenData = jwt.verify(token, SECRECT_KEY)

        req.user = tokenData

        next();
    } catch (error) {
        res.send("Un authorized").status(401)
    }

}

module.exports = {
    authMiddleware
}



