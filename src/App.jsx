import Intro from './components/Intro.jsx';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useContext } from 'react';
import {ThemeContext} from './context';
import Curriculum from './components/curriculum/Curriculum';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "black": "white", 
    color: darkMode && "white"}}> 

        <Toggle />
        <Navbar/>
        <Intro id="inicio"/>
        <Curriculum/>
        <About title="Acerca de mi" id="about"/>
        <ProductList title="Mis proyectos" id="proyects"/>
        <Contact title="Contáctame" id="contact"/>
        <Footer/>
    </div>
  );
}

export default App;
