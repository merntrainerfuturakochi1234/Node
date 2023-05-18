// const express=require('express')
// const app=express()
// app.get("/",(req,res)=>{
//     res.send("Welcome")
// })
// app.get("/home",(req,res)=>{
//     res.send("Nice to  meet you..")
// })
// Port = process.env.Port || 5000;
// app.listen(Port, () => console.log(`Server is ${Port}`))


//------------------------------------------------------------------------------


// const express=require('express')
// const app=express()
// app.use(express.static('Home'))
//  app.get("/*",(req,res)=>{
//     res.status(404)
//     res.send("not found")

// })  
// Port = process.env.Port || 5000;
// app.listen(Port, () => console.log(`Server is Running on ${Port}`))


//---------------------------------------------------------------------------------------


// const express=require('express')
// const app=express()
// app.use(express.static('Home'))
// app.get("/home",Token,validation,(req,res)=>{
//     res.send("Welcome")

// })
// function Token(req,res,next) {
//     console.log("Token Creating");
//     req.token=true;
//     next();
// }
// function validation(req,res,next) {
//     if (req.token)
//     {
//     console.log("Token Approved");
//     next();
//     }
//     else{
//         console.log("no token");
//         res.send("no token")
//     }
// }
// Port = process.env.Port || 5000;
// app.listen(Port, () => console.log(`Server is ${Port}`))


//-------------------------------------------------------------------------

const TestRouter=require("./TestRouter/Router")
const express=require('express')


const app=express()
app.use(express.json())

app.use('/demo',TestRouter)
app.use('/hello',TestRouter)

Port = process.env.Port || 3000;
app.listen(Port, () => console.log(`Server is ${Port}`)) 