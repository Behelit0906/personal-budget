import express from "express";
import { PORT } from "./config/config.js";
import v1UserRouter from "./v1/routes/userRoutes.js";
import v1OperationRouter from "./v1/routes/operationRoutes.js";


const app = express();

app.use(express.json());
app.use('/api/v1/users', v1UserRouter);
app.use('/api/v1/operations', v1OperationRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});




