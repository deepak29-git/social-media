import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "Goyal",
    portfolio: "https://deepak-portfolio-react.netlify.app/",
    userName: "deepak_1996",
    profilePhoto:"https://media-exp1.licdn.com/dms/image/C5603AQEXgNHSGntBWg/profile-displayphoto-shrink_800_800/0/1631095585980?e=1658361600&v=beta&t=83NvcwpXLLz2ECrV8F2Os7UEhMdS7nIjfxrteRqQceY",
    bio: "aspring full stack develper",
    email: "deepak123@gmail.com",
    password: "deepak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
