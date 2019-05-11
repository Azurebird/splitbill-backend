import bcrypt from 'bcrypt';
import Profile from '../model/profile';

export default async function login(req, res) {
  try {
    const { email, password } = req.body.credentials;

    let profile = await Profile.findOne({ email });
    if (profile) {
      res.status(400).json({ errors: { global: 'User already exists' } });
    } else {
      profile = await Profile.create({
        email,
        hashPassword: bcrypt.hashSync(password, 10)
      });
      res.status(200).json({ user: profile.toAuthJSON() });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
