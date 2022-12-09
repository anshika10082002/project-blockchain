const axios= require("axios") //fa02dfbb-1135-4e71-a981-1067a3efa9fc

const coinModel= require("../model/coinModel")//fa02dfbb-1135-4e71-a981-1067a3efa9fc



let getCryptoCoin= async function(req,res){
try{
    let options={
        method:"get",
        url:"https://api.coincap.io/v2/assets",
        headers:{
         Authorization: "Bearer fa02dfbb-1135-4e71-a981-1067a3efa9fc "
     }
        
    }
    let result= await axios(options)
    let resultData= result.data
    let allData= resultData.data

    
        let sorted= allData.sort((a,b)=>(b.changePercent24Hr-a.changePercent24Hr))
        await coinModel.deleteMany()
         await coinModel.create(sorted)
 
    return res.status(201).send({status:true,data:sorted})
}

catch(error){
    if(error.code ==11000){return res.status(400).send({status:false,message:"duplicate key is not allowed"})}
    res.status(500).send({status:false,message:error.message})
}
}

module.exports.getCryptoCoin=getCryptoCoin


////"E11000 duplicate key error collection: Anshika10-DB.cryptocoins index: symbol_1 dup key: { symbol: \"EGLD\" }"

// headers:{
        //     Authorization: "Bearer fa02dfbb-1135-4e71-a981-1067a3efa9fc "
        // }