import axios from "axios";
import { getToken } from "../Utility/get-token";

const followUserApi = async (followUserId, userDispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/users/follow/${followUserId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    userDispatch({ type: "FOLLOW_USER", payload: data.user });
  } catch (error) {
    console.log(error);
  }
};

const unfollowUserApi = async (followUserId, userDispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/users/unfollow/${followUserId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    userDispatch({ type: "UNFOLLOW_USER", payload: data.user });
  } catch (error) {
    console.log(error);
  }
};
export { followUserApi, unfollowUserApi };
