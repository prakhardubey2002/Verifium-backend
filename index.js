const { Router } = require("express");
const express = require("express");
const app = express();
const port = 3000;
// const programmingLanguagesRouter = require('./routes/programmingLanguages');
const aliLangRouter = require('./routes/ali');
app.use(express.json());//built-in Express JSON parser middleware to parse JSON 
app.use(
    express.urlencoded({
        extended: true,//middleware to parse URL encoded body
    })
);
app.get("/",(req,res)=>{
    res.json({message:"ok"});
})

app.use("/ali",aliLangRouter);

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    console.error(err.message,err.stack);
    res.status(statusCode).json({
        message : err.message
    })
    return;
})
app.listen(port,()=>{
    console.log(`Example app running on port : http//localhost:${port}`,)
})