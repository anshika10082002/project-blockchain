const mongoose= require("mongoose")

const coinSchema=  mongoose.Schema({
    symbol:{type:String,unique:true},//unique:true
    name:{type:String,unique:true},  //unique:true
    marketCapUsd:{type:String},
    priceUsd:{type:String}
})

module.exports=mongoose.model("CryptoCoin",coinSchema)

