import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Featured 3D Rendering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-white">
            Bringing Architectural Visions to Life
          </h1>
          <p className="text-xl sm:text-2xl mb-12 text-white/90">
            Professional 3D rendering and visualization services for architects, designers, and developers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium 
                bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium 
                border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive 3D visualization solutions to bring your architectural projects to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Exterior Renderings",
                description: "Photorealistic exterior visualizations that bring your architectural designs to life"
              },
              {
                title: "Interior Renderings",
                description: "Stunning interior visualizations with attention to materials, lighting, and detail"
              },
              {
                title: "3D Walkthroughs",
                description: "Immersive virtual tours that allow clients to experience spaces before they're built"
              },
              {
                title: "Aerial Views",
                description: "Bird's eye perspectives that showcase your project in its environmental context"
              }
            ].map((service, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Explore our latest work and see how we help clients visualize their dreams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={`/featured-${i}.jpg`}
                  alt={`Featured Project ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-white text-xl font-semibold mb-2">Project Name</h3>
                    <p className="text-white/80">Interior Visualization</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium 
                border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss your project and create stunning visualizations together
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium 
              bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
