import mongoose from 'mongoose';    

const userSchema= new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required: true,
        enum:["male","female","other"]
    },
    profilePic:{
        type: String,
        default: ""
    }
});


// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
export default User;