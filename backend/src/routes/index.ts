import { Router } from 'express';
const routes = Router();

import ReservationRoutes from './reservation.routes';
import UserRoutes from './user.routes';

routes.use('/reservation', ReservationRoutes);
routes.use('/user', UserRoutes);

export default routes;