import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './modules/auth/google.strategy.js';
import authRoutes from './modules/auth/auth.routes.js';
import productRoutes from './modules/product/product.routes.js';
import orderRoutes from './modules/order/order.routes.js';
import transactionRoutes from './modules/transaction/transaction.routes.js';
import { authGuard } from './middlewares/authGuard.js';

const app = express();
const PORT = process.env['PORT'] || 3000;
const FRONTEND_URL = process.env['FRONTEND_URL'] || 'http://localhost:5173';

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);

app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(express.json({ limit: '10kb' }));
app.use(passport.initialize());

app.use('/auth', authRoutes);

app.use('/products', authGuard, productRoutes);
app.use('/orders', authGuard, orderRoutes);
app.use('/transactions', authGuard, transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
