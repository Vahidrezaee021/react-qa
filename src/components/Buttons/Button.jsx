import { useState } from "react";
import styled from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <div className={styled.btns}>
        <button className="btn btn-success">True</button>
        <button className="btn btn-danger">False</button>
      </div>
    </div>
  );
}

export default Button;
