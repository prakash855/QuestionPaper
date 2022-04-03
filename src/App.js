import { useContext, useState } from "react";
import Question from "./components/Question";
import { QuestionContext } from "./question-context";
import "./styles.css";

export default function App() {
  const [id, setId] = useState(0);
  const questions = useContext(QuestionContext);

  return (
    <div className="App">
      <Question questions={questions[id]} id={id} key={id} setId={setId} />
    </div>
  );
}
