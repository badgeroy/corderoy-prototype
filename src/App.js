import './App.css';
import GetShopbopdata from './components/GetShopbopData';
import Wardrobe from "./Wardrobe";
import DragAndDrop from "./DragAndDrop.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wardrobe/>
        <DragAndDrop/>
      </header>
    </div>
  );
}

export default App;
