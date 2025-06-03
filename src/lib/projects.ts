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
    id: 'smart-home-dashboard',
    title: 'Smart Home Dashboard',
    description: 'A comprehensive IoT dashboard for controlling smart home devices with real-time monitoring and automation features. The system handles data from multiple IoT devices simultaneously while maintaining a responsive interface.',
    shortDescription: 'A comprehensive IoT dashboard with real-time monitoring and automation features.',
    client: 'Tech Startup',
    timeline: '4 months',
    role: 'Full-Stack Developer',
    technologies: ['React', 'Node.js', 'Socket.io', 'Chart.js', 'MQTT', 'Material UI', 'MongoDB'],
    challenge: 'Creating a real-time system that could handle data from multiple IoT devices simultaneously while maintaining a responsive interface and ensuring reliable device communication.',
    solution: 'Implemented WebSockets for real-time communication and optimized rendering with React&apos;s virtual DOM to handle frequent updates efficiently. Used MQTT protocol for reliable device messaging.',
    features: [
      {
        icon: 'home',
        title: 'Device Control',
        description: 'Centralized control for lights, thermostats, security systems, and other smart devices with real-time status updates.'
      },
      {
        icon: 'chart',
        title: 'Energy Monitoring',
        description: 'Track energy usage patterns and costs with detailed analytics and recommendations for optimization.'
      },
      {
        icon: 'automation',
        title: 'Automation Rules',
        description: 'Create custom automation scenarios based on time, device states, and environmental conditions.'
      },
      {
        icon: 'mobile',
        title: 'Mobile Responsive',
        description: 'Fully responsive design that works seamlessly across desktop, tablet, and mobile devices.'
      }
    ],
    category: 'web'
  },
  {
    id: 'fitness-tracker-app',
    title: 'Fitness Tracker App',
    description: 'A mobile application for tracking workouts, nutrition, and health metrics with personalized insights and goal setting. Integrates with various health APIs while ensuring data privacy and providing meaningful insights.',
    shortDescription: 'A cross-platform mobile application with offline capabilities and cloud sync.',
    client: 'Health & Wellness Company',
    timeline: '5 months',
    role: 'Mobile Developer & UX Designer',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit API', 'Redux', 'Cloud Functions'],
    challenge: 'Integrating with various health APIs while ensuring data privacy and providing meaningful insights from complex health data. The app needed to work offline and sync data when connectivity was restored.',
    solution: 'Created a secure data processing pipeline with user-controlled privacy settings and developed custom algorithms for generating personalized insights. Implemented sophisticated caching strategies for offline functionality.',
    features: [
      {
        icon: 'activity',
        title: 'Workout Tracking',
        description: 'Log and track various exercises with sets, reps, weight, and duration. Includes pre-built workout templates and custom routine creation.'
      },
      {
        icon: 'nutrition',
        title: 'Nutrition Logging',
        description: 'Comprehensive food database with barcode scanning, macro tracking, and meal planning features.'
      },
      {
        icon: 'health',
        title: 'Health Metrics',
        description: 'Monitor vital signs, sleep patterns, and other health indicators with integration to wearable devices.'
      },
      {
        icon: 'goals',
        title: 'Goal Setting',
        description: 'Set and track fitness goals with progress visualization and adaptive recommendations.'
      }
    ],
    category: 'mobile'
  },
  {
    id: 'banking-app-redesign',
    title: 'Banking App Redesign',
    description: 'A complete UI/UX redesign for a banking application focusing on accessibility, user experience, and modern design principles. Balanced modern design aesthetics with strict banking security requirements.',
    shortDescription: 'A complete UI/UX redesign focusing on accessibility and user experience.',
    client: 'Regional Bank',
    timeline: '6 months',
    role: 'UX/UI Designer & Frontend Developer',
    technologies: ['Figma', 'React', 'TypeScript', 'Styled Components', 'Accessibility Standards', 'User Testing'],
    challenge: 'Balancing modern design aesthetics with strict banking security requirements and accessibility needs for diverse users. The existing app had poor usability scores and accessibility issues.',
    solution: 'Conducted extensive user research with diverse user groups and created a modular design system that maintained brand identity while improving usability. Implemented comprehensive accessibility features.',
    features: [
      {
        icon: 'accessibility',
        title: 'Accessibility First',
        description: 'WCAG 2.1 AA compliant design with screen reader support, high contrast modes, and keyboard navigation.'
      },
      {
        icon: 'dashboard',
        title: 'Personalized Dashboard',
        description: 'Customizable dashboard with account overviews, recent transactions, and quick actions based on user behavior.'
      },
      {
        icon: 'security',
        title: 'Enhanced Security',
        description: 'Biometric authentication, fraud detection alerts, and secure transaction confirmation flows.'
      },
      {
        icon: 'mobile-first',
        title: 'Mobile-First Design',
        description: 'Responsive design optimized for mobile usage with touch-friendly interfaces and gesture support.'
      }
    ],
    category: 'ui'
  },
  {
    id: 'travel-companion-app',
    title: 'Travel Companion App',
    description: 'A travel app with itinerary planning, local recommendations, and offline maps for travelers exploring new destinations. Features seamless offline functionality and background sync capabilities.',
    shortDescription: 'A travel app with itinerary planning, local recommendations, and offline maps.',
    client: 'Travel Agency',
    timeline: '4 months',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Google Maps API', 'Firebase', 'SQLite', 'REST APIs', 'Bloc Pattern'],
    challenge: 'Creating a seamless experience that works offline in areas with limited connectivity while providing up-to-date information when online. The app needed to handle large amounts of location data efficiently.',
    solution: 'Implemented sophisticated caching strategies and background sync to ensure critical features work offline while updating data when connectivity is restored. Used efficient data compression and smart preloading.',
    features: [
      {
        icon: 'map',
        title: 'Offline Maps',
        description: 'Download maps for offline use with points of interest, walking directions, and location bookmarks.'
      },
      {
        icon: 'calendar',
        title: 'Itinerary Planning',
        description: 'Create detailed travel itineraries with time management, location optimization, and sharing capabilities.'
      },
      {
        icon: 'recommendations',
        title: 'Local Recommendations',
        description: 'Discover restaurants, attractions, and activities based on location, preferences, and local insights.'
      },
      {
        icon: 'journal',
        title: 'Travel Journal',
        description: 'Document your travels with photos, notes, and memories that sync across devices.'
      }
    ],
    category: 'mobile'
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'A comprehensive design system with components, guidelines, and documentation for product teams to ensure consistent user experiences across multiple products and platforms.',
    shortDescription: 'A comprehensive design system with components and documentation.',
    client: 'Enterprise Software Company',
    timeline: '8 months',
    role: 'Design Systems Lead',
    technologies: ['Storybook', 'Styled Components', 'Figma', 'Jest', 'GitHub Actions', 'TypeScript'],
    challenge: 'Creating a flexible system that could be used across multiple products while maintaining consistency and allowing for product-specific customizations. Teams had inconsistent implementations and poor collaboration.',
    solution: 'Developed a token-based architecture with theming support and created comprehensive documentation with interactive examples to facilitate adoption. Established governance processes and automated testing.',
    features: [
      {
        icon: 'components',
        title: 'Component Library',
        description: 'Reusable UI components with props, variants, and comprehensive API documentation for developers.'
      },
      {
        icon: 'tokens',
        title: 'Design Tokens',
        description: 'Centralized design tokens for colors, typography, spacing, and animations with multi-platform export.'
      },
      {
        icon: 'documentation',
        title: 'Living Documentation',
        description: 'Interactive documentation with code examples, usage guidelines, and design principles.'
      },
      {
        icon: 'testing',
        title: 'Automated Testing',
        description: 'Visual regression testing, accessibility testing, and component testing integrated into CI/CD pipeline.'
      }
    ],
    category: 'ui'
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
}; 