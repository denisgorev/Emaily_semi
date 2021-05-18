//it is rendered by Field tag, so Redux form has the ability to add their props here

import React from "react";

// export default (props) => {
//   const input = props.input;
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {/* <input onBlur={input.onBlur} onChange={input.onChange}/>  */}
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
