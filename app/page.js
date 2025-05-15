import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section id="hero" className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <Image 
                  src="/CC3D_Logo.png" 
                  alt="CC3D Logo" 
                  width={512} 
                  height={1024}
                  className="w-64 h-48"
                  quality={100}
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bringing Architectural Visions to Life
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Professional 3D rendering and visualization services
              </p>
              <a href="#contact" className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100">
                Start Your Project
              </a>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
                CC3D is a leading architectural visualization studio specializing in creating photorealistic 3D renderings 
                and immersive virtual experiences. With our expertise in architectural design and cutting-edge technology, 
                we help bring your architectural concepts to life.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Exterior Renderings",
                  description: "Photorealistic architectural visualizations"
                },
                {
                  title: "Interior Design",
                  description: "Detailed interior spaces with precise lighting"
                },
                {
                  title: "3D Walkthroughs",
                  description: "Interactive virtual project tours"
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="portfolio" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Row Housing Render",
                  category: "Exterior",
                  image: "/istockphotoplaceholder.jpg",
                  slug: "row-housing-render"
                },
                {
                  title: "Luxury Interior",
                  category: "Interior",
                  image: "/istockphotoplaceholder.jpg",
                  slug: "luxury-interior"
                },
                {
                  title: "Office Complex",
                  category: "Commercial",
                  image: "/istockphotoplaceholder.jpg",
                  slug: "office-complex"
                }
              ].map((project, i) => (
                <Link href={`/projects/${project.slug}`} key={i}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create stunning visualizations together
            </p>
            <Link
              href="mailto:codycurran3d@gmail.com"
              className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}