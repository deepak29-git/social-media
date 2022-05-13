import axios from "axios";
import { getToken } from "../Utility/get-token";

const getAllUser = async (userDispatch) => {
  try {
    const { data } = await axios.get(`/api/users`);
    userDispatch({ type: "GET_ALL_USER", payload: data.users });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (id, userDispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    userDispatch({ type: "GET_USER", payload: data.user });
    console.log(data,"from getuser")
  } catch (error) {
    console.log(error);
  }
};

const editProfileApi = async (userData, userDispatch) => {
  const { _id, firstName, lastName, userName, bio } = userData;
  try {
    const { data } = await axios({
      method: "POST",
      url: "/api/users/edit",
      data: {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        bio: bio,
      },
      headers: { authorization: getToken() },
    });
    console.log(data.user, "from edit api");
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, editProfileApi, getUser };
