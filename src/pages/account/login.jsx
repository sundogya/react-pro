import React from "react";
import clsx from "clsx";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { api } from "../../utils";
import { useStyles } from "../../skins";

function Search(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    userName: "",
    password: "",
  });
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (env) => {
    props.getInput(values);
  };
  return (
    <div className={classes.contentName}>
      {props.Name ? (
        <TextField
          value={values.userName}
          className={clsx(classes.margin, classes.textField)}
          name="userName"
          variant="outlined"
          onChange={handleInput}
          label="UserName"
        />
      ) : null}
      {props.Pwd ? (
        <TextField
          value={values.password}
          className={clsx(classes.margin, classes.textField)}
          name="password"
          type="password"
          variant="outlined"
          onChange={handleInput}
          label="Password"
        />
      ) : null}
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        登录
      </Button>
    </div>
  );
}

function Container(props) {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(false);
  const getInput = (value) => {
    api("auth/admin/login", "GET", value).then((res) => {
      console.log(res);
      if (!res.data) { 
        setAlert(<Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            severity="error"
            onClose={handleClose}
            variant="outlined"
          >
            {res.message}
          </Alert>
        </Snackbar>)
        return;
      }
      localStorage.setItem("token", res.data.token);
    });
  }
  const handleClose = () => {
    setAlert(false)
  }
  return (
    <div className={classes.content}>
      {alert}
      <Search
        Name={true}
        Pwd={true}
        getInput={getInput}
      />
    </div>
  );
}

class Login extends React.Component {
  render() {
    return <Container />;
  }
}
export default Login;
