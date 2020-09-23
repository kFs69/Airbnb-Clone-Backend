import Reservation from '../models/Reservation';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Reservation)
class ReservationsRepository extends Repository<Reservation> {

}

export default ReservationsRepository;