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
    portfolio: "https://adarsh-balika.com/",
    uploadImage:"https://minimaltoolkit.com/images/randomdata/female/17.jpg",
    bio: "tweet about web develpment",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shivam",
    lastName: "Soni",
    username: "shivam123",
    portfolio: "https://shivam-soni.com/",
    uploadImage:"https://minimaltoolkit.com/images/randomdata/male/86.jpg",
    bio: "senier full stack developer at linkedin",
    password: "shivam23",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tushar",
    lastName: "Goyal",
    username: "tushar123",
    password: "tushar123",
    portfolio: "https://Tushar-Goyal.com/",
    uploadImage:"https://minimaltoolkit.com/images/randomdata/male/79.jpg",
    bio: "Learning web development",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mohit",
    lastName: "Kumar",
    username: "mohit46",
    password: "mohit123",
    portfolio: "https://Mohit-Kumar.netlify.app/",
    uploadImage:"https://minimaltoolkit.com/images/randomdata/male/95.jpg",
    bio: "I am learning python",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ajay",
    lastName: "khatri",
    username: "himanshu",
    password: "humanshu123",
    portfolio: "https://Ajay-khatri.netlify.app/",
    uploadImage:"https://minimaltoolkit.com/images/randomdata/male/3.jpg",
    bio: "Front end develper at amazon",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Deepak",
    lastName: "Goyal",
    username: "deepak_1996",
    portfolio: "https://deepak-portfolio-react.netlify.app/",
    uploadImage:"https://media-exp1.licdn.com/dms/image/C5603AQEXgNHSGntBWg/profile-displayphoto-shrink_800_800/0/1631095585980?e=1658361600&v=beta&t=83NvcwpXLLz2ECrV8F2Os7UEhMdS7nIjfxrteRqQceY",
    bio: "aspring full stack develper",
    password: "deepak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
