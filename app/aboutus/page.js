import Image from "next/image";
import Navigation from "../components/Navigation";

export default function AboutUsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Building the future of architectural visualization
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The CC3D Journey</h2>
              <div className="mb-12">
                <p className="text-gray-600 mb-6">
                  CC3D was founded with a singular vision: to revolutionize how architectural designs are presented and experienced. 
                  Our journey began with a deep appreciation for architecture and a passion for cutting-edge technology.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a specialized architectural visualization service has grown into a comprehensive 
                  creative studio, delivering stunning 3D renderings, immersive walkthroughs, and innovative design solutions 
                  for clients worldwide.
                </p>
              </div>

              {/* Mission & Values */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    To transform architectural visions into compelling visual experiences that inspire, 
                    inform, and captivate. We strive to bridge the gap between imagination and reality 
                    through state-of-the-art 3D visualization.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Excellence in every detail</li>
                    <li>• Innovation in technology and design</li>
                    <li>• Client-focused collaboration</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Expertise</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Technical Mastery",
                      description: "Utilizing cutting-edge 3D modeling and rendering software to create photorealistic visualizations"
                    },
                    {
                      title: "Results That Matter",
                      description: "Turning ideas into persuasive presentations that achieve measurable success"
                    },
                    {
                      title: "Client Collaboration",
                      description: "Committed to clear communication and tailored solutions that drive client satisfaction"
                    }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Meet the Team</h3>
                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden">
                    <Image
                      src="/Cody_Curran_Img.PNG"
                      alt="Cody Curran"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cody Curran</h4>
                  <p className="text-gray-600 mb-4">Founder & Lead Designer</p>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    With a background in architectural design and a passion for 3D visualization, 
                    Cody leads CC3D in creating stunning architectural renderings and immersive experiences 
                    that help clients bring their visions to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 