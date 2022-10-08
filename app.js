const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routers/userRouter");
const addressRouter = require("./routers/addressRouter")
const restaurantRouter = require('./routers/restaurantsRouter')
const foodRouter = require('./routers/foodRouter');
const cartRouter = require('./routers/cartRouter');
const orderRouter = require('./routers/orderRouter')
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017",
    {
        dbName: "FoodDelivery"
    }, (err) => {
        if (!err) console.log("connected to mongo db");
    })

app.use('', userRouter, addressRouter, restaurantRouter, foodRouter, cartRouter, orderRouter);
// app.use('', addressRouter);



app.listen(3500, (err) => {
    if (!err) console.log("port 3500 is running");
})
