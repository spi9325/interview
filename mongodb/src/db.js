
import mongoose, { Schema } from "mongoose"

const User = new Schema({
    name: String
})

export const userModel = mongoose.model('users',User)