import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Game } from "../pages/game";
import { OrderList, OrderDetail } from "../manage/order";
import { Login } from "../pages/account";
import { Header, SiderBar } from "../pages/common";

const Base = () => {
  return (
    <div>
      <Header />
      <SiderBar>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/hello" component={OrderList} />
          <Route path="/order/detail" component={OrderDetail} />
          <Route path="/order/list" component={OrderList} />
        </Switch>
      </SiderBar>
    </div>
  );
};
const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/account/login" component={Login} />
          <Route path="/" component={Base}></Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
