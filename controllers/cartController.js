const express = require('express')
const user = require('../models/users')
const carts = require('../models/carts')
const foods = require('../models/foods')



const addToCart = async (req, res) => {
    try {
        let userId = req.user.userId;
        // details of food 
        let foodDetails = await foods.findOne({ _id: req.body.foodId });
        // if their in no cartUser it will return null or it will privide cartUser
        let cartUser = await carts.findOne({ userId: userId });
        console.log({ cartUser });
        // user entered food id and restaurent id
        let uFoodId = req.body.foodId;
        // user provided restaurant ID
        let uRestaurantId = req.body.restaurantId;
        // find food id from food collection
        let checkFood = await foods.findOne({ _id: uFoodId });
        // this will provide array of object available restaurants
        let availableRestaurants = checkFood.availableRestaurants;

        // find restaurent id from food collection
        let checkResto = await foods.findOne({ restaurantId: uRestaurantId });
        console.log({ checkResto });
        if (!checkFood) {
            return res.send("food not present");
        }


        // check food which user privided food is present in restrorant or not

        const presentInResto = availableRestaurants.find(element => {
            return element.restaurant_id === uRestaurantId
        });
        if (!presentInResto) {
            res.send("food is not present in restorent");
            return
        }

        // if user cart is already there 
        if (cartUser?.userId === userId) {
            const cartFirstElement = cartUser.foodItems[0];
            console.log(cartFirstElement);
            if (cartFirstElement.restaurantId !== uRestaurantId) {
                console.log(cartFirstElement);
                res.send("restro is diff please choose food from same restraunt");
                return
            }
            // return if cart food it and user provided user id is same

            const found = cartUser.foodItems.find(element => {

                return element.foodId === uFoodId
            });
            if (found === undefined) {
                let newFoodItem = {
                    foodId: req.body.foodId,
                    name: foodDetails.name,
                    restaurantId: req.body.restaurantId,
                    quantity: 1
                }
                let totalPrice = cartUser.totalPrice + foodDetails.rate
                await carts.findOneAndUpdate(
                    { userId: userId },
                    { $push: { foodItems: newFoodItem }, totalPrice }
                )
                res.send("new item added successfully");

            } else {
                let totalPrice = cartUser.totalPrice + foodDetails.rate
                let updatedData = await carts.findOneAndUpdate(
                    { userId: userId, 'foodItems._id': found._id },
                    { 'foodItems.$.quantity': found.quantity + 1, totalPrice },
                    { new: true }
                )

                res.send("updated succesfully")
            }

        } else {
            // if user cart is not there create new cart
            let foodItems = [{
                foodId: req.body.foodId,
                name: foodDetails.name,
                restaurantId: req.body.restaurantId,
                quantity: 1
            }]
            let totalPrice = foodDetails.rate
            // console.log(totalPrice);

            let data = { userId, foodItems, totalPrice };
            let insertToCart = await carts.create(data);

            res.send("item added to cart successfully")
        }
        // console.log(cartUser);


    } catch (error) {
        console.log({ error });
        res.send(error)

    }

}



module.exports = {
    addToCart
}



