import React from "react";
import clsx from "clsx";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { api} from "../../utils";
import { useStyles } from "../../skins";
import { useDispatch } from "react-redux";
import { actions } from "../../utils";
function Search(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    account: "",
    password: "",
  });
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (env) => {
    props.getInput(values);
  };
  return (
    <div className={clsx(classes.outInput)}>
      {props.Name ? (
        <TextField
          value={values.account}
          className={clsx(classes.textInput)}
          name="account"
          variant="outlined"
          onChange={handleInput}
          label="UserName"
        />
      ) : null}
      {props.Pwd ? (
        <TextField
          value={values.password}
          className={clsx(classes.textInput)}
          name="password"
          type="password"
          variant="outlined"
          onChange={handleInput}
          label="Password"
        />
      ) : null}
      <Button variant="outlined" color="primary" onClick={handleSubmit} size="large">
        登录
      </Button>
    </div>
  );
}

function Container(props) {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(false);
  const dispatch = useDispatch()
  const getInput = (value) => {
    api("user/login", "POST", value).then((res) => {
      console.log(res);
      if (!res.body) { 
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
      localStorage.setItem("pro-token", res.body.token);
      dispatch(actions.login())
      dispatch(actions.setAvatar(''))
      dispatch(actions.setNickName('admin'))
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
