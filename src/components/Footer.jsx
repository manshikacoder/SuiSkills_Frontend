import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-sky-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left: Logo & Heading */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="./src/assets/White-logo.png" alt="Logo" className="w-20 h-20" />
            <h2 className="text-2xl font-bold">SuiSkills</h2>
          </div>
          <p className="mt-4 text-sm">Empowering skills through practical learning.</p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li> <Link to="/" className="text-white hover:text-sky-300 font-medium">Home</Link></li>
            <li><Link to="/jobs" className="text-white hover:text-sky-300 font-medium">Jobs</Link></li>
            <li><Link to="/how-sui-works" className="text-white hover:text-sky-300 font-medium">How Sui Works</Link></li>
            <li> <Link to="/blog" className="text-white hover:text-sky-300 font-medium">Blogs</Link></li>
            <li>  <Link to="/contact" className="text-white hover:text-sky-300 font-medium">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Right: Contact Info & Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: support@suiSkills.com</p>
          <p>Phone: +91 98765 43210</p>

          <form className="mt-4">
            <label htmlFor="subscribe" className="block text-sm mb-1">Subscribe to our newsletter</label>
            <div className="flex">
              <input
                type="email"
                id="subscribe"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l bg-white text-black outline-none"
              />
              <button type="submit" className="bg-blue-900 px-4 py-2 rounded-r text-white font-semibold">
                Subscribe
              </button>
            </div>
          </form>

          <div className="flex space-x-4 mt-5">
            <a href="#"><FaFacebookF className="hover:text-sky-300" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-300" /></a>
            <a href="#"><FaInstagram className="hover:text-sky-300" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-sky-300" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white text-center py-4 text-sm">
        © SuiSkills 2025. All rights reserved.
      </div>
    </footer>
  );
}
