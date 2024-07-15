import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-teal-400">Find Job</h1>
            <p className="mt-2 max-w-md">
              Your go-to platform for discovering new career opportunities.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-teal-400">Contact</h2>
              <ul className="mt-2 space-y-1">
                <li>Email: info@findjob.com</li>
                <li>Phone: +123 456 7890</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-teal-400">Quick Links</h2>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-teal-400">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Find Job. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
