import { Router } from 'express';

 import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
// import authMidleware from './app/middlewares/auth';

const routes = new Router();

// routes.post('/sessions', SessionController.store);
routes.get('/users', UserController.list);
routes.post('/users', UserController.store);

// routes.use(authMidleware);

// routes.put('/users', UserController.update);

export default routes;
