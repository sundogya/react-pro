const changeOpen = () => {
  return {
    type: "CHANGE_OPEN",
  };
};
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
const setNickName = (payload) => {
  return {
    type: "SET_NICKNAME",
    payload: payload,
  };
};
const setAvatar = (payload) => {
  return {
    type: "SET_AVATAR",
    payload: payload,
  };
};
const login = () => {
  return {
    type: "LOGIN",
  };
};
const logout = () => {
  return {
    type: "LOGOUT",
  };
};
export default {
  changeOpen,
  increment,
  decrement,
  setNickName,
  setAvatar,
  login,
  logout,
};
