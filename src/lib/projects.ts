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
  category: 'web' | 'mobile' | 'ui' | 'all';
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'primeline-ecommerce',
    title: 'Primeline.com E-commerce Platform',
    description: 'A high-performance e-commerce platform built with Shopify Hydrogen, featuring NetSuite integration for real-time pricing and decoration data management. The platform handles complex product customization, automated product mapping systems, and sales rep tools while maintaining real-time data synchronization with NetSuite through micro services architecture.',
    shortDescription: 'A sophisticated e-commerce platform with Shopify Hydrogen and NetSuite integration for real-time pricing and decoration data.',
    client: 'Primeline Corporation',
    timeline: '8 months',
    role: 'Lead Frontend Developer & System Integrator',
    technologies: ['Shopify Hydrogen', 'React', 'NetSuite', 'GraphQL', 'Tailwind CSS', 'Shopify Admin API', 'REST APIs', 'Oxygen Hosting'],
    challenge: 'Primeline.com required a sophisticated e-commerce platform that could handle complex product customization, real-time pricing from NetSuite, and extensive decoration options. The challenge was building a headless Hydrogen storefront that could seamlessly integrate with existing systems while providing a modern, fast user experience.',
    solution: 'Developed a comprehensive headless Hydrogen storefront with custom blocks system, advanced search enhancements, automated product mapping systems, and sales rep tools. Implemented real-time data synchronization with NetSuite through micro services architecture and created a robust Git-based deployment workflow with custom CI pipeline.',
    features: [
      {
        icon: 'code',
        title: 'Frontend Development',
        description: 'Built the entire frontend using Hydrogen framework with React, creating responsive and performant user interfaces with server-side rendering.'
      },
      {
        icon: 'database',
        title: 'NetSuite Integration',
        description: 'Configured micro services to fetch real-time pricing, product data, and decoration information from NetSuite ERP system.'
      },
      {
        icon: 'upload',
        title: 'Product Import System',
        description: 'Developed automated product import functionality from NetSuite to Shopify, ensuring data consistency and real-time updates.'
      },
      {
        icon: 'settings',
        title: 'Metafield Configuration',
        description: 'Configured and managed Shopify metafields for complex product specifications and customization options.'
      },
      {
        icon: 'navigation',
        title: 'Navigation & Theme Development',
        description: 'Designed and implemented custom navigation system and specialized theme pages for collections and specials.'
      },
      {
        icon: 'admin',
        title: 'Admin & PDP/PLP Development',
        description: 'Created comprehensive admin interfaces, product detail pages (PDP), and product listing pages (PLP) with advanced filtering.'
      },
      {
        icon: 'blocks',
        title: 'Headless Page Builder',
        description: 'Custom headless blocks system allowing content teams to build dynamic pages without developer intervention.'
      },
      {
        icon: 'palette',
        title: 'Color Swatching & Mapping',
        description: 'Advanced color management system for complex product variations and decoration options with automated swatch generation.'
      },
      {
        icon: 'link',
        title: 'Sales Rep URL Shortener',
        description: 'Custom URL shortening system enabling sales reps to create trackable, branded links for customer outreach.'
      },
      {
        icon: 'search',
        title: 'Enhanced Search with Synonyms',
        description: 'Intelligent search enhancement using synonym mapping to improve product discoverability and customer experience.'
      }
    ],
    category: 'web',
    liveUrl: 'https://primeline.com'
  },
  {
    id: 'lacroix-digital-ecosystem',
    title: 'LaCroix Sparkling Water - Complete Digital Ecosystem',
    description: 'Comprehensive digital transformation for LaCroix Sparkling Water, including a custom WordPress website with animations and recipe functionality, plus a full-featured Magento 2 e-commerce store. The project involved building two interconnected platforms: a vibrant WordPress website for brand engagement and a robust Magento 2 store for merchandise sales, creating a cohesive brand experience that captured LaCroix\'s fun, sparkling personality while delivering professional e-commerce functionality.',
    shortDescription: 'A complete digital transformation with custom WordPress website and Magento 2 e-commerce store for LaCroix Sparkling Water.',
    client: 'LaCroix Sparkling Water',
    timeline: '6 months',
    role: 'Full-Stack Developer & Brand Implementation Lead',
    technologies: ['WordPress', 'Magento 2', 'PHP', 'Custom Theme Development', 'Advanced Custom Fields', 'Mailchimp API', 'Payment Gateway Integration', 'JavaScript Animations'],
    challenge: 'LaCroix Sparkling Water needed a complete digital transformation to showcase their brand personality and provide seamless e-commerce functionality. The main challenge was creating a cohesive brand experience that captured LaCroix\'s fun, sparkling personality while delivering professional e-commerce functionality with custom animations, interactive recipe cards, and social media integration.',
    solution: 'Built two interconnected platforms: a vibrant WordPress website for brand engagement featuring custom animations, interactive recipe cards, and social media integration, alongside a robust Magento 2 store for merchandise sales. Implemented unified brand experience across both platforms with consistent design language and optimized user flows.',
    features: [
      {
        icon: 'recipe',
        title: 'Interactive Recipe Cards',
        description: 'Custom-built recipe system featuring cocktails and mocktails with LaCroix flavors, complete with ingredient lists and instructions.'
      },
      {
        icon: 'sparkle',
        title: 'Custom Animations',
        description: 'Engaging CSS and JavaScript animations that bring the "sparkle" to life throughout the user experience.'
      },
      {
        icon: 'social',
        title: 'Social Media Integration',
        description: '#LiveLaCroix campaign integration with real-time social media feeds and user-generated content showcase.'
      },
      {
        icon: 'checkout',
        title: 'Seamless Checkout',
        description: 'Optimized Magento 2 checkout flow with multiple payment options and streamlined user experience.'
      },
      {
        icon: 'mobile',
        title: 'Mobile-First Design',
        description: 'Fully responsive design optimized for mobile users, ensuring perfect experience across all devices.'
      },
      {
        icon: 'brand',
        title: 'Brand Consistency',
        description: 'Unified brand experience across both platforms with consistent design language and user flows.'
      },
      {
        icon: 'wordpress',
        title: 'Custom WordPress Theme',
        description: 'Complete custom WordPress theme design with custom post types, Advanced Custom Fields integration, and email newsletter functionality.'
      },
      {
        icon: 'magento',
        title: 'Magento 2 E-commerce',
        description: 'Full Magento 2 customization with branded merchandise catalog, custom checkout experience, and inventory management.'
      }
    ],
    category: 'web',
    liveUrl: 'https://www.lacroixwater.com/'
  },
  {
    id: 'faygo-detroit-pop',
    title: 'Faygo - The One True Pop',
    description: 'Complete digital transformation for Faygo Beverages, Detroit\'s legendary pop company with over 50 flavors since 1907. Built a custom WordPress website featuring an interactive flavor explorer, pop culture integration, and authentic Detroit-inspired design that honors their 115+ year history while appealing to both longtime fans and new customers discovering the Motor City spirit.',
    shortDescription: 'A custom WordPress website for Detroit\'s iconic pop company featuring interactive flavor explorer and authentic Motor City design.',
    client: 'Faygo Beverages',
    timeline: '5 months',
    role: 'Full-Stack WordPress Developer & Brand Experience Designer',
    technologies: ['WordPress', 'PHP', 'Custom Theme Development', 'Advanced Custom Fields', 'JavaScript', 'Google Maps API', 'WooCommerce', 'Social Media Integration'],
    challenge: 'Faygo Beverages, Detroit\'s iconic pop company since 1907, needed a digital presence that captured their authentic Motor City spirit and showcased their incredible variety of over 50 unique flavors. The challenge was creating a website that honored their rich history while appealing to both longtime fans and new customers.',
    solution: 'Created a custom WordPress website that celebrates Faygo\'s pop culture significance with an interactive flavor discovery experience and authentic Detroit personality. Developed custom post types for flavor management, integrated e-commerce functionality, and built an advanced store locator to help fans find their favorite flavors nationwide.',
    features: [
      {
        icon: 'flavor',
        title: 'Interactive Flavor Explorer',
        description: 'Custom-built flavor discovery system showcasing over 50 unique Faygo flavors with detailed descriptions, size options, and availability information.'
      },
      {
        icon: 'culture',
        title: 'Pop Culture Integration',
        description: 'Celebrating Faygo\'s legendary status in pop culture with dedicated sections, social media integration, and interactive cultural references.'
      },
      {
        icon: 'detroit',
        title: 'Detroit Heritage Design',
        description: 'Authentic Motor City-inspired design elements that honor Faygo\'s 115+ year history and deep roots in Detroit culture.'
      },
      {
        icon: 'locator',
        title: 'Pop Locator System',
        description: 'Advanced store locator functionality helping fans find their favorite Faygo flavors at nearby retailers across the country.'
      },
      {
        icon: 'history',
        title: 'Brand History Showcase',
        description: 'Interactive timeline and storytelling features that celebrate Faygo\'s incredible journey from 1907 to present day.'
      },
      {
        icon: 'ecommerce',
        title: 'E-commerce Integration',
        description: 'Seamless integration with online shop functionality for Faygo merchandise and direct product purchasing through WooCommerce.'
      }
    ],
    category: 'web',
    liveUrl: 'https://www.faygo.com/'
  },
  {
    id: 'saltwater-getaway-yacht-charter',
    title: 'Saltwater Getaway - Luxury Yacht Charter Service',
    description: 'Premium yacht charter website built on Squarespace with seamless FareHarbor booking integration. Designed for luxury marine tourism in St. Petersburg, FL, featuring personalized charter experiences, professional crew profiles, and streamlined booking workflows. The platform showcases the exclusivity and personalization of luxury yacht charter services while providing an intuitive booking experience that converts visitors into customers.',
    shortDescription: 'A luxury yacht charter website with Squarespace and FareHarbor booking integration for premium marine tourism experiences.',
    client: 'Saltwater Getaway',
    timeline: '4 months',
    role: 'Squarespace Developer & Tourism UX Designer',
    technologies: ['Squarespace', 'FareHarbor Integration', 'Custom CSS/JavaScript', 'Responsive Design', 'SEO Optimization', 'Payment Processing', 'Booking System Integration'],
    challenge: 'Saltwater Getaway needed a premium website that could showcase their luxury yacht charter services while providing a seamless booking experience for customers. The challenge was creating a sophisticated platform that conveyed the exclusivity and personalization of their services while integrating a robust booking system.',
    solution: 'Developed a custom Squarespace site with FareHarbor integration, featuring elegant design, comprehensive service presentation, crew profiles, and streamlined booking workflows. Created visual storytelling elements and mobile-optimized experiences that showcase yacht experiences and Florida\'s beautiful coastline to inspire bookings.',
    features: [
      {
        icon: 'squarespace',
        title: 'Squarespace Platform Mastery',
        description: 'Custom Squarespace development with advanced design customization, responsive layouts, and optimized performance for luxury service presentation.'
      },
      {
        icon: 'booking',
        title: 'FareHarbor Booking Integration',
        description: 'Seamless third-party booking system integration allowing customers to check availability, book charters, and manage reservations in real-time.'
      },
      {
        icon: 'gallery',
        title: 'Visual Storytelling',
        description: 'Rich photo gallery showcasing yacht experiences, crew personalities, and Florida\'s beautiful coastline to inspire bookings.'
      },
      {
        icon: 'location',
        title: 'Location & Contact Integration',
        description: 'Integrated mapping, contact forms, and location details for Demens Landing Park with clear directions and contact information.'
      },
      {
        icon: 'mobile',
        title: 'Mobile-Optimized Experience',
        description: 'Responsive design ensuring seamless browsing and booking experiences across all devices, particularly important for on-the-go customers.'
      },
      {
        icon: 'service',
        title: 'Service Differentiation',
        description: 'Clear presentation of different charter options with distinct pricing, duration, and experience details to guide customer decisions.'
      }
    ],
    category: 'web',
    liveUrl: 'https://www.saltwatergetaway.com/'
  },
  {
    id: 'oceanblue-omega-supplements',
    title: 'OceanBlue Omega - Premium Supplement Store',
    description: 'Complete Shopify e-commerce transformation for OceanBlue Omega, featuring custom Liquid theme development, mobile-first responsive design, and sustainability-focused branding. Built a comprehensive supplement catalog with interactive product quiz, seamless checkout experience, and advanced conversion optimization. The platform showcases their "Nothin\' but the Good Stuff" philosophy through quality assurance messaging, environmental partnerships, and transparent pricing strategies.',
    shortDescription: 'A premium Shopify supplement store with custom Liquid theme, interactive product quiz, and sustainability-focused branding.',
    client: 'OceanBlue Omega',
    timeline: '6 months',
    role: 'Shopify Developer & E-commerce UX Designer',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Mobile-First Design', 'Klaviyo', 'Google Maps API', 'CSS/SCSS', 'E-commerce Optimization'],
    challenge: 'OceanBlue Omega needed a premium e-commerce platform that could educate customers about complex nutritional benefits while providing a seamless mobile shopping experience. The challenge was positioning them as the premium choice in the crowded supplement market while building trust through transparency and quality messaging.',
    solution: 'Developed a custom Shopify Liquid theme with mobile-first design principles, interactive product recommendations, sustainability storytelling, and conversion-optimized checkout flows. Created an educational platform that builds trust through quality certifications, environmental partnerships, and clear value propositions.',
    features: [
      {
        icon: 'mobile',
        title: 'Mobile-First Design',
        description: 'Responsive Liquid theme optimized for mobile shopping with touch-friendly product galleries, streamlined checkout, and thumb-friendly navigation for seamless mobile experience.'
      },
      {
        icon: 'quiz',
        title: 'Interactive Product Quiz',
        description: 'Custom JavaScript-powered quiz functionality helping customers find their perfect Omega-3 formula based on health goals and lifestyle preferences.'
      },
      {
        icon: 'sustainability',
        title: 'Sustainability Storytelling',
        description: 'Partnership showcase with 4ocean for ocean plastic neutrality, sustainably sourced ingredients, and comprehensive environmental commitment messaging.'
      },
      {
        icon: 'quality',
        title: 'Quality Assurance Features',
        description: 'Prominent display of "No Fishy Burps," third-party testing, mercury-free certification, and full transparency messaging to build customer trust.'
      },
      {
        icon: 'locator',
        title: 'Store Locator Integration',
        description: 'Custom store finder with Google Maps API helping customers locate OceanBlue products at nearby retailers, bridging online and offline shopping experiences.'
      },
      {
        icon: 'shopify',
        title: 'Advanced Shopify Development',
        description: 'Custom Liquid theme development with product variant management, subscription setup, email marketing integration, and conversion-optimized checkout flows.'
      },
      {
        icon: 'supplement',
        title: 'Supplement-Specific Features',
        description: 'Specialized product catalog showcasing Essentials and Professional series with detailed nutritional information, dosage guidance, and health benefit messaging.'
      },
      {
        icon: 'checkout',
        title: 'Conversion Optimization',
        description: 'Strategic pricing display, subscription options, free shipping thresholds, and 20% email signup incentives designed to maximize conversion rates.'
      }
    ],
    category: 'web',
    liveUrl: 'https://www.oceanblueomega.com/'
  },
  {
    id: 'carbon-marine-equipment',
    title: 'Carbon Marine - Specialized Marine Equipment Store',
    description: 'Custom Shopify Liquid theme development for Carbon Marine, a premium marine equipment retailer specializing in carbon fiber push poles, tiller extensions, and fly fishing accessories. Built for the specialized marine industry with complex product categorization, technical specifications display, and mobile-first design optimized for anglers who often shop while on the water.',
    shortDescription: 'A specialized Shopify marine equipment store with custom Liquid theme and complex product categorization for the fishing industry.',
    client: 'Carbon Marine',
    timeline: '5 months',
    role: 'Shopify Developer & Marine Industry UX Specialist',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS/SCSS', 'Mobile-First Design', 'E-commerce Optimization', 'Marine Industry UX'],
    challenge: 'Carbon Marine required a specialized e-commerce platform to showcase their premium marine equipment to a highly knowledgeable customer base. The challenge was creating a Shopify store that could effectively organize and present complex product lines while maintaining the technical credibility essential in the marine industry.',
    solution: 'Developed a custom Liquid theme with sophisticated product categorization, detailed technical specifications display, and mobile-responsive design optimized for both on-the-water and desktop shopping experiences. Created an intuitive navigation system for hundreds of specialized marine products organized by type, compatibility, and application.',
    features: [
      {
        icon: 'mobile',
        title: 'Mobile-Optimized Design',
        description: 'Responsive Liquid theme designed for anglers who often shop while on the water, with touch-friendly navigation and fast loading times optimized for marine environments.'
      },
      {
        icon: 'marine',
        title: 'Complex Product Categorization',
        description: 'Sophisticated navigation system organizing hundreds of specialized marine products by type, compatibility, and application across six major product categories.'
      },
      {
        icon: 'specifications',
        title: 'Technical Specifications Display',
        description: 'Detailed product information presentation including compatibility charts, dimensions, and technical specifications critical for marine equipment selection and performance.'
      },
      {
        icon: 'guide',
        title: 'Guide Program Integration',
        description: 'Specialized program features for fishing guides with dedicated sections and professional-oriented product recommendations tailored to commercial fishing operations.'
      },
      {
        icon: 'inventory',
        title: 'Smart Inventory Management',
        description: 'Advanced inventory display showing availability, blemished items, and clearance sections to help customers find the best deals while managing stock levels effectively.'
      },
      {
        icon: 'care',
        title: 'Care Information Integration',
        description: 'Comprehensive care and maintenance information helping customers maximize the lifespan of their premium marine equipment with detailed usage and storage guidelines.'
      },
      {
        icon: 'shopify',
        title: 'Advanced Shopify Development',
        description: 'Custom Liquid template development with complex product variant management, multi-level category organization, and cross-browser compatibility optimization.'
      },
      {
        icon: 'fishing',
        title: 'Fishing Industry Specialization',
        description: 'Specialized features for carbon fiber push poles, tiller extensions, fly line management, and species-specific fishing accessories with detailed compatibility information.'
      }
    ],
    category: 'web',
    liveUrl: 'https://www.carbonmarine.com/'
  },
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
}; 