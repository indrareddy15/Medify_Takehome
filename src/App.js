import './App.css';
import Footer from './components/Footer/FooterSection';
import HeaderScroll from './components/HeaderScroll/HeaderScroll';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HeaderScroll />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
