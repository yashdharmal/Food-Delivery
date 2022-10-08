const express = require('express');
const foods = require('../models/foods')
const SECRECT_KEY = "skajdfhO*&^D*&E$r8739rbc";
const jwt = require('jsonwebtoken');

const searchFood = async (req, res) => {
    try {
        let name = req.body.name
        let search = await foods.find({ name: { $regex: name, $options: "i" } });
        res.send(search)

    } catch (error) {
        console.log(error);
        res.send(error)

    }
}

module.exports = {
    searchFood
}