import './App.css';
import Categories from './components/Filter/Categories';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Categories />
        <Cart />
      </div>
      <div className="Container">
        <Menu />
      </div>
    </div>
  );
}

export default App;
