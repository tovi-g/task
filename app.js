const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
const router=require('./router/api');
const bodyParser=require('body-Parser');
const cors=require('cors');
app.use(cors());

app.use(bodyParser.json());


app.use('/',router)

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log('error:',err);
    })



app.listen(4200,()=>{
    console.log('its work');
})