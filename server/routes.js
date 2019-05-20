import authRouter from '../services/auth/routes';
import groupsRouter from '../services/groups/routes';
import profileRouter from '../services/profile/routes';

export default function routes(app) {
  app.use('/api/auth', authRouter);
  app.use('/api/user', profileRouter);
  app.use('/api/groups', groupsRouter);
}
