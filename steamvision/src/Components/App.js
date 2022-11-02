import logo from '../logo.svg';
import '../Styles/App.css';
import '../Styles/index.css'
import Homepage from './Homepage'
import Header from './Header'
import BlueZone from './BlueZone';
function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <BlueZone />
    </div>
  );
}

export default App;
