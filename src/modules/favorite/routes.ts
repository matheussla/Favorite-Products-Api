import { Router } from 'express';

import FavoriteController from './controller';

const favoriteRouter = Router();
const favoriteController = new FavoriteController();

favoriteRouter.post('/add', favoriteController.create);
favoriteRouter.get('/', favoriteController.create);
favoriteRouter.delete('/:id', favoriteController.create);

export default favoriteRouter;
