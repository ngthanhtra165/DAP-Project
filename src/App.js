import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import EssayExamples from "./components/Example/Examples";

import Nav from "./Nav";
import MainPage from "./components/MainPage";
import CheckEssay from "./components/CheckEssay";

function App() {
  return (
    <Router className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/score" element={<CheckEssay />} />
        <Route path = "/example" element= {<EssayExamples />} />
      </Routes>


    </Router>
  );
}

export default App;
