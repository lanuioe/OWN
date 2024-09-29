import "./App.css";
import { Reset } from "styled-reset";
import MainHome from "./component/MainHome";
import Header from "./component/Header"

function App() {
  return (
    <>
      <Reset />
      <Header />
      <MainHome />
    </>
  );
}

export default App;
