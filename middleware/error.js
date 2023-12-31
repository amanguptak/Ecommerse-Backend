const ErrorHandler = require('../utils/errorHandler')

module.exports =(err,req,res,next)=>{
err.statusCode=err.statusCode||500;
err.message=err.message|| "Internal Server Error";

//wrong mnoogo db id error implementation

if(err.name === "CastError"){
    const message = `Resourse not found ${err.path}`
    err= new ErrorHandler(message, 400);
}



  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = ` Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = ` Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }




res.status(err.statusCode).json({
    success: false,
    message:err.message
})
}
