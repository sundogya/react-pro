import React from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  CssBaseline 
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import { store } from "../../utils";
import { useStyles } from "../../skins";
const SiderBar = (props) => {
  // console.log(props)
  const [open, setOpen] = React.useState(store.getState().open);
  const classes = useStyles();
  store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    setOpen(state.open);
  });
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {[
            { text: "Inbox", Icon: MailIcon },
            { text: "Starred", Icon: InboxIcon },
            { text: "SendMail", Icon: MailIcon },
            { text: "Drafts", Icon: InboxIcon },
          ].map((Obj, index) => (
            <ListItem button key={Obj.text}>
              <ListItemIcon>
                <Obj.Icon />
              </ListItemIcon>
              <ListItemText primary={Obj.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default SiderBar;
