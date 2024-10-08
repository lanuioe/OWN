import "./App.css";
import { Reset } from "styled-reset";
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components';
import MainHome from "./component/MainHome";
import Header from "./component/Header"
import Router from './Router'

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <Header />
      <Router />


    </>
  );
}

export default App;
