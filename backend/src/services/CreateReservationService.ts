import { getCustomRepository } from 'typeorm';

import Reservation from '../models/Reservation';
import ReservationsRepository from '../repositories/ReservationsRepository';

interface Request {
  checkin: Date;
  checkout: Date;
  adult: number;
  children: number;
  infants: number;
}

class CreateReservationService {
  public async execute({ checkin, checkout, adult, children, infants }: Request): Promise<Reservation> {
    const reservationsRepository = getCustomRepository(ReservationsRepository);

    
  } 
}

export default CreateReservationService;