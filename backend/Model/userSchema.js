import mongoose, { mongo } from "mongoose";

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        default: "https://icon-library.com/images/default-user-icon/default-user-icon-9.jpg",
    },
});

export const User = mongoose.model("User", UserSchema);

