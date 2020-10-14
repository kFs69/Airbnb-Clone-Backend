import { getRepository } from 'typeorm';

import Place from '../models/Place';

interface Request {
  host_id: string;
  title: string;
  description: string;
  guests: number;
  bedroom: number;
  double_bed?: number;
  sofa_bed?: number;
  single_bed?: number;
  bath: number;
  price: number;
  aditional_rules?: string;
  photos: Array<string>;
  country: string;
  state?: string;
  territory?: string;
  city: string;
  room_type: number;
}

class CreatePlaceService {
  public async execute({
    host_id,
    title,
    description,
    guests,
    bedroom,
    double_bed,
    sofa_bed,
    single_bed,
    bath,
    price,
    aditional_rules,
    photos,
    country,
    state,
    territory,
    city,
    room_type
  }: Request): Promise<Place> {
    const placeRepository = getRepository(Place);

    if(!title || !description ||!guests ||!bath ||!price || !room_type) {
      throw new Error('Fill all the fields');
    }

    if(!state && !territory) {
      throw new Error('Fill state or territory');
    }

    const place = placeRepository.create({
      host_id,
      title,
      description,
      guests,
      bedroom,
      double_bed,
      sofa_bed,
      single_bed,
      bath,
      price,
      aditional_rules,
      photos,
      country,
      state,
      territory,
      city,
      room_type
    });

    await placeRepository.save(place);

    return place;
  }
}

export default CreatePlaceService;