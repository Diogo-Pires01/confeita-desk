import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './modules/auth/google.strategy.js';
import authRoutes from './modules/auth/auth.routes.js';

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
