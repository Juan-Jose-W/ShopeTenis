import express from "express";
import cors from 'cors';
import tenisRoutes from './routes/tenisRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(cors());
// Aumentar el límite a 10mb
app.use(express.json({ limit: '10mb' }));

app.use('/api/tenis', tenisRoutes);
app.use('/api/users', userRoutes);

export default app;
