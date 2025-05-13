import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Exterior Renderings",
      description: "Photorealistic architectural visualizations of building exteriors, perfect for showcasing your project's curb appeal.",
      pricing: {
        basic: "Starting at $999",
        features: [
          "High-resolution render",
          "2 revision rounds",
          "Daylight visualization",
          "5-7 business days delivery"
        ]
      }
    },
    {
      title: "Interior Design",
      description: "Detailed interior visualizations with precise lighting and material specifications to bring your spaces to life.",
      pricing: {
        basic: "Starting at $1,299",
        features: [
          "High-resolution render",
          "3 revision rounds",
          "Multiple viewpoints",
          "Material selection assistance",
          "7-10 business days delivery"
        ]
      }
    },
    {
      title: "3D Walkthroughs",
      description: "Immersive virtual tours that allow clients to experience the space before it's built.",
      pricing: {
        basic: "Starting at $2,499",
        features: [
          "60-second walkthrough",
          "4K resolution",
          "Custom camera path",
          "Background music",
          "2 revision rounds",
          "14-21 business days delivery"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer comprehensive 3D visualization solutions to bring your architectural projects to life.
          Choose the service that best fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-6">
                  {service.pricing.basic}
                </div>
                <ul className="space-y-3">
                  {service.pricing.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/#contact" 
                  className="mt-8 block w-full text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">
            Contact us for custom project requirements or package combinations.
            We'll be happy to provide a tailored quote for your specific needs.
          </p>
          <Link 
            href="/#contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 