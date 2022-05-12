import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "Goyal",
    userName:"deepak_1996",
    bio:"aspring full stack develper",
    email: "deepak123@gmail.com",
    password: "deepak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
