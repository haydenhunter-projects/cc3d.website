import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Image 
                src="/CC3D_Cube_Logo.png" 
                alt="CC3D Logo" 
                width={128} 
                height={128}
                className="w-12 h-12"
                quality={100}
                priority
                unoptimized
              />
            </div>
            <span className="text-xl font-bold text-gray-900">CC3D</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#hero" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/#about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
            <Link href="/#contact" className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 