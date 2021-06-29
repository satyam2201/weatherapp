const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express();



app.set('view engine', 'hbs');

// public static path
const publicPath =path.join(__dirname,"../public")
const viewpath = path.join(__dirname,"../templates/views")
const PartialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(PartialsPath)
app.set("views" ,viewpath)
app.use(express.static(publicPath))



// routing
app.get("/",(req,res)=>{
res.render('index')
})

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")

})


app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("port run on 3000")
    
   
})