import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import recipeRoutes from './routes/recipes.js';
import userRoutes from './routes/users.js';
 
const app=express();
dotenv.config();

app.use(bodyParser.json({limit: "32mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended:true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/recipes", recipeRoutes);
app.use("/user", userRoutes);



const MONGO_URI=process.env.MONGO_URI;
const PORT= process.env.PORT || 5001;

const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URI);
        app.listen(PORT , ()=> console.log("server up"));
    }catch(err){
         console.log(err.massage);
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("Database connection established successfully"));
mongoose.connection.on("error", (err) => console.log("Database connection error:", err));
