import React from "react";
import { Link } from "react-router-dom";

function Name() {
  return <div>hahahaha</div>;
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "123123",
      child: null
    };
  }
  componentDidMount(){
    this.setState({
      child:Name
    })
  }
  render() {
    const C = this.state.child;
    if (this.props.match.params.name !== "detail") {
      return (
        <div>
          {C ? <C /> : null}
          <Link to="/order/detail">{this.props.match.params.name}</Link>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default List;
