import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// to use .env file variables
dotenv.config();

// to parse the incoming JSON data from (req.body)
app.use(express.json());

// middleware 
app.use('/api/auth',authRoutes);

// app.get ('/', (req,res)=>{
//     res.send ('API is running');
// });


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`);
});