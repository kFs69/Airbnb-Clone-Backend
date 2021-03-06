import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';

const sessionRouter = Router();

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

interface Response {
  user: User;
  token: string;
}

sessionRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const createSession = new CreateSessionService();

  const { user, token }: Response = await createSession.execute({
    email,
    password
  });

  delete user.password;

  return res.json({ user, token });
});

export default sessionRouter;