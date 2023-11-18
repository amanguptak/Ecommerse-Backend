const Razorpay = require('razorpay')
const dotenv = require("dotenv")
const express = require('express');


dotenv.config({path:"config/config.env"})


exports.instance = new Razorpay({
    key_id: process.env.ROZAR_API_KEY,
    key_secret: process.env.ROZAR_SECRET_KEY,
  })