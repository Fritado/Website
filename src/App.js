import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/Pages/HomePage/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactUs from "./components/Pages/ContactUs";
import Benefits from "./components/Pages/Benefits";
import Features from "./components/Pages/Features";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
