import profileRouter from '../services/profile/routes';

export default function routes(app) {
  app.use('/api/profile', profileRouter);
}
