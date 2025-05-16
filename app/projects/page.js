import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { projects } from "./data";

/* This is the projects index page that displays all available projects */
export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our portfolio of architectural visualizations, from modern residential designs to commercial spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projects).map(([slug, project]) => (
              <Link href={`/projects/${slug}`} key={slug}>
                <div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.category}</p>
                    <p className="text-gray-600 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 