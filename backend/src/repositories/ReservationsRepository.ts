import { EntityRepository, Repository, getRepository } from 'typeorm';

import Reservation from '../models/Reservation';

@EntityRepository(Reservation)
class ReservationsRepository extends Repository<Reservation> {
  public async all(): Promise<Reservation[]> {
    const reservationRepository = getRepository(Reservation);

    const reservation = await reservationRepository.find();

    return reservation;
  }    
}

export default ReservationsRepository;