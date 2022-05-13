export const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      return { ...state, users: action.payload };
    case "EDIT_USER":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "FOLLOW_USER":
      return { ...state, followUser: action.payload };
    case "UNFOLLOW_USER":
      return { ...state, followUser: action.payload };
    default:
      return state;
  }
};
