import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function auth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if(!authHeader) throw new Error('JWT token is missing');


  const [, token]:any = authHeader?.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    }

    return next();
  } catch (err) {
    throw new Error('Invalid JWT token');
  }

}