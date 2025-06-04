"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projects } from "../lib/projects";

// Constant array for typing animation titles
const TYPING_TITLES = [
  "Software Engineer",
  "Green Bay Packer Shareholder",
  "Ok Fisher",
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
        // Normal deletion for all transitions
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
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
      text: "Hey! I'm T.O.N.Y. — your guide to Tony Gruenwald's world of code and creativity.\nOfficially it stands for \"Tech-Oriented Narrative for You\", but between us devs...\nit's also \"Tony's Optimized Networked Yapper.\" 😄\nAsk me anything!",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Get filtered projects
  const filteredProjects = projects;

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
      setShowSuggestions(false); // Hide suggestions after first message

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

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    // Auto-send the suggestion after a short delay
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const suggestions = [
    "What technologies does Tony specialize in?",
    "Tell me about Tony's recent projects",
    "How did you build this AI assistant?",
    "What's Tony's experience with React and Next.js?",
    "Does Tony work with e-commerce platforms?",
    "What makes Tony's approach unique?",
  ];

  // Contact form handlers
  const handleContactInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData();
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
      );
      formData.append("name", contactForm.name);
      formData.append("email", contactForm.email);
      formData.append("message", contactForm.message);
      formData.append("subject", `Portfolio Contact from ${contactForm.name}`);
      formData.append("from_name", "Tony Gruenwald Portfolio");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
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
                I design and build software from backend to interface.
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Whether it&apos;s building APIs, designing clean UI components,
                or shipping full-stack applications, I focus on creating
                scalable, intuitive digital experiences.
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
                  href="https://github.com/tonygruenwald"
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
                  href="https://www.linkedin.com/in/tonygruenwald/"
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
              <div className="bg-white border border-gray-200 p-6 shadow-lg">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-800 font-mono">
                    Chat with T.O.N.Y.
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-mono">
                      Online
                    </span>
                  </div>
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
                      className={`${message.isUser ? "text-right" : ""} ${
                        message.isUser
                          ? "animate-slide-in-right"
                          : "animate-slide-in-left"
                      }`}
                    >
                      <div
                        className={`inline-block max-w-[80%] p-3 shadow-sm ${
                          message.isUser
                            ? "bg-gray-200 text-gray-800 rounded-l-lg rounded-tr-lg"
                            : "bg-gray-900 text-white rounded-r-lg rounded-tl-lg"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="animate-slide-in-left">
                      <div className="inline-block bg-gray-900 text-white p-3 rounded-r-lg rounded-tl-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-white rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-white rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggestions */}
                {showSuggestions && (
                  <div className="mb-4 animate-fade-in">
                    <p className="text-xs text-gray-500 mb-2 font-mono">
                      Ask me about:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 font-mono"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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
                    className="flex-1 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
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

          {/* Filter Tabs 
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
          </div>*/}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block relative overflow-hidden h-80 bg-white border border-gray-200 group hover:shadow-lg transition-all duration-300"
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
                <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-end p-6 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-white bg-opacity-20 text-black text-xs font-mono rounded">
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
                        className="px-2 py-1 bg-white bg-opacity-20 text-black text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white bg-opacity-20 text-black text-xs font-mono">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <span className="px-4 py-2 bg-white text-gray-900 font-medium hover:bg-gray-200 transition-all text-xs font-mono">
                      View Details
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 border border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all text-xs font-mono"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Show project count and "View All" button */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {filteredProjects.length} of {projects.length} projects
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
                name: "AI Integration",
                description:
                  "OpenAI API integration, chat interfaces, and intelligent automation",
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let&apos;s discuss how we can
              bring your ideas to life. I&apos;m always excited to work on
              innovative projects and solve complex challenges.
            </p>
          </div>

          {/* Contact Form - Centered */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 font-mono">
                  Send Me a Message
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill out the form below and I&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-800 rounded-r animate-fade-in">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-r animate-fade-in">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-medium">
                      Something went wrong. Please try again or email me
                      directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission from Portfolio"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Tony Gruenwald Portfolio"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 text-sm font-medium group-focus-within:text-gray-900 transition-colors"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all hover:border-gray-400"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 text-sm font-medium group-focus-within:text-gray-900 transition-colors"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all hover:border-gray-400"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-sm font-medium group-focus-within:text-gray-900 transition-colors"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all hover:border-gray-400 resize-none"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    The more details you provide, the better I can help you.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !contactForm.name ||
                    !contactForm.email ||
                    !contactForm.message
                  }
                  className="w-full px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold font-mono">tonygruenwald.dev</h2>
              <p className="mt-2 text-sm">Software Engineer & Problem Solver</p>
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
              &copy; {new Date().getFullYear()} Tony Gruenwald. Built with
              Next.js and deployed on Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
