import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Make sure this path is correct
import Banner from "./Banner";
import Poster from "./Poster";
import Popular from "./Popular";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />    
      <Banner />
      <Poster />
      <Popular />
      <Outlet />     {/* Page-specific content */}
      <Footer />
    </>
  );
}
