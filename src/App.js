import "./App.css";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./component/Header";
import Router from "./Router";
import { ColorProvider } from "./ColorContext";

function App() {
  return (
    <ColorProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Reset />
        <Header />
        <Router />
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
