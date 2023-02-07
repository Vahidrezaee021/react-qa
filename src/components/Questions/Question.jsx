import Button from "../Buttons/Button";
import styled from "./Question.module.css";

function Question(props) {
  return (
    <div className="d-flex">
      <div className={styled.question}>
        <div className="container">
          <div className={styled.qBox}>
            <h1>Questions & Answers</h1>
            <p>
              <span>{props.number + 1}/10-</span> {props.question}
            </p>
            <Button correct={props.correct} incorrect={props.incorrect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
