import React from "react";
import { ListOrder ,SearchOrder} from "../../pages/order";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { api } from "../../utils";
class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      size: 12,
      rows: [],
      alert: null,
    };
  }
  componentDidMount() {
    api("test/zoey", "GET", {}).then((res) => {
      if (!res.body) {
        const alert = (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            onClose={this.handleClose}
          >
            <Alert
              severity="error"
              onClose={this.handleClose}
              variant="outlined"
            >
              {res.message}
            </Alert>
          </Snackbar>
        );
        this.setState({
          alert: alert,
        });
        return;
      }
      this.setState({
        rows: res.body,
      });
    });
  }
  handleClose() {
    this.setState({
      alert: null,
    });
  }
  search(v){
    console.log(v)
  }
  render() {
    return (<div><SearchOrder OrderNum={true} Mobile={true} OrderStatus={true} getInput={this.search}/><ListOrder rows={this.state.rows}>{this.state.alert}</ListOrder></div>);
  }
}
export default OrderList;
