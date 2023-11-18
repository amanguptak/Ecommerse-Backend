const express = require('express');
const app = express();
const products = require('./routes/productRoute');
const user = require("./routes/userRoute")
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute')
const errorMiddleware = require("./middleware/error")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

// const corsOptions = {
//     origin: ['https://animeuchicha.vercel.app','http://localhost:3001','https://api.razorpay.com'],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//   };
 
  
// app.use(cors(corsOptions))
app.use(cors())
// app.use((req, res, next) => {
//     const allowedOrigins = ['https://animeuchicha.vercel.app','http://localhost:3001','https://api.razorpay.com'];
//     const origin = req.headers.origin;
  
//     if (allowedOrigins.includes(origin)) {
//       res.header('Access-Control-Allow-Origin', origin);
//     }
  
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api",products)
app.use("/api",user)
app.use("/api",order)
app.use("/api",payment)
// middleware for error
app.use(errorMiddleware)



module.exports =app