import "./App.css";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./component/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Reset />
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
