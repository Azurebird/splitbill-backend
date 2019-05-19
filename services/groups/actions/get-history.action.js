import GroupHistory from '../model/history';

export default async function getHistory({ groupId }) {
  const history = await GroupHistory.getActiveHistory({ groupId });
  return { history };
}
