const express = require('express');
const address = require('../models/userAddress');
const user = require('../models/users')
const jwt = require('jsonwebtoken');
const userAddress = require('../models/userAddress');


const addAddress = async (req, res) => {
    try {

        let userId = req.user.userId

        let data = {
            userId,
            userName: req.body.userName,
            location: req.body.location,
            zip: req.body.zip,
            address: req.body.address,
            phone: req.body.phone
        }

        let insertAddress = await userAddress.create(data)

        res.send("address inserted succeessfully")


    } catch (error) {
        console.log(error.message);
        res.send(error)
    }
}

const fetchAddress = async (req, res) => {
    try {
        let userId = req.user.userId
        let search = await userAddress.find({ userId: userId })
        res.send(search)

    } catch (error) {
        console.log(error.message);
        res.send(error)

    }
}


module.exports = {
    addAddress,
    fetchAddress
};



