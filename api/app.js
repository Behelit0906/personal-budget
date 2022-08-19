import express from "express";
import { PORT } from "./config/config.js";
import userRouter from "./v1/routes/userRoutes.js";
import operationRouter from "./v1/routes/operationRoutes.js";


const app = express();

app.use(express.json());
app.use(userRouter);
app.use('/operations',operationRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});




