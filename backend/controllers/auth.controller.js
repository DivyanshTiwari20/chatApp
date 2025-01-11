import User from '../models/user.model.js';


export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Input validation
        if (!username || !password || !fullName || !gender) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Check if the username already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Generate profile picture based on gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user
        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        await newUser.save();

        // Return response
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        console.log('Error in signup controller:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const login = (req, res) => {
    console.log('Login route');
};

export const logout = (req, res) => {
    console.log('Logout route');
};
