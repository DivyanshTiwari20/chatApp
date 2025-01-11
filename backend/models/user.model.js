import mongoose from 'mongoose';    

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
    profilePic: {
        type: String,
        default: "",
    },
});



// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
export default User;