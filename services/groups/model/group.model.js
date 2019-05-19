import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';
import { throws } from 'assert';

/**
 * An expense made to the group
 */
const ExpenseSchema = new Schema({
  userIds: { type: String, required: true },
  detail: { type: String, required: true },
  amount: { type: Number, required: true }
});

/**
 * Groups expnses while the settleDown flag is false
 */
const ExpenseGroupSchema = new Schema({
  settleDown: { type: Boolean, default: false },
  expenses: { type: [ExpenseSchema] }
});

/**
 * A grups where multiple user may be part of it
 */
const GroupSchema = new Schema(
  {
    groupId: { type: String, default: shortid.generate },
    name: { type: String, required: true },
    userIds: { type: [String] },
    expenseGroups: { type: [ExpenseGroupSchema], required: true }
  },
  { timestamps: true }
);

function getExpenses({ groupId }) {
  return this.findOne({
    groupId,
    expenseGroups: {
      settleDown: false
    }
  });
}

const Group = mongoose.model('group', GroupSchema);

export default Group;
