import React from "react";
import ReactDOM from "react-dom";
import Routers from "./route";
import { Header, SiderBar } from "./pages/common";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./utils";
const Common = () => {
  const headerObj = { name: "BackEnd Manage" };
  headerObj.isLogin = localStorage.getItem("token") ? true : false;
  headerObj.avatar = localStorage.getItem("avatar")
    ? localStorage.getItem("avatar")
    : null;
  headerObj.nickName = localStorage.getItem("nickName")
    ? localStorage.getItem("nickName")
    : "Admin";
  return <Header {...headerObj} />;
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Common />
        <SiderBar>
          <Routers />
        </SiderBar>
      </PersistGate>
    </Provider>
  );
};
export default App;