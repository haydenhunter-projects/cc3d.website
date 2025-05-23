import Link from "next/link";
import Image from "next/image";

/* This is the nav bar for the website. It is used on all pages. */
export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 -ml-4">
            <div className="relative">
              {/* Logo */}
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
          </Link>
          <div className="hidden md:flex items-center space-x-12 mr-4">
            {/* Home, About Us, Services, Projects, Contact */}
            <Link href="/home" className="text-gray-600 hover:text-gray-900 py-2">Home</Link>
            <Link href="/aboutus" className="text-gray-600 hover:text-gray-900 py-2">About Us</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 py-2">Projects</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 py-2">Services</Link>
            <Link href="/contactus" className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 