import Group from '../model/group';

export default async function create({ profileId, name }) {
  const group = await Group.create({
    profileIds: [profileId],
    name,
    expenseGroups: []
  });
  return { group };
}
