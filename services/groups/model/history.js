import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';
import env from '../../../server/config/environment';

const HistoryDetailSchema = new Schema({
  groupHistoryId: { type: String, default: shortid.generate },
  profileId: { type: String, required: true },
  detail: { type: String, required: true },
  amount: { type: Number, required: true }
});

const GroupHistorySchema = new Schema(
  {
    groupHistoryId: { type: String, default: shortid.generate },
    groupId: { type: String, required: true },
    settleDown: { type: Boolean },
    historyDetail: { type: [HistoryDetailSchema] }
  },
  { timestamps: true }
);

function getActiveHistory({ groupId }) {
  return this.findOne({
    groupId,
    settleDown: false
  });
}

GroupHistorySchema.statics = {
  getActiveHistory
};

const GroupHistory = mongoose.model('grouphistory', GroupHistorySchema);

export default GroupHistory;
