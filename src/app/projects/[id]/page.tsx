import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById, projects } from "../../../lib/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === resolvedParams.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const getIconForFeature = (iconName: string) => {
    const iconMap: { [key: string]: React.JSX.Element } = {
      "shopping-cart": (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      user: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      "credit-card": (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      chart: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      home: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      // New icons for Primeline project
      code: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      database: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
      upload: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
      settings: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      navigation: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
      admin: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      blocks: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      palette: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      link: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      search: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      // Default icon
      default: (
        <svg
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    };

    return iconMap[iconName] || iconMap["default"];
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold font-mono">
            tonygruenwald.dev
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#portfolio"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/#skills"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <div className="mb-4">
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Projects
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
                {project.title}
              </h1>
              <p className="text-gray-600">{project.shortDescription}</p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="px-5 py-2 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all text-sm font-mono"
                >
                  View Live
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  className="px-5 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono"
                >
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Project Image Placeholder */}
          <div className="w-full h-[60vh] bg-gray-900 flex items-center justify-center mb-16">
            {project.category === "web" && (
              <svg
                className="h-24 w-24 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
            {project.category === "mobile" && (
              <svg
                className="h-24 w-24 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
                />
              </svg>
            )}
            {project.category === "ui" && (
              <svg
                className="h-24 w-24 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  Project Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  The Challenge
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  The Solution
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  Key Features
                </h2>

                <div className="space-y-8">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        {getIconForFeature(feature.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 font-mono">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-32">
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 font-mono">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">
                        Client
                      </h4>
                      <p className="text-gray-900">{project.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">
                        Timeline
                      </h4>
                      <p className="text-gray-900">{project.timeline}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">
                        My Role
                      </h4>
                      <p className="text-gray-900">{project.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 font-mono">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-900 text-xs hover:bg-gray-900 hover:text-white transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 font-mono">
                    More Projects
                  </h3>
                  <div className="space-y-4">
                    {projects
                      .filter((p) => p.id !== project.id)
                      .slice(0, 3)
                      .map((otherProject) => (
                        <Link
                          key={otherProject.id}
                          href={`/projects/${otherProject.id}`}
                          className="block p-4 border border-gray-200 hover:border-gray-900 transition-all"
                        >
                          <h4 className="font-semibold mb-1 font-mono">
                            {otherProject.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {otherProject.category.charAt(0).toUpperCase() +
                              otherProject.category.slice(1)}{" "}
                            Project
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="/#contact"
                    className="block w-full px-6 py-3 bg-gray-900 text-white font-medium text-center hover:bg-gray-800 transition-all text-sm font-mono"
                  >
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Previous Project Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevProject && (
              <Link href={`/projects/${prevProject.id}`} className="group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mr-4 group-hover:bg-gray-900 group-hover:text-white transition-all">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Previous Project</p>
                    <h3 className="font-semibold font-mono">
                      {prevProject.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link href={`/projects/${nextProject.id}`} className="group">
                <div className="flex items-center justify-end">
                  <div>
                    <p className="text-sm text-gray-600 text-right">
                      Next Project
                    </p>
                    <h3 className="font-semibold font-mono text-right">
                      {nextProject.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center ml-4 group-hover:bg-gray-900 group-hover:text-white transition-all">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold font-mono">tonygruenwald.dev</h2>
              <p className="mt-2 text-sm text-gray-600">
                Full-Stack Developer & UI/UX Designer
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <Link
                href="/#home"
                className="hover:text-gray-600 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/#portfolio"
                className="hover:text-gray-600 transition-colors text-sm"
              >
                Work
              </Link>
              <Link
                href="/#skills"
                className="hover:text-gray-600 transition-colors text-sm"
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                className="hover:text-gray-600 transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-xs">
              © 2024 Tony Gruenwald. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
