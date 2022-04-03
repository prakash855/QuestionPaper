import { createContext } from "react";
import data from "./data.json";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const { questions } = data;
  return (
    <QuestionContext.Provider value={questions}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
