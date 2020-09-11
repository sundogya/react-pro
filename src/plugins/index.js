import React from "react";
const AsyncComponent =  (loader) => {
    class AsyncComponent extends React.Component {
      state = {
        component: null,
      };
  
      use() {
        if (!this.state.component) {
          loader().then((module) => {
            this.setState({ component: module.default });
          });
        }
      }
  
      render() {
        const Comp = this.state.component;
        return Comp ? <Comp {...this.props} /> : <p>loading</p>;
      }
    }
  
    return AsyncComponent;
  };
  export {
    AsyncComponent
  }