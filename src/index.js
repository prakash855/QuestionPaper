import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { QuestionProvider } from "./question-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </StrictMode>
);
