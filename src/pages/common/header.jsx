import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
import clsx from 'clsx';
import {store} from "../../utils";
import {useStyles} from "../../skins";

const Header = (props) => {
  const [open, setOpen] = React.useState(store.getState().open);
  const classes = useStyles()
  store.subscribe(()=>{
    setOpen(store.getState().open)
  })
  return (
    <Router>
      <AppBar position="fixed" style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>{store.dispatch({type:'CHANGE_OPEN'})}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{props.name}</Typography>
        </Toolbar>
        <Toolbar>{props.isLogin ? (
            <Button color="secondary" variant="outlined">
              {props.nickName}
            </Button>
          ) : (
            <Link to="/account/login" color="secondary">
              <Button color="secondary" variant="outlined">
                LOGIN
              </Button>
            </Link>
          )}</Toolbar>
      </AppBar>
    </Router>
  );
};
export default Header;
