import { Router } from 'express';

import ClientsController from './controller';

import authentication from '../../middlewares/authentication';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', clientsController.create);

clientsRouter.get('/', authentication, clientsController.getAll);

clientsRouter.get('/favoriteProducts/:id', authentication, clientsController.getById);

clientsRouter.put('/:id', authentication, clientsController.update);

clientsRouter.delete('/:id', authentication, clientsController.delete);

export default clientsRouter;
