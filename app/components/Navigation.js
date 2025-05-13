import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            CC3D
          </Link>
          <div className="hidden sm:flex space-x-8">
            <Link href="/portfolio" className="text-gray-600 hover:text-black transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 