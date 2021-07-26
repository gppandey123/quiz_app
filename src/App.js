import React, {useState} from "react";
import { Question } from "./data/question";
import Quiz from "./component/Quiz";
import Container from "@material-ui/core/Container";
import ProgressBar from './component/ProgressBar';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const questionData = Question.map((item) => {
    return {
      ...item,
      answer: [...item.incorrect_answers, item.correct_answer],
    };
  });

  return (
    <>
    <ProgressBar activeStep={activeStep} />
    <Container maxWidth="sm">
      <Quiz data={questionData} activeStep={activeStep} setActiveStep={setActiveStep}/>
    </Container>
    </>
  );
};

export default App;
