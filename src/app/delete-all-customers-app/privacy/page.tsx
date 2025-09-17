import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Delete All Customers Shopify App",
  description:
    "Privacy policy for the Delete All Customers Shopify app, detailing data collection, usage, and protection practices for Shopify merchants.",
  keywords: [
    "Shopify App Privacy",
    "Delete All Customers",
    "Data Protection",
    "Shopify Merchant Data",
    "Customer Data Deletion",
    "Shopify App Store",
    "GDPR Compliance",
    "Merchant Privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Delete All Customers Shopify App",
    description:
      "Privacy policy for the Delete All Customers Shopify app, detailing data collection, usage, and protection practices for Shopify merchants.",
    type: "website",
    locale: "en_US",
    url: "https://tonygruenwald.dev/delete-all-customers-app/privacy",
    siteName: "Delete All Customers - Shopify App",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Delete All Customers Shopify App",
    description:
      "Privacy policy for the Delete All Customers Shopify app detailing merchant data protection practices.",
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
    canonical: "https://tonygruenwald.dev/delete-all-customers-app/privacy",
  },
};

export default function DeleteAllCustomersPrivacyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - Delete All Customers Shopify App",
    description:
      "Privacy policy for the Delete All Customers Shopify app, detailing data collection, usage, and protection practices for Shopify merchants.",
    url: "https://tonygruenwald.dev/delete-all-customers-app/privacy",
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "Delete All Customers - Shopify App",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
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
                <div className="flex items-center space-x-2 text-sm mb-6">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-gray-400">/</span>
                  <Link
                    href="/projects/delete-all-customers-shopify-app"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Delete All Customers App
                  </Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900">Privacy Policy</span>
                </div>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                Delete All Customers App
                <br />
                <span className="text-2xl md:text-3xl text-gray-600">
                  Privacy Policy
                </span>
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
                  Delete All Customers Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Delete All Customers &quot;the App&quot; provides a service to
                  safely delete all customers from your Shopify store with
                  confirmation and progress tracking &quot;the Service&quot; to
                  merchants who use Shopify to power their stores. This Privacy
                  Policy describes how personal information is collected, used,
                  and shared when you install or use the App in connection with
                  your Shopify-supported store.
                </p>
              </section>

              <div className="space-y-12">
                <section aria-labelledby="information-collect-heading">
                  <h2
                    id="information-collect-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Personal Information the App Collects
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        When you install the App, we are automatically able to
                        access certain types of information from your Shopify
                        account:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                        <li>
                          <strong>Customer Information:</strong> Names, email
                          addresses, phone numbers, addresses, and other
                          customer data stored in your Shopify store
                          (read_customers permission)
                        </li>
                        <li>
                          <strong>Customer Management:</strong> Ability to
                          delete customer records from your store
                          (write_customers permission)
                        </li>
                        <li>
                          <strong>Store Information:</strong> Shop domain, store
                          name, and basic store configuration details
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Additionally, we collect the following types of personal
                        information from you once you have installed the App:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                        <li>
                          Information about you and others who may access the
                          App on behalf of your store, such as Shopify user ID
                          and store access permissions
                        </li>
                        <li>
                          App usage data including deletion operations
                          performed, timestamps, and basic analytics for app
                          functionality
                        </li>
                        <li>
                          Technical information such as browser type, IP
                          address, and session data necessary for app operation
                          within Shopify admin
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        We collect personal information directly from your
                        Shopify account through Shopify&apos;s secure APIs. We
                        do not use cookies, web beacons, or other tracking
                        technologies beyond what is necessary for app
                        functionality within the Shopify admin interface.
                      </p>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="data-usage-heading">
                  <h2
                    id="data-usage-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    How Do We Use Your Personal Information?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the personal information we collect from you and your
                    customers in order to provide the Service and to operate the
                    App. Additionally, we use this personal information to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                    <li>
                      Communicate with you about app functionality and updates
                    </li>
                    <li>
                      Optimize and improve the App performance and user
                      experience
                    </li>
                    <li>
                      Provide technical support and troubleshooting assistance
                    </li>
                    <li>
                      Ensure compliance with Shopify&apos;s platform
                      requirements and policies
                    </li>
                    <li>
                      Maintain security and prevent unauthorized access to your
                      store data
                    </li>
                  </ul>
                </section>

                <section aria-labelledby="sharing-heading">
                  <h2
                    id="sharing-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Sharing Your Personal Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties. We may share your personal
                    information only in the following limited circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                    <li>
                      <strong>Shopify Platform:</strong> All data processing
                      occurs within Shopify&apos;s secure platform using their
                      official APIs under their data processing agreements
                    </li>
                    <li>
                      <strong>Service Providers:</strong> We may share
                      information with trusted service providers who assist in
                      operating our app, such as hosting services
                      (Railway/Heroku), provided they agree to keep this
                      information confidential
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your
                      information when required by law, regulation, or legal
                      process, or to protect the rights, property, or safety of
                      our users or others
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Finally, we may also share your Personal Information to
                    comply with applicable laws and regulations, to respond to a
                    subpoena, search warrant or other lawful request for
                    information we receive, or to otherwise protect our rights.
                  </p>
                </section>

                <section aria-labelledby="data-storage-heading">
                  <h2
                    id="data-storage-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Data Retention
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-blue-900">
                        Important: We Do Not Store Customer Data
                      </h3>
                      <p className="text-blue-800 leading-relaxed">
                        Our app does not store, cache, or retain any of your
                        customer information. All customer data processing
                        happens in real-time through Shopify&apos;s secure APIs
                        and is immediately deleted as requested without being
                        stored on our servers.
                      </p>
                    </div>

                    <div>
                      <h3
                        id="minimal-data-heading"
                        className="text-lg md:text-xl font-semibold mb-4 text-gray-900"
                      >
                        Minimal Data Retention
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We only retain the following minimal information:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                        <li>
                          App installation tokens (required for Shopify
                          authentication)
                        </li>
                        <li>
                          Basic usage statistics (number of operations
                          performed, timestamps)
                        </li>
                        <li>
                          Error logs for debugging purposes (automatically
                          deleted after 30 days)
                        </li>
                      </ul>
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
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement comprehensive security measures to protect your
                    data:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                    <li>
                      All data transmission uses HTTPS encryption (TLS 1.2+)
                    </li>
                    <li>Shopify OAuth authentication for secure API access</li>
                    <li>No local storage of sensitive customer information</li>
                    <li>
                      Regular security updates and vulnerability assessments
                    </li>
                    <li>
                      Compliance with Shopify&apos;s security requirements and
                      best practices
                    </li>
                  </ul>
                </section>

                <section aria-labelledby="merchant-rights-heading">
                  <h2
                    id="merchant-rights-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Your Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you are a European resident, you have the right to access
                    personal information we hold about you and to ask that your
                    personal information be corrected, updated, or deleted. If
                    you would like to exercise this right, please contact us
                    through the contact information below.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Additionally, if you are a European resident we note that we
                    are processing your information in order to fulfill
                    contracts we might have with you (for example if you install
                    and use the App), or otherwise to pursue our legitimate
                    business interests listed above. Additionally, please note
                    that your information will be transferred outside of Europe,
                    including to Canada and the United States.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a Shopify merchant, you also have the right to uninstall
                    the app at any time, which immediately revokes all access
                    permissions to your store data.
                  </p>
                </section>

                <section aria-labelledby="shopify-compliance-heading">
                  <h2
                    id="shopify-compliance-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Shopify App Store Compliance
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This app fully complies with Shopify&apos;s App Store
                    requirements:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                    <li>
                      Follows Shopify&apos;s data protection and privacy
                      guidelines
                    </li>
                    <li>
                      Uses only the minimum required API permissions
                      (read_customers, write_customers)
                    </li>
                    <li>
                      Implements proper data handling and deletion practices
                    </li>
                    <li>
                      Provides transparent privacy policy and terms of service
                    </li>
                    <li>
                      Maintains compliance with GDPR, CCPA, and other applicable
                      privacy laws
                    </li>
                  </ul>
                </section>

                <section aria-labelledby="policy-changes-heading">
                  <h2
                    id="policy-changes-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Changes
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time in order
                    to reflect, for example, changes to our practices or for
                    other operational, legal or regulatory reasons.
                  </p>
                </section>

                <section aria-labelledby="contact-info-heading">
                  <h2
                    id="contact-info-heading"
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-mono"
                  >
                    Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For more information about our privacy practices, if you
                    have questions, or if you would like to make a complaint,
                    please contact us by e-mail or by mail using the details
                    provided below:
                  </p>
                  <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                    <p className="text-gray-900 font-semibold mb-2">
                      Tony Gruenwald
                    </p>
                    <p className="text-gray-700 mb-1">
                      Email: Available through the contact form at{" "}
                      <Link
                        href="/#contact"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        tonygruenwald.dev
                      </Link>
                    </p>
                    <p className="text-gray-700">
                      Website:{" "}
                      <Link
                        href="/"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        tonygruenwald.dev
                      </Link>
                    </p>
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
                  Delete All Customers App
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Shopify App by Tony Gruenwald
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                <Link
                  href="/"
                  className="hover:text-gray-600 transition-colors text-sm"
                >
                  Portfolio Home
                </Link>
                <Link
                  href="/projects/delete-all-customers-shopify-app"
                  className="hover:text-gray-600 transition-colors text-sm"
                >
                  App Details
                </Link>
                <Link
                  href="/delete-all-customers-app/privacy"
                  className="hover:text-gray-600 transition-colors text-sm"
                >
                  Privacy Policy
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
              <p className="text-gray-600 text-xs mt-2 md:mt-0">
                Shopify App Store Compliant
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
