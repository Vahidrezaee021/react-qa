import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Questions/Question";
import styled from "./Home.module.css";

function Home() {
  const [Answers, SetAnswers] = useState([]);
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9&type=boolean")
      .then((result) => {
        SetAnswers(result.data.results);
        console.log(result.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styled.home}>
      <Header />
      {Answers.map((Answer , index) => (
        <Question key={index} question={Answer.question} answer={Answer.incorrect_answers} number={index}/>
      ))}
      <Footer />
    </div>
  );
}

export default Home;
