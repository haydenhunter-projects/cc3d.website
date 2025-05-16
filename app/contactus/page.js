import Navigation from "../components/Navigation";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Google Form */}
              <div className="md:col-span-3">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSNO2PvA0tnnrPrmXL-BjLIW-2Ze2OZI4TFUFfT65a24WlKA/viewform?embedded=true" width="800" height="2115">
                Loading…
                </iframe>
              </div>

              {/* Contact Information */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-xl p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <a 
                        href="mailto:codycurran3d@gmail.com" 
                        className="text-gray-600 hover:text-gray-900"
                      >
                        codycurran3d@gmail.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <a 
                        href="tel:+19106163473" 
                        className="text-gray-600 hover:text-gray-900"
                      >
                        +1 (910)-616-3473
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                      <p className="text-gray-600">
                        We typically respond within 24 hours during business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 