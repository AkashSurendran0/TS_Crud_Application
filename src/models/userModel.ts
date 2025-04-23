import mongoose, {Document, Schema} from "mongoose"

export interface student{
    name: string
    age: number
    email: string
}

const userSchema= new Schema<student>({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const user=mongoose.model<student>('users', userSchema)
export default user