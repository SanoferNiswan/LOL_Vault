const Footer = () => {
  return (
    <footer className="bg-darkBlue dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            We bring you the funniest jokes, keeping you entertained and smiling. 
            Join our community and share the joy!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Subscribe & Follow */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 w-full rounded-lg text-white-800 bg-transparent border shadow-lg focus:ring-2 focus:ring-accentBlue mb-4"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-accentBlue text-white rounded hover:bg-accentBlueHover transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-accentBlue"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#" className="hover:text-accentBlue"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="hover:text-accentBlue"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 Sanofer Niswan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
