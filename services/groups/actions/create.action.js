import Group from '../model/group';

export default async function create({ profileId, name }) {
  const groups = await Group.create({ profileIds: [profileId], name });
  return { groups };
}
