import { Router } from 'express';
import authentication from '../middlewares/authentication';

import client from '../modules/client/routes';
import product from '../modules/product/routes';
import auth from '../modules/authorization/routes';

const routes = Router();

routes.use('/clients', authentication, client);
routes.use('/products', authentication, product);
routes.use('/generateAuth', auth);

export default routes;
