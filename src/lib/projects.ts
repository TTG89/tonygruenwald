export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  client: string;
  timeline: string;
  role: string;
  technologies: string[];
  challenge: string;
  solution: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  category: "web" | "mobile" | "ui" | "all";
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "directbloom-wholesale-flower-marketplace",
    title: "DirectBloom - Wholesale Flower Marketplace",
    description:
      "A B2B wholesale flower marketplace built on Shopify Hydrogen for Kennicott, one of the largest wholesale floral distributors in North America. DirectBloom is a custom headless storefront connecting florists and floral buyers directly with farm-fresh blooms from growers worldwide. Features include B2B catalog pricing via Shopify's Customer Account API, a real-time delivery date picker with business-day logic and blackout dates, server-side product filtering by date/price/category/farm/color, and a vendor directory powered by a custom AWS Lambda sync pipeline. Integrated with Storyblok CMS for content management, Route package protection, and Gravity — a custom vendor portal built on React + AWS ECS.",
    shortDescription:
      "A B2B wholesale flower marketplace on Shopify Hydrogen with B2B pricing, delivery date selection, vendor directory, and Storyblok CMS integration.",
    client: "Kennicott (DirectBloom)",
    timeline: "Ongoing",
    role: "Sr. Software Engineer",
    technologies: [
      "Shopify Hydrogen",
      "React Router",
      "TypeScript",
      "Shopify Customer Account API",
      "Storyblok CMS",
      "AWS Lambda",
      "AWS ECS / Fargate",
      "Tailwind CSS",
      "GraphQL",
      "Oxygen Hosting",
    ],
    challenge:
      "Kennicott needed a modern B2B e-commerce experience to replace legacy ordering systems for wholesale florists. The platform required dynamic delivery scheduling with business-day logic, B2B catalog pricing scoped per company, multi-pass server-side product filtering, and a fully CMS-driven homepage — all while keeping performance high for a large product catalog of 250+ SKUs per collection.",
    solution:
      "Built a custom Shopify Hydrogen storefront with React Router and TypeScript. Implemented B2B pricing using Shopify's Customer Account API OAuth flow with per-company catalog prices via @inContext buyer directives. Created a delivery date picker with lead time, noon cutoff, and blackout date support. Built a 6-pass server-side product filter pipeline (date, price, category, farm, color). Integrated Storyblok CMS for all homepage content blocks and a vendor directory synced from Shopify metafields via AWS Lambda.",
    features: [
      {
        icon: "shopify",
        title: "B2B Catalog Pricing",
        description:
          "Shopify Customer Account API integration with OAuth login, per-company pricing via companyLocationId buyer context, and automatic catalog price resolution for authenticated florists.",
      },
      {
        icon: "calendar",
        title: "Delivery Date Picker",
        description:
          "Real-time delivery scheduling with business-day logic, noon cutoff, blackout date support, and sessionStorage persistence across page navigation.",
      },
      {
        icon: "search",
        title: "Multi-Pass Product Filtering",
        description:
          "6-pass server-side filter pipeline: expired/unavailable, delivery date, price range, category, farm/vendor, and color — all computed from live product metafields.",
      },
      {
        icon: "database",
        title: "Vendor Directory & Sync",
        description:
          "Automated vendor directory synced from Shopify metafields via AWS Lambda every 6 hours, merged with Storyblok vendor page stories for farm partner grid and navigation.",
      },
      {
        icon: "blocks",
        title: "Storyblok CMS Integration",
        description:
          "Fully CMS-driven homepage with vendor feature blocks, farm index grid, promo banners, and a date picker subtitle — all editable by content teams without code deploys.",
      },
      {
        icon: "admin",
        title: "Gravity Vendor Portal",
        description:
          "Companion vendor portal (Gravity) built with React + Express on AWS ECS Fargate with JWT authentication, DynamoDB, AWS SES email, and per-vendor store scoping.",
      },
      {
        icon: "settings",
        title: "Route Package Protection",
        description:
          "Full Route shipment protection integration with quote fetching, automatic cart line management, tier-based variant selection, and opt-out persistence.",
      },
      {
        icon: "code",
        title: "Freight & Import Charges",
        description:
          "Custom Checkout UI extension integration identifying Gravity's Freight/Tariff/Duty import charge cart lines and suppressing edit controls to prevent cart desync.",
      },
    ],
    category: "web",
    liveUrl: "https://directbloom.com",
  },
  {
    id: "charterbot-ai-assistant",
    title: "CharterBot - AI-Powered Charter Booking Assistant",
    description:
      "A comprehensive AI-powered SaaS platform that provides embeddable chat widgets for charter boat companies. CharterBot combines OpenAI's advanced language models with real-time integrations to create an intelligent assistant that handles customer inquiries, checks availability, and facilitates bookings 24/7. The platform features multi-tenant architecture, FareHarbor integration, weather data, and streaming responses that deliver 50% faster perceived performance. Currently live and actively used by Life On The Rocks Charters in Key West, FL.",
    shortDescription:
      "An AI-powered SaaS platform for charter boat companies with OpenAI integration, real-time booking, and weather data. Live at Life On The Rocks Charters.",
    client:
      "Charter Industry (SaaS Product) - Live at Life On The Rocks Charters",
    timeline: "8 months (ongoing)",
    role: "Full-Stack Developer & AI Integration Lead",
    technologies: [
      "Next.js 13+",
      "TypeScript",
      "OpenAI GPT-4o-mini",
      "Supabase",
      "FareHarbor API",
      "NOAA Weather API",
      "Vercel",
      "Tailwind CSS",
      "Real-time Streaming",
    ],
    challenge:
      "Charter boat companies needed an intelligent 24/7 assistant that could handle complex customer inquiries, check real-time availability, provide weather updates, and facilitate bookings. The challenge was creating an AI system that understood the marine industry while integrating with existing booking platforms and delivering fast, contextual responses.",
    solution:
      "Built a sophisticated AI platform using OpenAI's language models with custom prompt engineering for the charter industry. Implemented real-time FareHarbor calendar integration, NOAA weather data, multi-tenant architecture with subdomain routing, and streaming responses that reduced perceived response time by 50%. Created an embeddable widget system that works across any website. Successfully deployed and actively running on Life On The Rocks Charters (lifeontherockscharters.com) in Key West, FL.",
    features: [
      {
        icon: "ai",
        title: "AI-Powered Natural Language Processing",
        description:
          "OpenAI GPT-4o-mini integration with custom charter industry prompts, context-aware conversations, and intelligent intent detection for booking requests and weather queries.",
      },
      {
        icon: "calendar",
        title: "Real-Time Booking Integration",
        description:
          "Direct FareHarbor calendar integration checking real-time availability, parsing natural language dates, and generating dynamic booking links based on customer requests.",
      },
      {
        icon: "weather",
        title: "Marine Weather & Tide Data",
        description:
          "NOAA API integration providing current marine conditions, weather forecasts, and tide information to help customers plan their charter experiences.",
      },
      {
        icon: "streaming",
        title: "Streaming Response Technology",
        description:
          "Real-time response streaming with server-sent events delivering content as it generates, achieving 50% faster perceived performance and improved user experience.",
      },
      {
        icon: "multitenant",
        title: "Multi-Tenant SaaS Architecture",
        description:
          "Subdomain-based routing system allowing each charter company their own customized AI assistant with charter-specific prompts and business information.",
      },
      {
        icon: "embed",
        title: "Universal Widget System",
        description:
          "Embeddable JavaScript widget that integrates seamlessly into any website with responsive design, custom styling options, and cross-origin security.",
      },
      {
        icon: "analytics",
        title: "Conversion Tracking & Analytics",
        description:
          "Comprehensive analytics tracking phone clicks, email interactions, booking attempts, and conversation flows to optimize conversion rates.",
      },
      {
        icon: "live",
        title: "Live Production Deployment",
        description:
          "Successfully deployed and actively serving customers at Life On The Rocks Charters (lifeontherockscharters.com) in Key West, FL, handling real customer inquiries and bookings.",
      },
    ],
    category: "web",
    liveUrl: "https://charter-bot.com",
  },
  {
    id: "primeline-ecommerce",
    title: "Primeline.com E-commerce Platform",
    description:
      "A high-performance e-commerce platform built with Shopify Hydrogen, featuring NetSuite integration for real-time pricing and decoration data management. The platform handles complex product customization, automated product mapping systems, and sales rep tools while maintaining real-time data synchronization with NetSuite through micro services architecture.",
    shortDescription:
      "A sophisticated e-commerce platform with Shopify Hydrogen and NetSuite integration for real-time pricing and decoration data.",
    client: "Primeline Corporation",
    timeline: "4 months",
    role: "Sr. Software Engineer",
    technologies: [
      "Shopify Hydrogen",
      "React",
      "NetSuite",
      "GraphQL",
      "Tailwind CSS",
      "Shopify Admin API",
      "REST APIs",
      "Oxygen Hosting",
    ],
    challenge:
      "Primeline.com required a sophisticated e-commerce platform that could handle complex product customization, real-time pricing from NetSuite, and extensive decoration options. The challenge was building a headless Hydrogen storefront that could seamlessly integrate with existing systems while providing a modern, fast user experience.",
    solution:
      "Developed a comprehensive headless Hydrogen storefront with custom blocks system, advanced search enhancements, automated product mapping systems, and sales rep tools. Implemented real-time data synchronization with NetSuite through micro services architecture and created a robust Git-based deployment workflow with custom CI pipeline.",
    features: [
      {
        icon: "code",
        title: "Frontend Development",
        description:
          "Built the entire frontend using Hydrogen framework with React, creating responsive and performant user interfaces with server-side rendering.",
      },
      {
        icon: "database",
        title: "NetSuite Integration",
        description:
          "Configured micro services to fetch real-time pricing, product data, and decoration information from NetSuite ERP system.",
      },
      {
        icon: "upload",
        title: "Product Import System",
        description:
          "Developed automated product import functionality from NetSuite to Shopify, ensuring data consistency and real-time updates.",
      },
      {
        icon: "settings",
        title: "Metafield Configuration",
        description:
          "Configured and managed Shopify metafields for complex product specifications and customization options.",
      },
      {
        icon: "navigation",
        title: "Navigation & Theme Development",
        description:
          "Designed and implemented custom navigation system and specialized theme pages for collections and specials.",
      },
      {
        icon: "admin",
        title: "Admin & PDP/PLP Development",
        description:
          "Created comprehensive admin interfaces, product detail pages (PDP), and product listing pages (PLP) with advanced filtering.",
      },
      {
        icon: "blocks",
        title: "Headless Page Builder",
        description:
          "Custom headless blocks system allowing content teams to build dynamic pages without developer intervention.",
      },
      {
        icon: "palette",
        title: "Color Swatching & Mapping",
        description:
          "Advanced color management system for complex product variations and decoration options with automated swatch generation.",
      },
      {
        icon: "link",
        title: "Sales Rep URL Shortener",
        description:
          "Custom URL shortening system enabling sales reps to create trackable, branded links for customer outreach.",
      },
      {
        icon: "search",
        title: "Enhanced Search with Synonyms",
        description:
          "Intelligent search enhancement using synonym mapping to improve product discoverability and customer experience.",
      },
    ],
    category: "web",
    liveUrl: "https://primeline.com",
  },
  {
    id: "lacroix-digital-ecosystem",
    title: "LaCroix Sparkling Water - Complete Digital Ecosystem",
    description:
      "Comprehensive digital transformation for LaCroix Sparkling Water, including a custom WordPress website with animations and recipe functionality, plus a full-featured Magento 2 e-commerce store. The project involved building two interconnected platforms: a vibrant WordPress website for brand engagement and a robust Magento 2 store for merchandise sales, creating a cohesive brand experience that captured LaCroix's fun, sparkling personality while delivering professional e-commerce functionality.",
    shortDescription:
      "A complete digital transformation with custom WordPress website and Magento 2 e-commerce store for LaCroix Sparkling Water.",
    client: "LaCroix Sparkling Water",
    timeline: "6 months",
    role: "Full-Stack Developer & Brand Implementation Lead",
    technologies: [
      "WordPress",
      "Magento 2",
      "PHP",
      "Custom Theme Development",
      "Advanced Custom Fields",
      "Mailchimp API",
      "Payment Gateway Integration",
      "JavaScript Animations",
    ],
    challenge:
      "LaCroix Sparkling Water needed a complete digital transformation to showcase their brand personality and provide seamless e-commerce functionality. The main challenge was creating a cohesive brand experience that captured LaCroix's fun, sparkling personality while delivering professional e-commerce functionality with custom animations, interactive recipe cards, and social media integration.",
    solution:
      "Built two interconnected platforms: a vibrant WordPress website for brand engagement featuring custom animations, interactive recipe cards, and social media integration, alongside a robust Magento 2 store for merchandise sales. Implemented unified brand experience across both platforms with consistent design language and optimized user flows.",
    features: [
      {
        icon: "recipe",
        title: "Interactive Recipe Cards",
        description:
          "Custom-built recipe system featuring cocktails and mocktails with LaCroix flavors, complete with ingredient lists and instructions.",
      },
      {
        icon: "sparkle",
        title: "Custom Animations",
        description:
          'Engaging CSS and JavaScript animations that bring the "sparkle" to life throughout the user experience.',
      },
      {
        icon: "social",
        title: "Social Media Integration",
        description:
          "#LiveLaCroix campaign integration with real-time social media feeds and user-generated content showcase.",
      },
      {
        icon: "checkout",
        title: "Seamless Checkout",
        description:
          "Optimized Magento 2 checkout flow with multiple payment options and streamlined user experience.",
      },
      {
        icon: "mobile",
        title: "Mobile-First Design",
        description:
          "Fully responsive design optimized for mobile users, ensuring perfect experience across all devices.",
      },
      {
        icon: "brand",
        title: "Brand Consistency",
        description:
          "Unified brand experience across both platforms with consistent design language and user flows.",
      },
      {
        icon: "wordpress",
        title: "Custom WordPress Theme",
        description:
          "Complete custom WordPress theme design with custom post types, Advanced Custom Fields integration, and email newsletter functionality.",
      },
      {
        icon: "magento",
        title: "Magento 2 E-commerce",
        description:
          "Full Magento 2 customization with branded merchandise catalog, custom checkout experience, and inventory management.",
      },
    ],
    category: "web",
    liveUrl: "https://www.lacroixwater.com/",
  },
  {
    id: "faygo-detroit-pop",
    title: "Faygo - The One True Pop",
    description:
      "Complete digital transformation for Faygo Beverages, Detroit's legendary pop company with over 50 flavors since 1907. Built a custom WordPress website featuring an interactive flavor explorer, pop culture integration, and authentic Detroit-inspired design that honors their 115+ year history while appealing to both longtime fans and new customers discovering the Motor City spirit.",
    shortDescription:
      "A custom WordPress website for Detroit's iconic pop company featuring interactive flavor explorer and authentic Motor City design.",
    client: "Faygo Beverages",
    timeline: "6 months",
    role: "Full-Stack WordPress Developer & Brand Experience Designer",
    technologies: [
      "WordPress",
      "PHP",
      "Custom Theme Development",
      "Advanced Custom Fields",
      "JavaScript",
      "Google Maps API",
      "WooCommerce",
      "Social Media Integration",
    ],
    challenge:
      "Faygo Beverages, Detroit's iconic pop company since 1907, needed a digital presence that captured their authentic Motor City spirit and showcased their incredible variety of over 50 unique flavors. The challenge was creating a website that honored their rich history while appealing to both longtime fans and new customers.",
    solution:
      "Created a custom WordPress website that celebrates Faygo's pop culture significance with an interactive flavor discovery experience and authentic Detroit personality. Developed custom post types for flavor management, integrated e-commerce functionality, and built an advanced store locator to help fans find their favorite flavors nationwide.",
    features: [
      {
        icon: "flavor",
        title: "Interactive Flavor Explorer",
        description:
          "Custom-built flavor discovery system showcasing over 50 unique Faygo flavors with detailed descriptions, size options, and availability information.",
      },
      {
        icon: "culture",
        title: "Pop Culture Integration",
        description:
          "Celebrating Faygo's legendary status in pop culture with dedicated sections, social media integration, and interactive cultural references.",
      },
      {
        icon: "detroit",
        title: "Detroit Heritage Design",
        description:
          "Authentic Motor City-inspired design elements that honor Faygo's 115+ year history and deep roots in Detroit culture.",
      },
      {
        icon: "locator",
        title: "Pop Locator System",
        description:
          "Advanced store locator functionality helping fans find their favorite Faygo flavors at nearby retailers across the country.",
      },
      {
        icon: "history",
        title: "Brand History Showcase",
        description:
          "Interactive timeline and storytelling features that celebrate Faygo's incredible journey from 1907 to present day.",
      },
      {
        icon: "ecommerce",
        title: "E-commerce Integration",
        description:
          "Seamless integration with online shop functionality for Faygo merchandise and direct product purchasing through WooCommerce.",
      },
    ],
    category: "web",
    liveUrl: "https://www.faygo.com/",
  },
  {
    id: "experience-key-west",
    title: "Experience Key West - Travel & Charter Site",
    description:
      "A modern travel and tourism website for a Key West charter and experiences company, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Sanity CMS. The site features a live weather widget in the header pulling real-time Key West conditions and a 3-day forecast from the Open-Meteo API — built entirely in Next.js with no third-party weather service fee. All content — tours, private charters, blog posts, and pages — is managed through Sanity Studio v3 with a custom desk structure, giving the client full self-service control. FareHarbor booking is embedded directly on experience pages for seamless in-page reservations. Deployed on Vercel with Sanity webhook-triggered ISR revalidation so content changes go live instantly without a code deploy.",
    shortDescription:
      "A Next.js 15 travel site for Key West charters with a live weather widget, Sanity CMS, FareHarbor booking integration, and Vercel ISR deployment.",
    client: "Experience Key West",
    timeline: "Ongoing",
    role: "Full-Stack Developer",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "FareHarbor",
      "Open-Meteo API",
      "Vercel",
      "Resend",
    ],
    challenge:
      "Experience Key West needed a modern, content-managed tourism site that could showcase charters, tours, and experiences while giving non-technical staff the ability to add and update content without developer involvement. The site also needed real-time local weather to help visitors plan trips, and seamless in-page booking without redirecting away from the site.",
    solution:
      "Built a Next.js 15 App Router site with Sanity Studio v3 as the headless CMS — custom desk structure, schema-driven content types (tours, private charters, blog posts, pages), and a seed/snapshot workflow for safe content migrations. Implemented a custom weather widget fetching live Key West conditions from Open-Meteo's free API, rendering today plus a 2-day forecast in the site header. Embedded FareHarbor booking widgets directly on experience detail pages. Configured Vercel ISR with Sanity webhook revalidation so published content is live within seconds.",
    features: [
      {
        icon: "weather",
        title: "Live Key West Weather Widget",
        description:
          "Real-time weather header showing today's conditions plus a 2-day forecast — temperature highs/lows, weather icons, and rain probability — fetched from Open-Meteo's free API with no third-party fees.",
      },
      {
        icon: "cms",
        title: "Sanity CMS with Custom Studio",
        description:
          "Sanity Studio v3 with a custom desk structure gives the client full self-service control over tours, private charters, blog posts, and pages — no developer required for content updates.",
      },
      {
        icon: "booking",
        title: "FareHarbor Booking Integration",
        description:
          "FareHarbor booking widgets embedded directly on experience detail pages so visitors can check availability and book without leaving the site.",
      },
      {
        icon: "deploy",
        title: "Vercel ISR + Sanity Webhooks",
        description:
          "Incremental Static Regeneration triggered by Sanity publish webhooks — content changes go live in seconds without a full redeploy, keeping the site fast and always up to date.",
      },
      {
        icon: "code",
        title: "Next.js 15 App Router",
        description:
          "Full App Router architecture with TypeScript, server components, dynamic routes for tours and blog, sitemap generation, and robots.txt — built for performance and SEO.",
      },
      {
        icon: "email",
        title: "Contact Form with Resend",
        description:
          "Server-side contact form handler using Resend for transactional email delivery, with SMTP fallback — no third-party form service required.",
      },
    ],
    category: "web",
    liveUrl: "https://www.experiencekey-west.com",
    codeUrl: "https://github.com/experiencekey-west/experiencekey-west",
  },
  {
    id: "oceanblue-omega-supplements",
    title: "OceanBlue Omega - Premium Supplement Store",
    description:
      'Complete Shopify e-commerce transformation for OceanBlue Omega, featuring custom Liquid theme development, mobile-first responsive design, and sustainability-focused branding. Built a comprehensive supplement catalog with interactive product quiz, seamless checkout experience, and advanced conversion optimization. The platform showcases their "Nothin\' but the Good Stuff" philosophy through quality assurance messaging, environmental partnerships, and transparent pricing strategies.',
    shortDescription:
      "A premium Shopify supplement store with custom Liquid theme, interactive product quiz, and sustainability-focused branding.",
    client: "OceanBlue Omega",
    timeline: "2 months",
    role: "Shopify Developer & E-commerce UX Designer",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Mobile-First Design",
      "Klaviyo",
      "Google Maps API",
      "CSS/SCSS",
      "E-commerce Optimization",
    ],
    challenge:
      "OceanBlue Omega needed a premium e-commerce platform that could educate customers about complex nutritional benefits while providing a seamless mobile shopping experience. The challenge was positioning them as the premium choice in the crowded supplement market while building trust through transparency and quality messaging.",
    solution:
      "Developed a custom Shopify Liquid theme with mobile-first design principles, interactive product recommendations, sustainability storytelling, and conversion-optimized checkout flows. Created an educational platform that builds trust through quality certifications, environmental partnerships, and clear value propositions.",
    features: [
      {
        icon: "mobile",
        title: "Mobile-First Design",
        description:
          "Responsive Liquid theme optimized for mobile shopping with touch-friendly product galleries, streamlined checkout, and thumb-friendly navigation for seamless mobile experience.",
      },
      {
        icon: "quiz",
        title: "Interactive Product Quiz",
        description:
          "Custom JavaScript-powered quiz functionality helping customers find their perfect Omega-3 formula based on health goals and lifestyle preferences.",
      },
      {
        icon: "sustainability",
        title: "Sustainability Storytelling",
        description:
          "Partnership showcase with 4ocean for ocean plastic neutrality, sustainably sourced ingredients, and comprehensive environmental commitment messaging.",
      },
      {
        icon: "quality",
        title: "Quality Assurance Features",
        description:
          'Prominent display of "No Fishy Burps," third-party testing, mercury-free certification, and full transparency messaging to build customer trust.',
      },
      {
        icon: "locator",
        title: "Store Locator Integration",
        description:
          "Custom store finder with Google Maps API helping customers locate OceanBlue products at nearby retailers, bridging online and offline shopping experiences.",
      },
      {
        icon: "shopify",
        title: "Advanced Shopify Development",
        description:
          "Custom Liquid theme development with product variant management, subscription setup, email marketing integration, and conversion-optimized checkout flows.",
      },
      {
        icon: "supplement",
        title: "Supplement-Specific Features",
        description:
          "Specialized product catalog showcasing Essentials and Professional series with detailed nutritional information, dosage guidance, and health benefit messaging.",
      },
      {
        icon: "checkout",
        title: "Conversion Optimization",
        description:
          "Strategic pricing display, subscription options, free shipping thresholds, and 20% email signup incentives designed to maximize conversion rates.",
      },
    ],
    category: "web",
    liveUrl: "https://www.oceanblueomega.com/",
  },
  {
    id: "carbon-marine-equipment",
    title: "Carbon Marine - Specialized Marine Equipment Store",
    description:
      "Custom Shopify Liquid theme development for Carbon Marine, a premium marine equipment retailer specializing in carbon fiber push poles, tiller extensions, and fly fishing accessories. Built for the specialized marine industry with complex product categorization, technical specifications display, and mobile-first design optimized for anglers who often shop while on the water.",
    shortDescription:
      "A specialized Shopify marine equipment store with custom Liquid theme and complex product categorization for the fishing industry.",
    client: "Carbon Marine",
    timeline: "4 months",
    role: "Shopify Developer & Marine Industry UX Specialist",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS/SCSS",
      "Mobile-First Design",
      "E-commerce Optimization",
      "Marine Industry UX",
    ],
    challenge:
      "Carbon Marine required a specialized e-commerce platform to showcase their premium marine equipment to a highly knowledgeable customer base. The challenge was creating a Shopify store that could effectively organize and present complex product lines while maintaining the technical credibility essential in the marine industry.",
    solution:
      "Developed a custom Liquid theme with sophisticated product categorization, detailed technical specifications display, and mobile-responsive design optimized for both on-the-water and desktop shopping experiences. Created an intuitive navigation system for hundreds of specialized marine products organized by type, compatibility, and application.",
    features: [
      {
        icon: "mobile",
        title: "Mobile-Optimized Design",
        description:
          "Responsive Liquid theme designed for anglers who often shop while on the water, with touch-friendly navigation and fast loading times optimized for marine environments.",
      },
      {
        icon: "marine",
        title: "Complex Product Categorization",
        description:
          "Sophisticated navigation system organizing hundreds of specialized marine products by type, compatibility, and application across six major product categories.",
      },
      {
        icon: "specifications",
        title: "Technical Specifications Display",
        description:
          "Detailed product information presentation including compatibility charts, dimensions, and technical specifications critical for marine equipment selection and performance.",
      },
      {
        icon: "guide",
        title: "Guide Program Integration",
        description:
          "Specialized program features for fishing guides with dedicated sections and professional-oriented product recommendations tailored to commercial fishing operations.",
      },
      {
        icon: "inventory",
        title: "Smart Inventory Management",
        description:
          "Advanced inventory display showing availability, blemished items, and clearance sections to help customers find the best deals while managing stock levels effectively.",
      },
      {
        icon: "care",
        title: "Care Information Integration",
        description:
          "Comprehensive care and maintenance information helping customers maximize the lifespan of their premium marine equipment with detailed usage and storage guidelines.",
      },
      {
        icon: "shopify",
        title: "Advanced Shopify Development",
        description:
          "Custom Liquid template development with complex product variant management, multi-level category organization, and cross-browser compatibility optimization.",
      },
      {
        icon: "fishing",
        title: "Fishing Industry Specialization",
        description:
          "Specialized features for carbon fiber push poles, tiller extensions, fly line management, and species-specific fishing accessories with detailed compatibility information.",
      },
    ],
    category: "web",
    liveUrl: "https://www.carbonmarine.com/",
  },
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
