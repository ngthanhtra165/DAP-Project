import logo from "./logo.svg";
import Footer from "./Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Example from "./Example";

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
        <Route path="/example" element={<Example />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
