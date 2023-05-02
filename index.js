const express  =require("express")

const app=express()

const middware1=(req,res,next)=>{
    console.log("middleware works before giving the response")
    next();
}

const middware2=(req,res)=>{
  console.log("middleware2")
}
app.use(middware1)
app.use(middware2)

app.get("/login",(req,res)=>{
    console.log("the reponse is coming after the verification")
    res.send("hello")
})

app.listen(4000,()=>{
    console.log("server is running out")
})

