import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactUs from "./components/Pages/ContactUs";
import Benefits from "./components/Pages/Benefits";
import Features from "./components/Pages/Features";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";

const App = () => {
  return (
    <div className="App">
      {window.location.pathname !== "/login" ? <Header /> : null}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<ContactUs />} />

      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </div>
  );
};

export default App;
