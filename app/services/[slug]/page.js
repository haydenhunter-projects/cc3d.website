import Navigation from "../../components/Navigation";
import Link from "next/link";
import { services } from "../data";

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = services[slug];

  if (!service) {
    return (
      <>
        <Navigation />
        <div className="pt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div>Service not found</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back to Services Link */}
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-gray-900 mb-12 inline-block"
            >
              ← Back to Services
            </Link>

            {/* Description */}
            <div className="prose prose-lg mx-auto mb-16">
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Features and Benefits */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-green-500 mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Receive</h2>
                <ul className="space-y-4">
                  {service.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-blue-500 mr-3">•</span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h2>
                <ul className="space-y-4">
                  {service.idealFor.map((ideal, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-purple-500 mr-3">•</span>
                      {ideal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h2>
                <p className="text-gray-600">
                  Typical turnaround: {service.turnaroundTime}
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gray-900 text-white p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your {service.title.toLowerCase()} project and create something amazing together.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 