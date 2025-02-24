import { useState } from "react";
import Nav from "../components/Nav";
import HomeContent from "../components/HomeContent";
import About from "../components/About";
import Gallery from "../components/Gallery"
import Contact from "../components/Contact";
import Scheduling from "../components/Scheduling";
import Header from "../components/Header";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("Home");

  return (
    <div className="grid grid-rows-16 grid-cols-16 h-screen ">
      {/* Header */}
      <header className="col-span-16 row-span-2 bg-gray-800 text-white text-center">
        <Header />
      </header>

      {/* Sidebar Navigation */}
      <div className="col-span-1 row-span-15 ">
        <Nav setActiveComponent={setActiveComponent} />
      </div>
      

      {/* Main Content */}
      <main className="col-span-15 row-span-15 bg-blue-100">
        {activeComponent === "Home" && <HomeContent />}
        {activeComponent === "Scheduling" && <Scheduling />}
        {activeComponent === "About" && <About />}
        {activeComponent === "Gallery" && <Gallery />}
        {activeComponent === "Contact" && <Contact />}
      </main>

      <footer className="col-span-16 row-span-1 bg-gray-800 text-white text-center py-4">
        Copy Right
      </footer>
    </div>
  );
};

export default Home;
