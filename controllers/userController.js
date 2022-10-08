const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/users');
const SECRECT_KEY = "skajdfhO*&^D*&E$r8739rbc";
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    try {

        let userFound = await user.findOne({ email: req.body.email });

        if (userFound) {
            res.send("this email is already reginsted please sign in");
        } else {
            let myData = new user(req.body);
            myData.save();
            res.send({ message: "You have successfully registed" });
        }



    } catch (error) {
        res.send(error)
    }
}

const login = async (req, res) => {
    try {
        const recivedEmail = req.body.email;
        const recivedPassword = req.body.password;
        const userFound = await user.findOne({ email: recivedEmail });

        if (!userFound) return res.send("please check email");


        if (await bcrypt.compare(recivedPassword, userFound.password)) {
            var token = jwt.sign({ userId: userFound._id, name: userFound.name, email: req.body.email }, SECRECT_KEY);
            req.body.name
            console.log(userFound._id);
            res.send({ message: "You have successfully loged in", token });
        } else {
            res.send("please check email or pass");
        }

    } catch (error) {
        res.send(error)
    }

}


module.exports = {
    signup,
    login
}

