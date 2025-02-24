import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const About = () => <div className="p-10 text-2xl">About Page</div>;
const Gallery = () => <div className="p-10 text-2xl">Gallery Page</div>;
const Contact = () => <div className="p-10 text-2xl">Contact Page</div>;
const Scheduling = () => <div className="p-10 text-2x1">Scheduling</div>;

function App() {
  return (
    <Router basename="/PhotographyProject">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scheduling" element={<Scheduling />} />
      </Routes>
    </Router>
  );
}

export default App;
