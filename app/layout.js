import "./globals.css";

export const metadata = {
  title: "CC3D - Professional 3D Rendering & Visualization",
  description: "High-end architectural renderings, walkthroughs, interiors, and exteriors by CC3D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white font-sans">
        <main>
          {children}
        </main>
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CC3D</h3>
                <p className="text-gray-600">
                  Professional 3D rendering and visualization services for architects, designers, and developers.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
                  <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
                  <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li className="text-gray-600">codycurran3d@gmail.com</li>
                  <li className="text-gray-600">+1 (910)-616-3473</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-gray-600 text-center">© {new Date().getFullYear()} CC3D. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 
