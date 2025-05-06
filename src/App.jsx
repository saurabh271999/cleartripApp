import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Navbar';
import './App.css';
import Banner from './assets/Banner';
import Poster from './assets/Poster';
import Popular from './assets/Popular';
import Footer from './assets/Footer';
import About from './assets/About';
import Payment from './assets/Payment'
import Booking from './assets/Booking';
import Layout from './assets/Layout';
import Information from './assets/Information'

// import Loginpop from './assets/Loginpop'



    function App() {
      return (
        <BrowserRouter>
          <Navbar /> {/* Move this OUTSIDE Routes so it stays on all pages */}
    
          <Routes>
            <Route path="/" element={
              <>
              {/* <Loginpop/> */}
                <Banner />
                <Poster />
                <Popular />
                <About />
                <Information />
                <Footer />
              </>
            } />
            <Route path="/booking" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/layout" element={<Layout />} />
            
          </Routes>
        </BrowserRouter>
      );
    }
    
  

export default App;
