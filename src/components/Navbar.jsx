import { Link } from 'react-router-dom';
import { Moon, Sun, ShoppingCart, Home } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, cartItemCount }) => {
  return (
    <nav className="bg-white dark:bg-black shadow-md border-b border-gray-800 dark:border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-black dark:text-white">
              Joe Store
            </span>
          </Link>


          {/* Right Side - Dark Mode Toggle and Cart */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-black" />
              ) : (
                <Moon size={20} className="text-black" />
              )}
            </button>

            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart size={20} className="text-black" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 