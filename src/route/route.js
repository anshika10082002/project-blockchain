const express= require("express")
const route= express.Router()
const coinController= require("../controller/coinController")



route.get("/cryptoCoin",coinController.getCryptoCoin)





module.exports= route