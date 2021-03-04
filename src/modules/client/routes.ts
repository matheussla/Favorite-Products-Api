import { Router } from 'express';

import ClientsController from './controller';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', clientsController.create);

clientsRouter.get('/', clientsController.getAll);

clientsRouter.get('/:id', clientsController.getAll);

clientsRouter.put('/:id', clientsController.update);

clientsRouter.delete('/:id', clientsController.delete);

export default clientsRouter;
