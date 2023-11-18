//here we get a token and store into cookie not in localStorage
const sendToken = (user,statusCode,res)=>{
    const token = user.getJWToken()

    //for cookies
    const options  = {
        expires: new Date(
            Date.now() + 4 * 24 * 60 * 60 * 1000
        ),
        httpOnly: false,
        sameSite:'None',
        secure:true
    }
    res.status(statusCode).cookie("token",token,options ).json({
        success: true,
        user,
        token,
    })
}

module.exports = sendToken;