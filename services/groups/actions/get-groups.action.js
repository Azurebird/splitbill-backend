import Group from '../model/group';

export default async function getGroups({ profileId }) {
  const groups = await Group.find({ profileId });
  return { groups };
}
