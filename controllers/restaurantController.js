const express = require('express');
const restaurants = require('../models/restaurants')
const SECRECT_KEY = "skajdfhO*&^D*&E$r8739rbc";
const jwt = require('jsonwebtoken');


const searchRestaurant = async (req, res) => {
    try {
        let restaurentName = req.body.restaurentName
        console.log(restaurentName);
        let search = await restaurants.find({ restaurentName: { $regex: restaurentName, $options: "i" } });
        res.send(search)

    } catch (error) {
        res.send(error)

    }


}






module.exports = { searchRestaurant }