import { Router } from 'express';

import CreatePlaceService from '../services/CreatePlaceService';

const placeRouter = Router();

placeRouter.post('/', async (req, res) => {
  const {
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
  } = req.body;

  const createPlace = new CreatePlaceService();

  const place = await createPlace.execute({
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

  return res.json(place);
});

export default placeRouter;