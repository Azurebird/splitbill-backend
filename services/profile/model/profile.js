import mongoose, { Schema } from "mongoose";

const ProfileSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
);

const Profile = mongoose.model("profile", ProfileSchema);

export default Profile;
