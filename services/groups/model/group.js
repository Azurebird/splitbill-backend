import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';
import env from '../../../server/config/environment';

const GroupSchema = new Schema(
  {
    groupId: { type: String, default: shortid.generate },
    name: { type: String, required: true },
    profileIds: { type: [String] }
  },
  { timestamps: true }
);

const Group = mongoose.model('group', GroupSchema);

export default Group;
