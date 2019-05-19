import GroupModel from '../model/group.model';

export default async function getExpenses({ groupId }) {
  const expenses = await GroupModel.getExpenses({ groupId });
  return { expenses };
}
