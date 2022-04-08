import './App.css';
import Intro from './components/Intro.jsx';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import {ThemeContext} from './context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "black": "white", 
    color: darkMode && "white"}}> 


        <Toggle />
        <Intro />
        <About/>
        <ProductList />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
