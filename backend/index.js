const express= require("express")
const sample= require("./sample.json")
const cors=require("cors")
const fs =require("fs")
const app=express()
app.use(cors({
     origin:[ "http://localhost:5173",
     "https://crud-employe-data.vercel.app/"],

     methods: ["GET", "POST","PATCH","DELETE"]
}))
app.use(express.json())
// get methods

app.get("/sample",(req,res)=>{
    return res.json(sample)
    
})

// delete method

app.delete("/sample/:id",(req,res)=>{
let id= Number(req.params.id)
let filteredvalue= sample.filter((user)=>user.id !==id);
fs.writeFile("./sample.json", JSON.stringify(filteredvalue,null,2),(err,data)=>{
    return res.json(filteredvalue)
})
})

// post methods

app.post("/sample/",(req,res)=>{
let {name,email,age}= req.body
if(!name||!email||!age){
    res.status(400).send({"message":"All field requires"})
}
    let id = Math.floor(Math.random() * 90) + 10;
    sample.push({id,name,email,age})
   
    fs.writeFile("./sample.json", JSON.stringify(sample,null,2),(err,data)=>{
     return res.json({"message":"Successfully Created"})
})
})

// update user data
app.patch("/sample/:id", (req, res) => {
    let id = Number(req.params.id)
    let { name, email, age } = req.body

    if (!name || !email || !age) {
        return res.status(400).send({
            message: "All field requires"
        })
    }

    let index = sample.findIndex((user) => user.id == id)

    sample.splice(index, 1, { id, name, email, age })

    fs.writeFile(
        "./sample.json",
        JSON.stringify(sample, null, 2),
        (err) => {
            return res.json({
                message: "Update Successfully"
            })
        }
    )
})

const port = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is Running...${port}`);
});