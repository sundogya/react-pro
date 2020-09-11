import React from "react";
const SiderBar = (props) => {
  return (
    <div>
      <h1>This is SiderBar</h1>
      {props.children}
    </div>
  );
};
export default SiderBar;
