import { useState } from "react";
import styled from "./Button.module.css";

function Button(props) {
  const [selected , setSelected] = useState([])
  function correctAnswer () {
    setSelected(props.correct)
    console.log(props.correct)
    alert(props.correct)
  }
  function IncorrectAnswer () {
    setSelected(props.incorrect)
    console.log(props.incorrect)
    alert(props.incorrect)
  }
  return (
    <div>
      <div className={styled.btns}>
        <button onClick={correctAnswer} className="btn btn-success">True</button>
        <button onClick={IncorrectAnswer} className="btn btn-danger">False</button>
      </div>
    </div>
  );
}

export default Button;
