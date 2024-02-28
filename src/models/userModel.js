import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    userImage: {
        type: String,
        required: [true, "Please choose a profile picture"],
    },
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date,
}, { collection: 'allUsers' })

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;