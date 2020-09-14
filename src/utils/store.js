import { createStore, combineReducers } from "redux";

function open(state = false, action) {
  switch (action.type) {
    case "CHANGE_OPEN":
      return !state;
    default:
      return state;
  }
}
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(
  combineReducers({
    open,
    counter,
  })
);

export default store;
