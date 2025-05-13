import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "CC3D - Professional 3D Rendering & Visualization",
  description: "High-end architectural renderings, walkthroughs, interiors, and exteriors by CC3D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p>© {new Date().getFullYear()} CC3D. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
