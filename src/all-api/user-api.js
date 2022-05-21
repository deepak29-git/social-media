import axios from "axios";
import { getToken } from "../Utility/get-token";
import { userData } from "../redux/features/auth/authSlice";
import { getAllUserData, getUserData } from "../redux/features/user/userSlice";

const getAllUser = async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users`);
    dispatch(getAllUserData(data.users));
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (id, dispatch, userDetail) => {
  if (!userDetail.length) {
    return;
  }
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    dispatch(getUserData(data.user));
    console.log("else chala");
  } catch (error) {
    console.log(error);
  }
};
const editProfileApi = async (userDetail, dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/api/users/edit",
      data: {
        userData: userDetail,
      },
      headers: { authorization: getToken() },
    });
    dispatch(userData(data.user));
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, editProfileApi, getUser };
