import './App.css';
import Intro from './components/Intro.jsx';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList />
    </div>
  );
}

export default App;
