import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-white dark:bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Featured 3D Rendering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Bringing Architectural Visions to Life
          </h1>
          <p className="text-xl mb-8">
            Professional 3D rendering and visualization services for architects, designers, and developers
          </p>
          <Link
            href="/portfolio"
            className="bg-white text-black dark:bg-black dark:text-white dark:border dark:border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={i} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 dark:bg-black py-20 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={`/featured-${i}.jpg`}
                  alt={`Featured Project ${i}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-xl font-semibold">Project Name</h3>
                    <p className="text-white/80">Interior Visualization</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block border border-gray-900 dark:border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss your project and create stunning visualizations together
          </p>
          <Link
            href="/contact"
            className="bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
