import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GetShopbopData from './components/GetShopbopData';
import Wardrobe from "./pages/Wardrobe";
import DragAndDrop from "./DragAndDrop.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetShopbopData/>
        <Wardrobe/>
      </header>
    </div>
  );
}

export default App;
