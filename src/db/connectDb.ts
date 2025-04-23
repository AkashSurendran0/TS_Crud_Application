import mongoose from "mongoose"

const dbUrl: string='mongodb+srv://AkashSurendran:akash12345@dejavu-ecommerce.ca94u.mongodb.net/test?retryWrites=true&w=majority&appName=DejaVu-Ecommerce'

export const dbConnect=async ()=>{
    try {
        mongoose.connect(dbUrl)
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Databse connection failed')
    }
}