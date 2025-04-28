import mongoose from "mongoose"

const dbUrl: string='Not defined'

export const dbConnect=async ()=>{
    try {
        mongoose.connect(dbUrl)
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Databse connection failed')
    }
}