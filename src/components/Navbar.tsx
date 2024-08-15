import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png" // Path to your logo image
              alt="Yogaya-Logger Logo"
              className="h-8 mr-3"
            />
            <span className="text-2xl font-bold text-gray-800">Yogaya-Logger</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="#home" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
            Home
          </Link>
          <Link href="#contact" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
            Contact
          </Link>
          <Link href="#about" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
