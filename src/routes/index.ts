import { Router } from 'express';

import client from '../modules/client/routes';
import product from '../modules/product/routes';
import auth from '../modules/authorization/routes';
import favoriteProduct from '../modules/favorite/routes';
import authentication from '../middlewares/authentication';

const routes = Router();

routes.use('/clients', authentication, client);
routes.use('/products', authentication, product);
routes.use('/favoriteProduct', authentication, favoriteProduct);
routes.use('/generateAuth', auth);

export default routes;
