import express from "express";
import path from 'path'
import  router from "./routes/userRouter";
import { dbConnect } from "./db/connectDb";

const app=express()

dbConnect()
app.use(express.json())
app.use(express.urlencoded())
app.use('/', router)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

app.use(express.static(path.join(__dirname, '../public')))

let PORT:number = 5555
app.listen(PORT, ()=> console.log(`Server is connected at ${PORT}`) )