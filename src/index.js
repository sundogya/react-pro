import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { Game } from "./game";
import { Header } from "./pages/common";
import { createBrowserHistory } from "history";
import { OrderList, OrderDetail } from "./pages/order";
const history = createBrowserHistory();
ReactDOM.render(
  (<Router history={history}>
    <Route path="/" exact component={Header}></Route>
    <Route path="/game" component={Game} />
    <Route path="/header" component={Header} />
    <Route path="/hello" component={OrderList} />
    <Route exact={true} path="/order" component={Header}/>
    <Route exact={true} path="/order/detail" component={OrderDetail}/>
    <Route path="/order/:name" component={OrderList}/>
  </Router>),
  document.getElementById("root")
);