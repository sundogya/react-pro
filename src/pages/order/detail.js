import React from "react";
import clsx from "clsx";
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Search(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    soc: undefined,
    number: undefined,
    idCard: undefined,
  });
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    props.getInput(values);
  };

  return (
    <div>
      {props.Name ? (
        <TextField
          value={values.name}
          className={clsx(classes.margin, classes.textField)}
          name="name"
          onChange={handleInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Name</InputAdornment>
            ),
          }}
        />
      ) : null}
      {props.Number ? (
        <TextField
          value={values.number || ""}
          className={clsx(classes.margin, classes.textField)}
          name="number"
          type="number"
          onChange={handleInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Number</InputAdornment>
            ),
          }}
        />
      ) : null}
      {props.IdCard ? (
        <TextField
          value={values.idCard || ""}
          className={clsx(classes.margin, classes.textField)}
          name="idCard"
          type="number"
          onChange={handleInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">身份证号</InputAdornment>
            ),
          }}
        />
      ) : null}
      {props.Soc ? (
        <TextField
          value={values.soc || ""}
          className={clsx(classes.margin, classes.textField)}
          name="soc"
          type="number"
          max={100}
          onChange={handleInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">%</InputAdornment>
            ),
            inputProps: { max: 100, min: 0 },
          }}
        />
      ) : null}
    </div>
  );
}

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
  }
  getInput(value) {
    console.log(value);
  }
  render() {
    return (
      <div>
        <Search
          Name={true}
          Number={true}
          IdCard={true}
          Soc={true}
          getInput={this.getInput}
        />
      </div>
    );
  }
}
export default Detail;
