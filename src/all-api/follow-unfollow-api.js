import axios from "axios";
import { getToken } from "../Utility/get-token";
import { followUser,unfollowUser } from "../redux/features/user/userSlice";
const followUserApi = async (followUserId, dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/users/follow/${followUserId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    dispatch(followUser(data.user))
  } catch (error) {
    console.log(error);
  }
};

const unfollowUserApi = async (followUserId, dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `/api/users/unfollow/${followUserId}`,
      data: {},
      headers: { authorization: getToken() },
    });
    // userDispatch({ type: "UNFOLLOW_USER", payload: data.user });
    dispatch(unfollowUser(data.user))
  } catch (error) {
    console.log(error);
  }
};
export { followUserApi, unfollowUserApi };
