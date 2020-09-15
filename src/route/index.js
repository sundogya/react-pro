import React from "react";
import { Router, Route } from "react-router";
import { Game } from "../pages/game";
import { createBrowserHistory } from "history";
import { OrderList, OrderDetail } from "../pages/order";
import {Login} from "../pages/account";
const history = createBrowserHistory();

function Routers() {
  return (
    <Router history={history}>
      <Route path="/"></Route>
      <Route path="/game" component={Game} />
      <Route path="/hello" component={OrderList} />
      <Route exact={true} path="/order/detail" component={OrderDetail} />
      <Route path="/order/list" component={OrderList} />
      <Route path="/account/login" component={Login}/>
    </Router>
  );
}
export default Routers;
