"use client";

import { useState } from "react";
import Link from "next/link";
import { getProjectsByCategory } from "../../lib/projects";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = getProjectsByCategory(selectedFilter);

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

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-4">
              <Link
                href="/"
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
                Back to Home
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              All Projects
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my complete portfolio of projects showcasing expertise
              across web development, mobile applications, and UI/UX design.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-white border border-gray-200 p-1">
              {[
                { key: "all", label: "All Projects" },
                { key: "web", label: "Web Apps" },
                { key: "mobile", label: "Mobile" },
                { key: "ui", label: "UI/UX" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    selectedFilter === tab.key
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
              {selectedFilter !== "all" &&
                ` in ${
                  selectedFilter.charAt(0).toUpperCase() +
                  selectedFilter.slice(1)
                }`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden h-80 bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  {/* Dynamic icon based on project category */}
                  {project.category === "web" && (
                    <svg
                      className="h-16 w-16 text-white"
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
                      className="h-16 w-16 text-white"
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
                      className="h-16 w-16 text-white"
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
                <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-mono rounded">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-mono">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="px-4 py-2 bg-white text-gray-900 font-medium hover:bg-gray-200 transition-all text-xs font-mono"
                    >
                      View Details
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all text-xs font-mono"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg
                  className="h-16 w-16 text-gray-400 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 mb-4">
                No projects match your current filter selection.
              </p>
              <button
                onClick={() => setSelectedFilter("all")}
                className="px-4 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono"
              >
                Show All Projects
              </button>
            </div>
          )}
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
