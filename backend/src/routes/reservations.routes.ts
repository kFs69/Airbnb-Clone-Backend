import { Router } from 'express';

import CreateReservationService from '../services/CreateReservationService';
import ReservationsRepository from '../repositories/ReservationsRepository';
import authMiddleware from '../middlewares/auth';

const reservationRouter = Router();
const reservationRepository = new ReservationsRepository();

reservationRouter.use(authMiddleware);

reservationRouter.post('/', async (req, res) => {
  const { user_id, place_id, checkin, checkout, adult, children, infants } = req.body;

  const createReservation = new CreateReservationService();

  const reservation = await createReservation.execute({
    user_id, 
    place_id, 
    checkin, 
    checkout, 
    adult, 
    children, 
    infants
  })

  return res.json(reservation);
});

reservationRouter.get('/', async (req, res) => {
  const reservation = await reservationRepository.all();

  return res.json(reservation);
})

export default reservationRouter;