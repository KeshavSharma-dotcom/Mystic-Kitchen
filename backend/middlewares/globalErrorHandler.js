const globalError = (err,req,res,next)=>{
    res.status(500).json({
        success : false,
        error : err.message | "Server Error"
    })
}

module.exports = globalError