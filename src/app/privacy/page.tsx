import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Tony Gruenwald",
  description:
    "Privacy policy for Tony Gruenwald's portfolio website, detailing data collection, usage, and protection practices. Learn how we handle your information transparently and securely.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "GDPR",
    "Data Collection",
    "Tony Gruenwald",
    "Portfolio Privacy",
    "Web Analytics",
    "User Rights",
  ],
  openGraph: {
    title: "Privacy Policy - Tony Gruenwald Portfolio",
    description:
      "Privacy policy for Tony Gruenwald's portfolio website, detailing data collection, usage, and protection practices. Learn how we handle your information transparently and securely.",
    type: "website",
    locale: "en_US",
    url: "https://tonygruenwald.dev/privacy",
    siteName: "Tony Gruenwald Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Tony Gruenwald Portfolio",
    description:
      "Privacy policy detailing data collection, usage, and protection practices for Tony Gruenwald's portfolio website.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://tonygruenwald.dev/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Privacy policy for Tony Gruenwald's portfolio website, detailing data collection, usage, and protection practices.",
    url: "https://tonygruenwald.dev/privacy",
    isPartOf: {
      "@type": "WebSite",
      name: "Tony Gruenwald Portfolio",
      url: "https://tonygruenwald.dev",
    },
    author: {
      "@type": "Person",
      name: "Tony Gruenwald",
      url: "https://tonygruenwald.dev",
    },
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-white text-gray-900">
        {/* Navigation */}
        <nav
          className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-xl font-bold font-mono"
              aria-label="Tony Gruenwald Portfolio Home"
            >
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
        <header className="pt-32 pb-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16">
              <nav aria-label="Breadcrumb">
                <Link
                  href="/"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm mb-6"
                  aria-label="Return to homepage"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                Privacy Policy
              </h1>
              <div
                className="w-16 h-1 bg-gray-900 mb-6"
                aria-hidden="true"
              ></div>
              <p className="text-gray-600 text-sm">
                <time dateTime={new Date().toISOString().split("T")[0]}>
                  Last updated: {new Date().toLocaleDateString()}
                </time>
              </p>
            </div>

            {/* Privacy Policy Content */}
            <main className="max-w-none" role="main">
              <section
                className="bg-gray-50 border border-gray-200 p-6 md:p-8 mb-12 hover:shadow-sm transition-shadow"
                aria-labelledby="introduction-heading"
              >
                <h2
                  id="introduction-heading"
                  className="text-xl md:text-2xl font-bold mb-4 text-gray-900 font-mono"
                >
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy describes how Tony Gruenwald Portfolio
                  collects, uses, and protects your information when you visit
                  our website at tonygruenwald.dev. We are committed to
                  protecting your privacy and being transparent about our data
                  practices.
                </p>
              </section>

              <div className="space-y-12">
                <section aria-labelledby="information-collect-heading">
                  <h2
                    id="information-collect-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Information We Collect
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3
                        id="auto-collected-heading"
                        className="text-lg md:text-xl font-semibold mb-4 text-gray-900"
                      >
                        Automatically Collected Information
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        When you visit our website, we automatically collect
                        certain information about your device and usage:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                        <li>IP address and general location information</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website information</li>
                        <li>Device type and screen resolution</li>
                      </ul>
                    </div>

                    <div>
                      <h3
                        id="provided-info-heading"
                        className="text-lg md:text-xl font-semibold mb-4 text-gray-900"
                      >
                        Information You Provide
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We collect information you voluntarily provide when you:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                        <li>
                          Submit contact forms (name, email, message content)
                        </li>
                        <li>Interact with our AI chat assistant</li>
                        <li>
                          Subscribe to newsletters or updates (if applicable)
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="info-usage-heading">
                  <h2
                    id="info-usage-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                    <li>
                      To respond to your inquiries and provide customer support
                    </li>
                    <li>
                      To improve our website performance and user experience
                    </li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To ensure website security and prevent abuse</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section aria-labelledby="third-party-heading">
                  <h2
                    id="third-party-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Third-Party Services
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our website integrates with the following third-party
                    services that may collect information:
                  </p>

                  <div className="grid gap-6 md:gap-8">
                    <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                      <h3
                        id="vercel-services-heading"
                        className="text-lg md:text-xl font-semibold mb-3 text-gray-900"
                      >
                        Vercel Analytics & Speed Insights
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We use Vercel&apos;s analytics services to monitor
                        website performance and user interactions. This helps us
                        understand how visitors use our site and identify areas
                        for improvement.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                      <h3
                        id="web3forms-heading"
                        className="text-lg md:text-xl font-semibold mb-3 text-gray-900"
                      >
                        Web3Forms
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Contact form submissions are processed through
                        Web3Forms. Information submitted through contact forms
                        is used solely to respond to your inquiries.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                      <h3
                        id="openai-heading"
                        className="text-lg md:text-xl font-semibold mb-3 text-gray-900"
                      >
                        OpenAI API
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our AI chat assistant is powered by OpenAI&apos;s API.
                        Chat interactions may be processed by OpenAI to provide
                        responses. We do not store chat conversations
                        permanently.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                      <h3
                        id="shopify-app-heading"
                        className="text-lg md:text-xl font-semibold mb-3 text-gray-900"
                      >
                        Delete All Customers - Shopify App
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our Shopify app &quot;Delete All Customers&quot; helps
                        store owners manage their customer contact lists. The
                        app operates within Shopify&apos;s secure environment
                        and follows Shopify&apos;s data handling policies. We do
                        not store or access customer data outside of the Shopify
                        platform, and all data processing is performed according
                        to Shopify&apos;s privacy standards.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Note:</strong> This Shopify app has its own
                        dedicated privacy policy. For detailed information about
                        how the app handles merchant and customer data, please
                        review the{" "}
                        <Link
                          href="/delete-all-customers-app/privacy"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          Delete All Customers App Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="data-security-heading">
                  <h2
                    id="data-security-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission over the
                    internet or electronic storage is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                </section>

                <section aria-labelledby="user-rights-heading">
                  <h2
                    id="user-rights-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Your Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    To exercise these rights, please contact us using the
                    information provided below.
                  </p>
                </section>

                <section aria-labelledby="policy-changes-heading">
                  <h2
                    id="policy-changes-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the last updated date. You are
                    advised to review this Privacy Policy periodically for any
                    changes.
                  </p>
                </section>

                <section aria-labelledby="contact-info-heading">
                  <h2
                    id="contact-info-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Contact Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                    <p className="text-gray-900 font-semibold mb-2">
                      Tony Gruenwald
                    </p>
                    <p className="text-gray-700 mb-1">
                      Email: Available through the contact form on our website
                    </p>
                    <p className="text-gray-700">Website: tonygruenwald.dev</p>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </header>

        {/* Footer */}
        <footer
          className="bg-white py-12 border-t border-gray-200"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold font-mono">
                  tonygruenwald.dev
                </h2>
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
                <Link
                  href="/privacy"
                  className="hover:text-gray-600 transition-colors text-sm"
                >
                  Privacy Policy
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
                  href="https://github.com/tonygruenwald"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
          </div>
        </footer>
      </div>
    </>
  );
}
