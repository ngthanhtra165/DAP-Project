import logo from './logo.svg';
import Footer from './Footer'; 
import MainPage from './MainPage';
import {BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import Example from './Example';
import Score from './Score';
import Nav from './Nav';

function App() {
  return (

    <Router className = 'App' >
      <Nav />
      
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/score" element={<Score/>} />
          <Route path="/example" element = {<Example/>} />
      </Routes>
     
      <Footer />
    </Router>  
  )
}

export default App;
