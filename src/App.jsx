import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import HowSuiWorks from "./pages/HowSuiWorks";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
         <Route path="/job/:category/:id" element={<JobDetails />} />
        <Route path="/how-sui-works" element={<HowSuiWorks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
      {/* footer */}
      <Footer/>
    </>
  );
}

export default App;
