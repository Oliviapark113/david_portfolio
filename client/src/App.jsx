import './App.css';
import { React, useState } from 'react'
import Topbar from './components/Topbar';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import About from './pages/About/About';
import Awards from './pages/Awards/Awards';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
        <Home />
        <About/>     
         {/* <Awards/>
        <Settings />
        <Login />
        <Register/>            */}

    </div>
  );
}

export default App;
