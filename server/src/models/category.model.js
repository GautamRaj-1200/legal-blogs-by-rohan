import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    category:[{
        type:String,
        enum:["Law","Cricket","Administration"]
    }]
},{timestamps:true})

export const Category = mongoose.model("Category",categorySchema);