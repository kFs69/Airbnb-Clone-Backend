import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import authMiddleware from '../middlewares/auth';
import User from '../models/User';

const userRouter = Router();
const upload = multer(uploadConfig);

interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

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

userRouter.patch(
  '/avatar',
  authMiddleware,
  upload.single('avatar'),
  async (req, res) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

      const user: IUser = await updateUserAvatar.execute({
        user_id: req.user.id,
        avatarFilename: req.file.filename
      });

      delete user.password;

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
);

export default userRouter;