import profileRouter from '../services/profile/routes';
import groupsRouter from '../services/groups/routes';

export default function routes(app) {
  app.use('/api/user', profileRouter);
  app.use('/api/groups', groupsRouter);
}
