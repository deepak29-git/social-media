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
  console.log(id,"getuer")
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    userDispatch({ type: "GET_USER", payload: data.user });
  } catch (error) {
    console.log(error);
  }
};

const editProfileApi = async (userData, setUser) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/api/users/edit",
      data: {
        userData,
      },
      headers: { authorization: getToken() },
    });
    setUser(data.user)
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, editProfileApi, getUser };
