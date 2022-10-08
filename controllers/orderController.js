const express = require('express');
const userAddress = require('../routers/userRouter');
const user = require('../models/users')
const carts = require('../models/carts')
const orders = require('../models/orders');



const orderFood = async (req, res) => {
    try {
        let userId = await req.user.userId
        console.log({ userId });

        // check that users cart is available or not
        let userCart = await carts.findOne({ userId: userId });
        // let cartId = userCart._id
        if (!userCart) return res.send("your cart is empty please add something to your cart");
        let foodItems = userCart.foodItems

        // let cartInfo = JSON.parse(JSON.stringify(userCart))

        let addressId = req.body.addressId;
        let totalPrice = userCart.totalPrice;

        let data = { userId, orderStatus: "orderPlaced", addressId, foodItems, totalPrice }
        let insertIntoOrder = await orders.create(data);
        let orderId = await orders.findOne({ userId: userId });

        // console.log(cartInfo.foodItems);
        let deleteCart = await carts.deleteOne({ userId: userId });
        let resToUser = "  this is your order id:   " + orderId.userId
        res.send(`Your order placed succesfully
        ` + resToUser
        );


    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
}



module.exports = { orderFood }
