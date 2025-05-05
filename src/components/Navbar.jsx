import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // "login" | "register"

  const toggleMenu = () => setIsOpen(!isOpen);

  const openModal = (tab) => {
    setActiveTab(tab);
    setShowModal(true);
    setIsOpen(false); // Close sidebar if open
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src="./src/assets/sui-Logo.png" alt="Logo" className="h-8 w-auto" />
              <Link to="/" className="text-2xl font-bold text-sky-700">SuiSkills</Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/jobs" className="text-gray-700 hover:text-sky-600 font-medium">Jobs</Link>
              <Link to="/how-sui-works" className="text-gray-700 hover:text-sky-600 font-medium">How Sui Works</Link>
              <Link to="/blog" className="text-gray-700 hover:text-sky-600 font-medium">Blogs</Link>
              <Link to="/contact" className="text-gray-700 hover:text-sky-600 font-medium">Contact Us</Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={() => openModal("login")} className="bg-gradient-to-r from-sky-400 to-blue-800 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90">
                Login
              </button>
              <button onClick={() => openModal("register")} className="bg-sky-100 text-sky-600 px-4 py-2 rounded-lg font-semibold">
                Host
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-2xl text-sky-700">
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 flex flex-col space-y-6 text-gray-700 font-medium text-lg">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/jobs" onClick={toggleMenu}>Jobs</Link>
            <Link to="/how-sui-works" onClick={toggleMenu}>How Sui Works</Link>
            <Link to="/blog" onClick={toggleMenu}>Blogs</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            <hr />
            <button onClick={() => openModal("login")} className="bg-gradient-to-r from-sky-400 to-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-center">Login</button>
            <button onClick={() => openModal("register")} className="bg-sky-100 text-sky-600 px-4 py-2 rounded-lg font-semibold text-center">Host</button>
          </div>
        </div>
      </nav>

      {/* Modal with Transparent Background */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative border border-gray-300">
            {/* Close button */}
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-500 text-2xl font-bold hover:text-red-500">×</button>

            {/* Tabs */}
            <div className="flex border-b mb-4">
              <button
                className={`flex-1 py-2 font-semibold ${activeTab === "login" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500"}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 font-semibold ${activeTab === "register" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500"}`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
            </div>

            {/* Form Content */}
            {activeTab === "login" ? (
              <form className="space-y-3">
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
              </form>
            ) : (
              <form className="space-y-3">
                <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
