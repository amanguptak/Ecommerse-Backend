const Razorpay = require('razorpay')
const dotenv = require("dotenv")
const express = require('express');
const app = express();
const cors = require('cors')

dotenv.config({path:"config/config.env"})
app.use(cors({
    origin:"https://animeuchicha.vercel.app",
    credentials:true,
}))

exports.instance = new Razorpay({
    key_id: process.env.ROZAR_API_KEY,
    key_secret: process.env.ROZAR_SECRET_KEY,
  })