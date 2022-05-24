import React from "react";
const Rainbow = (WrappedComponent) => {
    console.log("Counter increase");
    let color = "red";
    return (props) => {
      color = "#" + ((Math.random() * 0xfff) << 0).toString(16);
  
      return (
        <div style={{ color }}>
          {console.log("Rainbow")}
          {console.log("__PROPS__", color)}
          <WrappedComponent {...props} />
        </div>
      );
    };
  };
  export default Rainbow;
  