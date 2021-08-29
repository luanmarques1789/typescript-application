import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
	res.send('Hello World 666');
});

routes.get('/users', UserController.index);
routes.get('/users', UserController.create);
export default routes;
