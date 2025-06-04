"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
  const [showMagicModal, setShowMagicModal] = useState(false);
  const [magicWord, setMagicWord] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const handleDownloadClick = () => {
    setShowMagicModal(true);
    setMagicWord("");
    setIsWrong(false);
  };

  const handleMagicWordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (magicWord.toLowerCase().trim() === "please") {
      // Trigger download
      const link = document.createElement("a");
      link.href = "/resume/Tony_Gruenwald_Resume.pdf";
      link.download = "Tony_Gruenwald_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close modal
      setShowMagicModal(false);
      setMagicWord("");
      setIsWrong(false);
    } else {
      setIsWrong(true);
      setMagicWord("");
    }
  };

  const closeModal = () => {
    setShowMagicModal(false);
    setMagicWord("");
    setIsWrong(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold font-mono">
            tonygruenwald.dev
          </Link>
          <Link
            href="/"
            className="font-medium text-sm hover:text-gray-600 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Resume Section */}
      <section className="pt-20 py-24 bg-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tony&apos;s Resume
            </h1>
            <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              8+ years of software engineering experience, specializing in
              e-commerce platforms, React development, and headless commerce
              solutions.
            </p>
          </div>

          {/* Resume Preview Card */}
          <div className="bg-white border border-gray-200 shadow-lg max-w-md mx-auto mb-8 p-8">
            <div className="mb-6">
              <svg
                className="h-16 w-16 mx-auto mb-4 text-gray-400"
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
              <h3 className="text-xl font-bold font-mono mb-2">
                Tony Gruenwald
              </h3>
              <p className="text-gray-600 text-sm">Senior Software Engineer</p>
            </div>

            <div className="text-left space-y-2 text-xs text-gray-600 mb-6">
              <p>• 8+ years software engineering</p>
              <p>• Shopify Hydrogen & React expert</p>
              <p>• E-commerce platform specialist</p>
              <p>• API integration & microservices</p>
              <p>• Performance optimization</p>
            </div>

            <button
              onClick={handleDownloadClick}
              className="w-full px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
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
                    d="M12 10v6m0 0l-4-4m4 4l4-4m3 2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v1"
                  />
                </svg>
                Download Resume
              </div>
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            PDF format • Updated {new Date().getFullYear()}
          </p>
        </div>
      </section>

      {/* Magic Word Modal */}
      {showMagicModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 text-center animate-fade-in">
            <div className="mb-6">
              <Image
                src="/resume/magic_word.gif"
                alt="Magic word required"
                width={300}
                height={200}
                className="mx-auto max-w-full h-auto rounded"
                unoptimized
              />
            </div>

            {isWrong && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded">
                <p className="text-sm">Nope! What&apos;s the magic word? 🪄</p>
              </div>
            )}

            <form onSubmit={handleMagicWordSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="magicWord"
                  value={magicWord}
                  onChange={(e) => setMagicWord(e.target.value)}
                  placeholder="Enter the magic word"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all text-center"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all text-sm font-mono"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all text-sm font-mono"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
