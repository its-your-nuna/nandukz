import './App.css';
import Footer from './reusables/Footer';
// import Home from './pages/Home';
import Navbar from './reusables/Navbar';
import Routes from './routes';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
