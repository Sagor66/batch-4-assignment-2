import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/moduels/product/product.route';
const app: Application = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
