import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListOrder = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">PM10</TableCell>
            <TableCell align="right">TSP</TableCell>
            <TableCell align="right">PM2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.PM10}</TableCell>
              <TableCell align="right">{row.TSP}</TableCell>
              <TableCell align="right">{row.pm2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const SearchOrder = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    orderNum: "",
    mobile: "",
    status: "",
  });
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (env) => {
    props.getInput(values);
  };
  return (
    <div className={clsx(classes.outInput)}>
      {props.OrderNum ? (
        <TextField
          value={values.orderNum}
          className={clsx(classes.textInput)}
          name="orderNum"
          variant="outlined"
          onChange={handleInput}
          label="OrderNum"
        />
      ) : null}
      {props.Mobile ? (
        <TextField
          value={values.mobile}
          className={clsx(classes.textInput)}
          name="mobile"
          variant="outlined"
          onChange={handleInput}
          label="Mobile"
        />
      ) : null}
      {props.OrderStatus ? (
        <TextField
          value={values.status}
          className={clsx(classes.textInput)}
          name="status"
          variant="outlined"
          onChange={handleInput}
          label="OrderStatus"
        />
      ) : null}
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        size="large"
      >
        登录
      </Button>
    </div>
  );
};
export { ListOrder, SearchOrder };
