import Navigation from "../components/Navigation";
import { services } from "./data";

/* This is the page for the services. It is used to display the services. */
export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Comprehensive 3D visualization solutions for your architectural projects
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-20">
              {Object.entries(services).map(([slug, service]) => (
                <div key={slug} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">{service.fullDescription}</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Deliverables</h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal For */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Ideal For</h3>
                        <ul className="space-y-2">
                          {service.idealFor.map((ideal, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <span className="text-purple-500 mr-2">•</span>
                              {ideal}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Turnaround Time */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Turnaround Time</h3>
                        <p className="text-gray-600">{service.turnaroundTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us to discuss your project and discover how our services can bring your vision to life.
              </p>
              <a 
                href="/#contact"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 