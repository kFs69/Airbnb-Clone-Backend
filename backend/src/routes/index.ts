import { Router } from 'express';
const routes = Router();

import ReservationRoutes from './reservations.routes';
import UserRoutes from './users.routes';
import PlaceRoutes from './places.routes';
import SessionRoutes from './sessions.routes';

routes.use('/reservation', ReservationRoutes);
routes.use('/user', UserRoutes);
routes.use('/place', PlaceRoutes);
routes.use('/session', SessionRoutes);

export default routes;