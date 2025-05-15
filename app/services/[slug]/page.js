import Navigation from "../../components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { services } from "../data";

export default async function ServicePage({ params }) {
  const { slug } = await params;
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

            {/* Showcase Image/Video Section */}
            <div className="mb-16">
              <div className="max-w-[80%] mx-auto">
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-xl">
                  {slug === '3d-walkthroughs' && service.videoUrl ? (
                    <iframe
                      src={service.videoUrl}
                      title="Service Showcase Video"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={service.showcaseImage}
                      alt={`${service.title} showcase`}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>

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

            {/* Pricing Section - Full Width */}
            <div className="mt-16 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing & Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Base Package */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Base Package</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-6">{service.pricing.basic}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                  <ul className="space-y-3 mb-4">
                    {service.pricing.includes.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Options */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Options</h3>
                  <ul className="space-y-3">
                    {service.pricing.additionalOptions.map((option, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">+</span>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Started */}
                <div className="bg-gray-900 text-white rounded-xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                    <p className="text-gray-300 mb-6">
                      Contact us to discuss your project requirements and get a custom quote tailored to your needs.
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="inline-block w-full px-6 py-3 bg-white text-gray-900 text-center rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 