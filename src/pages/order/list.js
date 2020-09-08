import React from "react";
import {Link} from "react-router-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "123123",
    };
  }
  render() {
    if(this.props.match.params.name !== "detail"){
        return (
            <div>
              <Link to="/order/detail">{this.props.match.params.name}</Link>
            </div>
          );
    }else{
        return null;
    }
    
  }
}
export default List;
