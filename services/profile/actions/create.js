import Profile from "../model/profile";

export default function create(req, res) {
  const { name } = req.body;
  Profile.create();
}
