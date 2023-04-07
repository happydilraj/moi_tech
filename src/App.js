import './App.css';
import './Loginpage.css'
import Loginpage from './LoginPage'
import Superhero from './Superhero';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Loginpage/>}/>
        <Route exact path="/Superhero" element={<Superhero/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
