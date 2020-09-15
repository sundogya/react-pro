import { createStore} from "redux";
import {persistStore,persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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
const config =  {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const store = createStore(
  persistCombineReducers(config,{
    open,
    counter,
  })
);
export const persistor = persistStore(store)
export default store;
