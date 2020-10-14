import { Between, getRepository } from 'typeorm';
import { differenceInCalendarDays, parseISO } from 'date-fns';

import Reservation from '../models/Reservation';
import Place from '../models/Place';
import ReservationsRepository from '../repositories/ReservationsRepository';

interface Request {
  user_id: string;
  place_id: string;
  checkin: Date;
  checkout: Date;
  adult: number;
  children: number;
  infants: number;
}

class CreateReservationService {
  public async execute({ user_id, place_id, checkin, checkout, adult, children, infants }: Request): Promise<Reservation> {
    const reservationsRepository = getRepository(Reservation);
    const placesRepository = getRepository(Place);

    const place = await placesRepository.findOne({
      where: { id: place_id }
    })

    if(!place) {
      throw new Error('Place not found!');
    }

    if(place.room_type == 1 || place.room_type == 2) {
      const numGuests = adult + children;

      if(numGuests > place.guests) {
        throw new Error('Limit of guests exceded!');
      }

      const reservedDate = await reservationsRepository.find({
        where: [
          { checkin: Between(checkin, checkout), place_id },
          { checkout: Between(checkin, checkout), place_id }
        ]
      })

      if(reservedDate.length != 0) {
        throw new Error('This date is already booked!')
      }

      const amount = differenceInCalendarDays(new Date(checkout), new Date(checkin)) * place.price;

      const reservation = reservationsRepository.create({
        user_id,
        place_id,
        checkin,
        checkout,
        adult,
        children,
        infants,
        amount
      })

      await reservationsRepository.save(reservation);
      return reservation;
    } else {
      const numGuests = adult + children;

      const reservedDate = await reservationsRepository.find({
        where: [
          { checkin: Between(checkin, checkout), place_id },
          { checkout: Between(checkin, checkout), place_id }
        ]
      })

      reservedDate.map(item => {
        const numAvaliableGuests = place.guests - (item.adult + item.children);

        if(numGuests > numAvaliableGuests) {
          throw new Error('Limit of guests exceded!');
        }
      })
      
      const amount = differenceInCalendarDays(checkin, checkout) * place.price;

      const reservation = reservationsRepository.create({
        user_id,
        place_id,
        checkin,
        checkout,
        adult,
        children,
        infants,
        amount
      })

      await reservationsRepository.save(reservation);
      return reservation;
    }
  } 
}

export default CreateReservationService;