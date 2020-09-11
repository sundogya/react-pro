import React from "react";
import ReactDOM from "react-dom";
import Routers from "./route";
import { Header, SiderBar } from "./pages/common";
const Common = () => {
  const headerObj = { name: "BackEnd Manage" };
  headerObj.isLogin = localStorage.getItem("token") ? true : false;
  headerObj.avatar = localStorage.getItem("avatar")
    ? localStorage.getItem("avatar")
    : null;
    headerObj.nickName = localStorage.getItem("nickName")
    ? localStorage.getItem("nickName")
    : null; 
  return <Header {...headerObj} />;
};
ReactDOM.render(
  <div>
    <Common />
    <SiderBar>
      <Routers />
    </SiderBar>
  </div>,
  document.getElementById("root")
);
