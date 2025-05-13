import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "CC3D - Professional 3D Rendering & Visualization",
  description: "High-end architectural renderings, walkthroughs, interiors, and exteriors by CC3D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} CC3D. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
