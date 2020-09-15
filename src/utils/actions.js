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
export default { changeOpen, increment, decrement };
