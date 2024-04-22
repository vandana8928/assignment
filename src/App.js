
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingscreen from './component/Landingscreen';
import Loginscreen from "./component/Loginscreen";
import Registerscreen from "./component/Registerscreen";
import User from "./component/Profile";
import './App.css';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Landingscreen />} />
          <Route path="/Loginscreen" element={<Loginscreen />} />
          <Route path="/Registerscreen" element={<Registerscreen />} />
          <Route path="/User" element={<User />} />

      
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
