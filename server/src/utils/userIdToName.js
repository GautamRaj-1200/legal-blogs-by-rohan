import { User } from "../models/user.model.js";
export const userIdToName = async (id) => {
  try {
    const userInfo = await User.findById(id);
    // console.log(userInfo.username);
    return userInfo.username;
  } catch (error) {
    console.log("Error: ", error);
  }
};
