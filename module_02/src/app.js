import express from 'express';
import * as Sentry from "@sentry/node";
import Youch from 'youch';
import path from 'path';
import routes from './routes';
import sentryConfig from './config/sentry';
import 'express-async-errors';

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);
    
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    //deve ser colocado antes de todas as rotas
    this.server.use(Sentry.Handlers.requestHandler());

    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.server.use(routes);

    //deve ser colocado após todas as rotas
    this.server.use(Sentry.Handlers.errorHandler());
  }

  //middleware de tratamento de erros
  exceptionHandler() {
    this.server.use(async(error, req, res, next) => {
      const errors = await new Youch(error, req).toJSON();

      return res.status(500).json(errors);
    });
  }
}

export default new App().server;
