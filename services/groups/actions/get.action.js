import Group from '../model/group.model';

export default async function getGroups({ userId }) {
  const groups = await Group.find({ userIds: userId }, { expenseGroups: 0 });
  return { groups };
}
