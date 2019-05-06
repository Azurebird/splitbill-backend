import Profile from '../model/profile';

export default async function login(req, res) {
  try {
    const { email, password } = req.body.credentials;

    const profile = await Profile.findOne({ email });

    if (profile && !profile.isValidPassword(password)) {
      res.status(400).json({ errors: { global: 'Invalid credentials' } });
    } else if (profile) {
      res.status(200).json({ user: profile.toAuthJSON() });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
