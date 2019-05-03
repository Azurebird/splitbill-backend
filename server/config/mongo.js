import mongoose from 'mongoose';
import { mongo } from './environment';

export default () => {
  mongoose.connect(mongo.connection_url, { useNewUrlParser: true });
};
