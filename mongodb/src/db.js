
import mongoose, { Schema } from "mongoose"

const User = new Schema({
    name: String,
    age: Number
})

const Book = new Schema({
    bname: String,
    uid: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


export const userModel = mongoose.model('users',User)
export const bookModel = mongoose.model('books',Book)