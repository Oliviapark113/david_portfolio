import './App.css';
import Topbar from './components/Topbar';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';


function App() {
  return (
    <div className="app">
        <Topbar />
        {/* <Home /> */}
        <Settings />
    </div>
  );
}

export default App;
