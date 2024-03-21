// Imports
import express from "express";
import cors from "cors";
import http from "http";
import { config } from "dotenv";
import router from "./routes/index.js";
import logger from "./logger.js"
// App
config();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT||5001;

// Middlewares
app.use(express.json());
app.use(logger);
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}))

// Routes 
app.use('/v2', router);

// Server
server.listen(PORT, ()=>{
    console.log(`Server started PORT: ${PORT}`);
})




