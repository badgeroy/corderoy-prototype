import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetShopbopdata from './components/GetShopbopData';
import Wardrobe from "./pages/Wardrobe";
import DragAndDrop from "./DragAndDrop.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wardrobe/>
      </header>
    </div>
  );
}

export default App;
