const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/assets"))
const views = path.join(__dirname, "views")

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: views })
})
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: views })
})
app.get("/horse", (req, res) => {
  res.sendFile("horse.html", { root: views })
})
app.get("/tiger", (req, res) => {
  res.sendFile("tiger.html", { root: views })
})
app.get("/me", (req, res) => {
  res.sendFile("me.html", { root: views })
})
app.get("/lion", (req, res) => {
  res.sendFile("lion.html", { root: views })
})


app.listen(3000)
console.log("Running at port 3000")
