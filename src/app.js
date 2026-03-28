import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
/* we cant use agg.get() because our routes are on the diff file 
and hence we have to use middleware to get the router and we will
use app.use() */

app.use("/api/v1/users",userRouter)
//http://localhost:8000/users this link will be opened and it will pass
//the request to userRouter and then it will check for the route
//like http://localhost:8000/users/register. 





export { app };