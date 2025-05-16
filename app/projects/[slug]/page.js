import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import { projects } from "../data";

/* This is the page for the projects. It is used to display the project details. */
/* This populates each individual project with the details from the projects object. */
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
            href="/projects" 
            className="text-gray-600 hover:text-gray-900 mb-8 inline-block"
          >
            ← Back to Projects
          </Link>
          
          {/* This provides the functionality for the Row Housing Render youtube video. */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {project.video && slug === 'row-housing-render' && (
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 p-4 border-b border-gray-200">
                    Project Walkthrough
                  </h3>
                  <div className="aspect-video relative">
                    <iframe
                      src="https://www.youtube.com/embed/x__SCxowBYs"
                      title="Project Walkthrough"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
              
              {!project.video && project.image && (
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 