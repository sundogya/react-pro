import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{props.name}</Typography>
          {props.isLogin ? (
            <Button color="secondary" variant="outlined">
              {props.nickName}
            </Button>
          ) : (
            <Link to="/account/login" color="secondary">
              <Button color="secondary" variant="outlined">
                LOGIN
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Router>
  );
};
export default Header;
