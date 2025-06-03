"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projects, getProjectsByCategory } from "../lib/projects";

// Constant array for typing animation titles
const TYPING_TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
];

// Typing Animation Component
function TypingAnimation() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000); // Wait 2 seconds before starting to delete
      return () => clearTimeout(waitTimeout);
    }

    const currentTitle = TYPING_TITLES[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait before deleting
        setIsWaiting(true);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        // Special handling for "Full-Stack Developer" -> "Frontend Developer"
        if (currentIndex === 1 && currentText === "Full-Stack Developer") {
          // Delete only "Full-Stack " and keep "Developer"
          if (currentText.length > "Frontend Developer".length) {
            timeout = setTimeout(() => {
              setCurrentText(currentText.slice(0, -1));
            }, 50);
          } else {
            // Start typing "Frontend"
            setIsDeleting(false);
            setCurrentIndex(2);
            timeout = setTimeout(() => {
              setCurrentText("Frontend Developer");
            }, 100);
          }
        } else {
          // Normal deletion
          timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, 50);
        }
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isWaiting]);

  return (
    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium font-mono">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Home() {
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi there! I'm Tony's virtual assistant. Ask me anything about Tony's work, skills, or experience!",
      isUser: false,
    },
    {
      text: "Try asking about Tony's tech stack, recent projects, or some of his favorite things.",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Get filtered projects
  const filteredProjects = getProjectsByCategory(selectedFilter);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = inputValue;
      const newMessages = [...messages, { text: userMessage, isUser: true }];
      setMessages(newMessages);
      setInputValue("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data = await response.json();
        setMessages([...newMessages, { text: data.reply, isUser: false }]);
      } catch (error) {
        console.error("Error:", error);
        setMessages([
          ...newMessages,
          {
            text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
            isUser: false,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold font-mono">
            tonygruenwald.dev
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Work
            </a>
            <a
              href="#skills"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="font-medium text-sm hover:text-gray-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with AI Chat */}
      <section
        id="home"
        className="min-h-screen pt-20 flex items-center bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <TypingAnimation />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I&apos;m{" "}
                <span className="underline decoration-4 decoration-gray-200">
                  Tony
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light">
                I build exceptional digital experiences that make an impact
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                With expertise in both frontend and backend technologies, I
                create scalable, user-friendly applications that solve
                real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all text-sm"
                >
                  Get In Touch
                </a>
              </div>

              <div className="mt-12 flex items-center space-x-6">
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

            <div className="order-1 lg:order-2">
              <div className="bg-white border border-gray-200 p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-800 font-mono">
                    Chat with Tony&apos;s AI Assistant
                  </h2>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div
                  ref={chatContainerRef}
                  className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 border border-gray-200 space-y-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                  }}
                >
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`${message.isUser ? "text-right" : ""}`}
                    >
                      <div
                        className={`inline-block max-w-[80%] p-3 ${
                          message.isUser
                            ? "bg-gray-200 text-gray-800"
                            : "bg-gray-900 text-white"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      isLoading ? "Thinking..." : "Ask me anything..."
                    }
                    disabled={isLoading}
                    className="flex-1 p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
            <div className="w-16 h-1 bg-gray-900"></div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Here are some of my recent projects showcasing different
              technologies and approaches to solving complex problems.
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

          {/* Show project count and "View All" button */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {filteredProjects.length} of {projects.length} projects
              {selectedFilter !== "all" &&
                ` in ${
                  selectedFilter.charAt(0).toUpperCase() +
                  selectedFilter.slice(1)
                }`}
            </p>
            <Link
              href="/projects"
              className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-gray-900"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "React",
                description:
                  "Building interactive UIs with modern React hooks and context",
              },
              {
                name: "Node.js",
                description:
                  "Server-side JavaScript with Express and microservices",
              },
              {
                name: "TypeScript",
                description:
                  "Type-safe applications with advanced TypeScript features",
              },
              {
                name: "Next.js",
                description:
                  "Full-stack React framework with SSR and static generation",
              },
              {
                name: "Python",
                description:
                  "Backend development and data processing with Python",
              },
              {
                name: "Databases",
                description: "MongoDB for PostgreSQL for data storage",
              },
              {
                name: "UI/UX Design",
                description:
                  "User-centered design with Figma and design systems",
              },
              {
                name: "DevOps",
                description: "CI/CD pipelines, Docker, and cloud deployment",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2 font-mono">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-xs">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-gray-900"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 font-mono">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6 font-mono">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gray-100 mr-4">
                      <svg
                        className="h-5 w-5 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm font-mono">Email</h4>
                      <p className="text-gray-600 text-sm">tony@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gray-100 mr-4">
                      <svg
                        className="h-5 w-5 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm font-mono">
                        Location
                      </h4>
                      <p className="text-gray-600 text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-900 p-8 text-white">
                <h4 className="text-xl font-bold mb-4 font-mono">
                  Let&apos;s Work Together
                </h4>
                <p className="mb-6 text-sm">
                  I&apos;m currently available for new opportunities and always
                  excited to discuss innovative projects.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-white text-gray-900 hover:bg-gray-200 transition-all"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-white text-gray-900 hover:bg-gray-200 transition-all"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold font-mono">tony.dev</h2>
              <p className="mt-2 text-sm">
                Full-Stack Developer & Problem Solver
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <a
                href="#home"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Work
              </a>
              <a
                href="#skills"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
          <hr className="my-8 border-gray-800" />
          <div className="text-center text-gray-400 text-xs">
            <p>
              &copy; 2024 Tony Gruenwald. Built with Next.js and deployed on
              Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
