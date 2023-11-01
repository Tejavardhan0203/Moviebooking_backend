const mongoose=require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{
    dbName:process.env.DB_NAME
}).then(
    ()=>{
        console.log('DB Connected');
    }
).catch((err)=>{
    console.log('error connecting to database'+err);
})