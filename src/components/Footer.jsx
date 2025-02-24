const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Discover and cook amazing recipes from around the world. Join our community of food lovers today!
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="/recipes" className="hover:text-orange-500 transition-colors duration-300">
                    Recipes
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/categories" className="hover:text-orange-500 transition-colors duration-300">
                    Categories
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="hover:text-orange-500 transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="hover:text-orange-500 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            
  
            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest recipes and cooking tips!
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white rounded-l-lg p-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Recipe Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;