import express from "express";
import { PORT } from "./config/config.js";
import userRouter from "./v1/routes/userRoutes.js";


const app = express();

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});




