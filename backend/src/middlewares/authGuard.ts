import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env['JWT_SECRET']!;

export interface AuthPayload {
  id: string;
  email: string;
}

export function authGuard(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Token não fornecido' });
    return;
  }

  try {
    const token = header.split(' ')[1]!;
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;
    (req as any).authUser = payload;
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
}
