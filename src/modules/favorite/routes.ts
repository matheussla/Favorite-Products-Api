import { Router } from 'express';

import FavoriteController from './controller';

const favoriteRouter = Router();
const favoriteController = new FavoriteController();

favoriteRouter.post('/add', favoriteController.create);
favoriteRouter.delete('/:id', favoriteController.delete);

export default favoriteRouter;
