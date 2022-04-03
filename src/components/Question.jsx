import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../question-context";
import RadioElement from "./Radio";
const initalResponse = {
  currentQuestion: 1,
  selectedRadioId: ""
};
const Question = ({ id, questions, setId }) => {
  const [response, setResponse] = useState(initalResponse);
  const [results, setResults] = useState([]);
  const dataLength = useContext(QuestionContext).length;

  const { question, questionoption, questionid } = questions;

  // Next Page Event Handler
  const nextPageHandler = () => {
    setId((id) => id + 1);
    setResponse((response) => {
      return (response.currentQuestion = questionid);
    });
    setResults((prevState) => [...prevState, response]);
  };

  //submit response
  const submitResponseHandler = () => {
    setResults((results) => results.concat(response));
  };
  // Previous Page Event Handler
  const previousPageHandler = () => {
    setId((id) => id - 1);
    setResponse((response) => {
      return (response.currentQuestion = questionid);
    });
    submitResponseHandler();
  };
  console.log(results);
  const radioIdCB = (radioId, questId) => {
    console.log(id, "idd");
    setResponse((response) => {
      return { currentQuestion: questionid, selectedRadioId: radioId };
    });
  };
  useEffect(() => {
    radioIdCB();
  }, [id]);

  console.log(response);
  return (
    <section className="questionContainer">
      <h3 className="question">
        [Q.{questionid}] {question}
      </h3>

      {/* Reusabel Radio Component */}
      <RadioElement questionoption={questionoption} radioIdCB={radioIdCB} />

      {/* Action Buttons  */}
      <footer className="buttons">
        <button onClick={previousPageHandler} disabled={id === 0}>
          Previous
        </button>
        <button onClick={nextPageHandler} disabled={id >= dataLength - 1}>
          Save & Next
        </button>
      </footer>
    </section>
  );
};

export default Question;
