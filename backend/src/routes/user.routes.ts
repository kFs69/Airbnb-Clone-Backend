import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
  
    const createUser = new CreateUserService();
  
    const user = await createUser.execute({ name, email, password });
  
    return res.json(user);
  } catch (err){
    return res.status(400).json({ err: err.message })
  }
});

export default userRouter;