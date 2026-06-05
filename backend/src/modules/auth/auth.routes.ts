import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env['JWT_SECRET']!;
const FRONTEND_URL = process.env['FRONTEND_URL'] || 'http://localhost:5173';

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const user = req.user as { id: string; email: string; name: string; picture?: string };
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name, picture: user.picture },
      JWT_SECRET,
      { expiresIn: '7d' },
    );
    res.redirect(`${FRONTEND_URL}?token=${token}`);
  },
);

export default router;
