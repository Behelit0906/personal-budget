import express from 'express';
import cors from 'cors';
import { PORT } from './config/config.js';
import v1UserRouter from './v1/routes/userRoutes.js';
import v1OperationRouter from './v1/routes/operationRoutes.js';
import v1SwaggerDocs from './v1/swagger.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/users', v1UserRouter);
app.use('/api/v1/operations', v1OperationRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);

  v1SwaggerDocs(app, PORT);
});
