import './App.css';
import Intro from './components/Intro.jsx';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div className="App">
     <Toggle/>
      <Intro/>
      <About/>
      <ProductList />
      <Contact/>
    </div>
  );
}

export default App;
