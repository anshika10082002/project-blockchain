const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-Parser")
const route= require("./route/route")

const app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Anshika:anshika2003@cluster0.ajpkc5u.mongodb.net/Anshika10-DB",{
    useNewUrlParser:true
})//or mongoose.set('strictQuery', false)//both can be used

.then(()=>console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 3000,function(){  
    console.log("express app is running on this port "+ (process.env.PORT || 3000))
})