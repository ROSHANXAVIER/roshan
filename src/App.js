
import './App.css';
import Navbar from './components/Navbar';
import Show1 from './components/show1';
import Homecards from './components/homecards';
import Show2 from './components/show2';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Show1/>
      <Homecards/>
      <Show2/>
    </div>
  );
}

export default App;
