import profileRouter from '../services/profile/routes';
import groupsRouter from '../services/groups/routes';

export default function routes(app) {
  app.use('/api/profile', profileRouter);
  app.use('/api/groups', groupsRouter);
}
