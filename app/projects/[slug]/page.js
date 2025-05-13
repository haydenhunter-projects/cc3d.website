import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";

const projects = {
  "modern-villa": {
    title: "Modern Villa",
    category: "Exterior",
    // video: "/Modern_Row_Render.mp4",
    description: "A contemporary residential project featuring clean lines and sustainable design. This modern villa combines luxury living with environmental consciousness, incorporating large windows for natural light and energy-efficient systems throughout.",
    details: [
      "4,500 square feet of living space",
      "Sustainable materials and solar integration",
      "Infinity pool with ocean views",
      "Smart home automation"
    ],
    location: "Malibu, California"
  },
  "luxury-interior": {
    title: "Luxury Interior",
    category: "Interior",
    image: "/istockphotoplaceholder.jpg",
    description: "An elegant interior design project for a high-end penthouse. The space combines classic elements with modern luxury, featuring custom furniture and bespoke lighting solutions.",
    details: [
      "Open-concept living areas",
      "Custom Italian marble finishes",
      "Integrated home theater",
      "Designer furniture collection"
    ],
    location: "Downtown Manhattan"
  },
  "office-complex": {
    title: "Office Complex",
    category: "Commercial",
    image: "/istockphotoplaceholder.jpg",
    description: "A state-of-the-art commercial office complex designed for the modern workforce. The project emphasizes collaborative spaces and workplace wellness, with a focus on natural light and green spaces.",
    details: [
      "200,000 square feet of office space",
      "LEED Platinum certification",
      "Rooftop garden and recreation area",
      "Smart building management system"
    ],
    location: "Silicon Valley"
  }
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="pt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div>Project not found</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link 
            href="/#portfolio" 
            className="text-gray-600 hover:text-gray-900 mb-8 inline-block"
          >
            ← Back to Portfolio
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {project.video && slug === 'modern-villa' && (
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 p-4 border-b border-gray-200">
                    Project Walkthrough
                  </h3>
                  <div className="aspect-video relative">
                    <video 
                      controls
                      className="w-full"
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{project.category}</p>
              <p className="text-gray-600 mb-8">{project.description}</p>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Project Details</h2>
                <ul className="space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-gray-600">• {detail}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 