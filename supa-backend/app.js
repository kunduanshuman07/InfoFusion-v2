// Imports
import express from "express";
import cors from "cors";
import http from "http";
import { config } from "dotenv";
import router from "./routes/index.js";

// App
config();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT||5001;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}))

// Routes 
app.use('/v2', router);
app.get('/', (req,res)=>{
    res.send('Landing Page');
})

// Server
server.listen(PORT, ()=>{
    console.log(`Server started PORT: ${PORT}`);
})




