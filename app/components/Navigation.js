import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            CC3D
          </Link>
          <div className="hidden sm:flex space-x-8">
            <Link href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 