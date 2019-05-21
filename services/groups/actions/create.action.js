import Group from '../model/group.model';

export default async function create({ userId, name }) {
  const group = await Group.create({
    userIds: [userId],
    name,
    expenseGroups: [{}]
  });
  return { group };
}
