import './App.css';
import ProductData from './components/Products/Resourcess/ProductData';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SocialMediaIcon from './components/assest/SocialMediaIcon';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProductData />
      <SocialMediaIcon />
      <Footer /> 
    </div>
  );
}

export default App;
