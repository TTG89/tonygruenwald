export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Tony Gruenwald</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white/80 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tony Gruenwald
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Developer, Creator, Problem Solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
              View My Work
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              About Me
            </h2>
            <p className="text-lg text-white/80 leading-relaxed text-center">
              Welcome to my digital space! I&apos;m passionate about creating
              innovative solutions and bringing ideas to life through code.
              Whether it&apos;s building web applications, solving complex
              problems, or exploring new technologies, I&apos;m always excited
              to take on new challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg h-48 mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project {project}
                </h3>
                <p className="text-white/70 mb-4">
                  A brief description of this amazing project and what it
                  accomplishes.
                </p>
                <button className="text-white font-semibold hover:text-white/80 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Ready to start a project or just want to chat? I&apos;d love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
              Email Me
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center text-white/60">
          <p>
            &copy; 2024 Tony Gruenwald. Built with Next.js and deployed on
            Vercel.
          </p>
        </div>
      </footer>
    </main>
  );
}
