export const projectsData = [
  {
    id: "retailspoint-pos",
    title: "Retailspoint - Restaurant POS System",
    badge: "01 / PRODUCTION-FOCUSED",
    category: "Full-Stack Architecture",
    statusBadge: "Live: Startup Product",
    description: "A restaurant Point of Sale (POS) product built to streamline order management, billing, inventory tracking, and sales reporting. Developed collaboratively by Muhammad Sarfaraz and Hasan Tariq as a startup product with an offline-first desktop edition.",
    technologies: ["React.js", "Node.js", "Express.js", "SQL", "SQLite", "REST APIs", "Desktop Shell"],
    engineeringHighlights: [
      "Integrated POS workflows for restaurant operations, connecting front-of-house order taking with back-of-house kitchen processing.",
      "Engineered order management, billing, and Kitchen Order Ticket (KOT) workflows supporting dine-in, takeaway, and delivery.",
      "Implemented comprehensive inventory tracking, low-stock indicators, shift management, and cash drawer reconciliation.",
      "Built offline-first desktop functionality with local SQLite database storage (retailspoint.sqlite) ensuring zero operational downtime."
    ],
    liveUrl: "https://retailspoint.com",
    githubUrl: "https://retailspoint.com",
    isPlaceholder: false,
    mockupType: "pos",
    caseStudy: {
      collaborators: "Muhammad Sarfaraz & Hasan Tariq (Startup Collaboration)",
      website: "https://retailspoint.com",
      productCategory: "Restaurant Point of Sale (POS) Software",
      overview: "Retailspoint is a restaurant POS product designed to bring essential operational workflows into a centralized, easy-to-use system. Developed collaboratively by Muhammad Sarfaraz and Hasan Tariq as a startup product, it focuses on order processing, billing, kitchen order tickets (KOT), inventory tracking, shift management, and sales reporting. Its desktop edition is designed around an offline-first workflow, allowing supported operations to continue without an active internet connection.",
      problem: "Restaurants manage multiple interconnected operations daily: customer orders, billing, kitchen communication, inventory, and sales tracking. When these workflows are disconnected, staff face unnecessary manual friction, order delays, and cash discrepancies, while business owners struggle to maintain a clear view of daily operations without reliable internet connectivity.",
      solution: "Retailspoint provides a centralized, practical POS engineering solution that unifies front-of-house order taking with kitchen operations and back-office tracking. Its offline-first architecture allows orders, bills, and inventory updates to process locally with zero latency, syncing records and maintaining continuous operational reliability even when internet connectivity drops.",
      features: [
        "01. Order Management: Multi-channel ordering (dine-in, takeaway, delivery) with menu modifiers, item notes, and fast quantity adjustments",
        "02. Billing & Payments: Multi-tender payment processing, automated taxes, discount overrides, and instant receipt generation",
        "03. Kitchen Order Tickets (KOT): Asynchronous ticket dispatch directly to kitchen stations to bridge front-of-house and kitchen operations",
        "04. Table Management: Visual table status monitoring (vacant, occupied, reserved) with table-transfer and table-merging workflows",
        "05. Inventory Management: Real-time stock tracking, low-stock warning indicators, incoming stock ledger, and wastage logging",
        "06. Sales Reports & Analytics: Comprehensive daily sales summaries, category-wise breakdowns, shift audits, and revenue metrics",
        "07. Shift & Cash Management: Opening float records, cash-in/cash-out movements, and closing balance reconciliation with over/short reporting",
        "08. Staff & Access Management: Role-based staff authorization (cashier, kitchen, manager) with protected administrative controls",
        "09. Offline-First Desktop Operations: Local operational engine powered by SQLite ensuring uninterrupted POS workflows during internet outages"
      ],
      architecture: [
        { tier: "Desktop POS Client", tech: "React.js + Desktop Shell", role: "High-density touch POS interface, active order tickets, dynamic table layouts, and offline state dispatchers" },
        { tier: "Local Runtime Tier", tech: "Node.js + Express.js Engine", role: "Local embedded server handling KOT routing, ESC/POS thermal printing, and business logic validation" },
        { tier: "Local Relational Store", tech: "SQLite Engine (retailspoint.sqlite)", role: "ACID-compliant offline storage storing catalog, orders, shifts, and inventory with automated backups" },
        { tier: "Cloud Sync Gateway", tech: "REST APIs & Sync Workers", role: "Cloud telemetry sync, machine-associated license activation, remote reporting, and multi-branch updates" }
      ],
      databaseSchema: [
        { collection: "orders", fields: "id (PK), order_number, order_type (DineIn/Takeaway/Delivery), table_id, status, subtotal, tax, discount, total, created_at" },
        { collection: "order_items", fields: "id (PK), order_id (FK), item_id (FK), quantity, unit_price, notes, kot_status (Queued/Sent/Prepared)" },
        { collection: "menu_items", fields: "id (PK), name, category_id (FK), price, cost_price, barcode, is_available, track_inventory" },
        { collection: "tables", fields: "id (PK), table_number, capacity, floor_zone, status (Vacant/Occupied/Billed/Reserved)" },
        { collection: "inventory_items", fields: "id (PK), item_id (FK), stock_on_hand, min_alert_threshold, unit_of_measure, last_restocked_at" },
        { collection: "shifts_cash", fields: "id (PK), cashier_id, opening_float, cash_in, cash_out, closing_expected, closing_actual, difference, opened_at, closed_at" }
      ],
      apiEndpoints: [
        { method: "POST", path: "/api/pos/orders/create", desc: "Creates active order ticket, assigns table, and computes live pricing" },
        { method: "POST", path: "/api/pos/kot/dispatch", desc: "Sends pending order items to kitchen printers/displays and updates KOT flags" },
        { method: "POST", path: "/api/pos/billing/settle", desc: "Processes split/full payments, deducts inventory, and prints receipt" },
        { method: "GET", path: "/api/pos/tables/layout", desc: "Returns live floor zones, occupied tables, and dining duration" },
        { method: "POST", path: "/api/pos/shifts/close", desc: "Reconciles drawer cash balances and generates end-of-shift Z-Report" },
        { method: "GET", path: "/api/pos/reports/daily-sales", desc: "Aggregates revenue, tax collections, payment methods, and item velocity" }
      ],
      security: "Role-based staff workflows with authorized administrative controls, machine-associated monthly activation and renewal management, local SQLite database encryption and automated backups, and parameterized SQL queries preventing data corruption.",
      challenges: "Supporting seamless offline desktop operations in fast-paced restaurant environments where internet outages are common, while maintaining strict order integrity, KOT communication, and cash drawer accountability.",
      solutionApplied: "Architected an offline-first workflow utilizing a local SQLite database (retailspoint.sqlite) and local Node/Express runtime. Every transaction commits instantly to local storage with automated shift reconciliation and background synchronization upon network recovery.",
      futureImprovements: [
        "Kitchen Display System (KDS) interactive touchscreen tablet app with real-time cooking timers",
        "QR code tabletop digital menu ordering with direct POS ticket ingestion",
        "Cloud-based centralized multi-branch inventory tracking and franchise reporting portal",
        "Direct integration with online delivery aggregators for unified order streams"
      ]
    }
  },
  {
    id: "social-networking-platform",
    title: "Social Networking Platform",
    badge: "02 / FEATURED WEB APP",
    category: "Full-Stack Social Platform",
    statusBadge: "Active: Social Interactions",
    description: "A full-stack social networking platform built to deliver a dynamic, database-driven social experience with user profiles, media posts, reactions, comments, friendships, and notifications. Engineered with AJAX-powered interactions to keep core social actions responsive without requiring full-page reloads.",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "jQuery", "AJAX", "HTML5", "CSS3"],
    engineeringHighlights: [
      "Engineered a session-based authentication and user management system with PHP and MySQL, including profile data, avatars, posts, friendships, and user-specific content.",
      "Implemented AJAX-driven social interactions for likes, comments, friend requests, notifications, and post actions, enabling dynamic UI updates without full-page refreshes.",
      "Designed a relational MySQL data model connecting users, posts, comments, likes, friend requests, hidden posts, and notifications while maintaining user-specific feed behavior and access control."
    ],
    liveUrl: "https://connect-sphere.mrsarii.com",
    githubUrl: "https://github.com/themrsarii/connect-sphere",
    isPlaceholder: false,
    mockupType: "social",
    caseStudy: {
      overview: "A full-stack social networking platform built to deliver a dynamic, database-driven social experience with user profiles, media posts, reactions, comments, friendships, and notifications. Engineered with AJAX-powered interactions to keep core social actions responsive without requiring full-page reloads.",
      problem: "Traditional server-rendered web applications trigger disruptive full-page refreshes on everyday social interactions like liking a post, submitting a comment, or sending connection requests. This breaks scroll position, spikes server overhead, and compromises the modern reactive social experience.",
      solution: "Engineered a high-performance LAMP architecture pairing a robust PHP 8 and MySQL relational core with an asynchronous AJAX/jQuery frontend layer. Core actions (reactions, real-time comment threads, friend requests, and notifications) dispatch asynchronous JSON payloads with optimistic DOM updates, delivering native SPA responsiveness with zero page reloads.",
      features: [
        "Interactive Social Feed: Chronological stream with multimedia attachments, rich captions, and live engagement counters",
        "AJAX Micro-Interactions: Instant reaction toggles, dynamic comment posting, and friend request handling without full-page refreshes",
        "Relational Social Graph: Friend request lifecycle (send, accept, decline, remove) and mutual connection discovery",
        "Live Notification Center: Real-time notification polling delivering instant alerts for likes, comments, and connection requests",
        "Session Security & Profiles: Session-based user authentication, avatar management, and user privacy toggles",
        "Relational MySQL Engine: Indexed tables and foreign key constraints enforcing referential integrity across the social graph"
      ],
      architecture: [
        { tier: "Frontend UI", tech: "Bootstrap 5 + JavaScript / jQuery", role: "Responsive social dashboard layout, optimistic DOM updates, asynchronous AJAX dispatchers, and modal controllers" },
        { tier: "Application Tier", tech: "PHP 8 Backend Controllers", role: "Session authentication, form sanitization, business logic endpoints, media file processing, and JSON serialization" },
        { tier: "Data Access Layer", tech: "PDO (PHP Data Objects)", role: "Parameterized prepared statements preventing SQL injection, transaction handling, and connection management" },
        { tier: "Relational Store", tech: "MySQL 8.0 Database", role: "Normalized relational schemas with foreign key constraints, composite unique indexes, and sub-15ms feed queries" }
      ],
      databaseSchema: [
        { collection: "users", fields: "id (PK), username, email, password_hash, full_name, profile_pic, bio, created_at" },
        { collection: "posts", fields: "id (PK), user_id (FK), body, media_url, privacy, likes_count, comments_count, created_at" },
        { collection: "likes", fields: "id (PK), post_id (FK), user_id (FK), created_at | UNIQUE(post_id, user_id)" },
        { collection: "comments", fields: "id (PK), post_id (FK), user_id (FK), comment_text, created_at" },
        { collection: "friend_requests", fields: "id (PK), sender_id (FK), receiver_id (FK), status (pending/accepted/declined), created_at" },
        { collection: "notifications", fields: "id (PK), user_id (FK), sender_id (FK), type, reference_id, is_read, created_at" }
      ],
      apiEndpoints: [
        { method: "POST", path: "/api/auth/login.php", desc: "Validates credentials, verifies password hash, and starts PHP session" },
        { method: "GET", path: "/api/posts/feed.php", desc: "Paginated JSON list of network posts with current user reaction state" },
        { method: "POST", path: "/api/posts/create.php", desc: "Uploads media, validates caption, and inserts post via prepared statement" },
        { method: "POST", path: "/api/posts/like.php", desc: "Atomic AJAX toggle for like status returning updated counter" },
        { method: "POST", path: "/api/comments/add.php", desc: "Inserts comment and returns sanitized comment HTML fragment" },
        { method: "POST", path: "/api/friends/action.php", desc: "Sends, accepts, or declines friend requests asynchronously" }
      ],
      security: "Session fixation prevention using session_regenerate_id(), prepared statements via PDO to completely eliminate SQL injection, strict file upload MIME-type validation and server-side image re-encoding, and htmlspecialchars() sanitization preventing Cross-Site Scripting (XSS).",
      challenges: "Eliminating full-page reloads and maintaining responsive feed state when users rapidly interact with likes, comments, and connection requests across active sessions.",
      solutionApplied: "Designed modular AJAX controller endpoints returning lightweight JSON payloads coupled with client-side optimistic UI state updates and debounced notification polling, ensuring instantaneous UI feedback with automatic rollback on network failure.",
      futureImprovements: [
        "WebSocket integration via Ratchet for real-time instant direct messaging and live push notifications",
        "Redis caching layer for trending hashtags and frequently queried user profile sessions",
        "Cloud storage integration (AWS S3 / Cloudinary) for optimized media delivery and CDN caching"
      ]
    }
  },
  {
    id: "bilal-shahpur-foods",
    title: "Bilal Shahpur Foods",
    badge: "03 / FEATURED WEB APP",
    category: "Full-Stack Business Platform",
    statusBadge: "Live: Production",
    description: "A production-ready Urdu-first business platform designed to bring a traditional dairy brand online with product discovery, retailer partnerships, customer inquiries, and interactive product experiences. Built with a responsive React frontend and Express backend to provide a scalable foundation for managing products, retailers, contacts, and business data.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "REST API", "JavaScript", "MongoDB"],
    engineeringHighlights: [
      "Architected a reusable React.js component system with Vite and Tailwind CSS, creating responsive product showcases, interactive modals, navigation, partnership flows, and RTL-friendly Urdu interfaces.",
      "Engineered RESTful backend APIs with Node.js and Express.js for products, retailers, contact inquiries, and business statistics, connecting the frontend with structured application data.",
      "Deployed the complete production application with a responsive frontend and backend architecture, implementing business-focused workflows including product management, retailer partnership requests, and customer contact handling."
    ],
    liveUrl: "https://bsf.mrsarii.com",
    githubUrl: "https://github.com/themrsarii/bilal-shahpur-foods",
    isPlaceholder: false,
    mockupType: "food-business",
    caseStudy: {
      overview: "A production-ready Urdu-first business platform designed to bring a traditional dairy brand online with product discovery, retailer partnerships, customer inquiries, and interactive product experiences. Built with a responsive React frontend and Express backend to provide a scalable foundation for managing products, retailers, contacts, and business data.",
      problem: "Traditional FMCG and regional dairy producers rely heavily on informal manual phone calls, unorganized paper ledgers, and fragmented WhatsApp messages to distribute commercial freezers to retail shops and take product orders. This lacks centralized transparency, leads to missed retail leads, and restricts brand discovery among digital-first consumers.",
      solution: "Architected an Urdu-first full-stack web platform combining a high-performance React (Vite) storefront with an Express.js REST API. Built dedicated workflows for commercial shopkeepers (Freezer Partnership Scheme), customer inquiries, dynamic bilingual product catalogs, and an administrative control panel tracking retailer distribution and business growth.",
      features: [
        "Urdu-First & RTL Interface: Native Urdu typography and bidirectional layouts tailored for Pakistani retail shopkeepers and local consumers",
        "Commercial Freezer Partnership Engine: Specialized digital onboarding flow for retail stores applying for brand-sponsored commercial deep freezers",
        "Interactive Dairy Product Showcase: High-density interactive catalog featuring Desi Kulfi, Desi Ghee, Khoya, and Hand-churned Makhan with modal specifications",
        "Administrative Business Dashboard: Centralized portal monitoring retailer applications, inquiry statuses, product stock catalogs, and geographic coverage",
        "Direct Lead & Inquiry Dispatcher: Structured form capture routing dealer inquiries directly into database records with automated phone/email alerts"
      ],
      architecture: [
        { tier: "Client Storefront", tech: "React 19 + Vite + Tailwind CSS", role: "RTL-optimized UI, responsive product carousel modals, debounced retailer application forms, and admin interface" },
        { tier: "API Gateway", tech: "Express.js REST Router", role: "Input validation (Joi/Zod), rate-limiting for public inquiry forms, CORS policies, and administrative authentication" },
        { tier: "Runtime Engine", tech: "Node.js (v24 LTS)", role: "Asynchronous I/O handling high concurrency during marketing campaigns, payload sanitization, and alert dispatching" },
        { tier: "Database Layer", tech: "MongoDB + Mongoose", role: "Flexible document modeling for bilingual product catalogs, geo-tagged retailer shop profiles, and timestamped lead logs" }
      ],
      databaseSchema: [
        { collection: "Products", fields: "_id, nameUrdu, nameEnglish, category, packaging, wholesalePrice, retailPrice, image, inStock" },
        { collection: "RetailerPartners", fields: "_id, shopName, ownerName, city, district, phone, freezerRequested, status (Pending/Approved/Delivered)" },
        { collection: "Inquiries", fields: "_id, customerName, phone, message, inquiryType (Wholesale/Retail/General), status, createdAt" },
        { collection: "BusinessStats", fields: "_id, totalRetailers, freezersActive, monthlyVolumeKg, activeCities, updatedAt" }
      ],
      apiEndpoints: [
        { method: "GET", path: "/api/v1/products", desc: "Fetches active product catalog with bilingual names and specs" },
        { method: "POST", path: "/api/v1/retailers/apply", desc: "Submits new commercial freezer partnership application" },
        { method: "GET", path: "/api/v1/retailers", desc: "Admin-protected paginated list of retailer partner applications" },
        { method: "POST", path: "/api/v1/inquiries", desc: "Submits customer feedback or wholesale bulk order inquiry" },
        { method: "GET", path: "/api/v1/stats/overview", desc: "Computes active shop distribution and inventory KPIs" }
      ],
      security: "Sanitized form inputs to prevent NoSQL injection, strict CORS policies restricting API access to verified domains, rate-limiting on public partnership inquiry routes, and secure HTTP headers via Helmet.",
      challenges: "Designing an authentic Urdu-first interface that renders flawlessly across low-end mobile devices without breaking alignment or requiring heavy external font downloads that slow initial page load.",
      solutionApplied: "Engineered custom CSS fallback stacks blending localized typography with Tailwind CSS logical RTL properties, utilizing pre-optimized SVG assets and Vite code-splitting to maintain sub-1s First Contentful Paint.",
      futureImprovements: [
        "WhatsApp Business API webhook integration for instant automated retailer confirmation messages",
        "Interactive GPS store locator allowing consumers to find nearby Bilal Shahpur Kulfi retailer freezers",
        "Multi-warehouse cold-chain temperature telemetry tracking for deep freezer fleets"
      ]
    }
  },
  {
    id: "primelinks-business-website",
    title: "PrimeLinks - Business Website",
    badge: "04 / BUSINESS WEBSITE",
    category: "Web Development",
    statusBadge: "Client Project · Nasir",
    description: "A professionally designed business website created to establish a stronger digital presence for PrimeLinks, with a focus on modern presentation, user experience, and business-focused design. Developed by Muhammad Sarfaraz for client Nasir.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "HTML5", "CSS3", "Responsive UI/UX"],
    engineeringHighlights: [
      "Custom business website design crafted specifically for PrimeLinks to strengthen brand authority and customer engagement.",
      "Modern and responsive user interface ensuring optimal viewing and navigation across desktop, tablet, and mobile devices.",
      "Business-focused content presentation organizing services, value propositions, and corporate identity with clear visual hierarchy.",
      "Enhanced digital brand presence providing potential clients with accessible, intuitive consultation and inquiry touchpoints."
    ],
    liveUrl: "https://primelinks.mrsarii.com",
    githubUrl: "https://github.com/themrsarii",
    isPlaceholder: false,
    mockupType: "primelinks",
    caseStudy: {
      client: "Nasir",
      developer: "Muhammad Sarfaraz",
      projectType: "Business Website · Web Development · UI/UX Design",
      collaborators: "Client: Nasir • Developed by Muhammad Sarfaraz",
      productCategory: "Corporate Business Website",
      overview: "PrimeLinks is a business website developed to give the business a dedicated online presence through a professionally presented platform. Initiated proactively to demonstrate how a dedicated website could support the business's digital presence, the project provides visitors with an accessible, high-credibility way to explore services, value propositions, and contact touchpoints online.",
      problem: "Businesses need a professional digital presence to introduce their services, communicate their value clearly, and make information easily accessible to potential clients. Without a dedicated modern website, businesses miss out on client discovery, customer trust, and clear communication of their service offerings.",
      solution: "PrimeLinks was engineered as a high-performance business website with a clean visual hierarchy, modern UI/UX design, and mobile-first responsiveness. Built using React and Tailwind CSS, the platform organizes business services into structured, intuitive layouts with clear call-to-actions, elevating the brand's digital presence and client accessibility.",
      features: [
        "01. Professional Brand Showcase: Clean visual hierarchy with hero introduction, value proposition, and brand identity",
        "02. Service & Solutions Catalog: Structured presentation of business offerings with comprehensive service breakdowns",
        "03. Modern & Responsive Layout: Mobile-first interface engineered for flawless presentation across all screen sizes",
        "04. Client Inquiry Touchpoints: Accessible consultation request workflows and direct communication channels",
        "05. Business-Focused UX: Intuitive navigation structure guiding potential clients from discovery to engagement",
        "06. Optimized Web Performance: Clean component architecture with fast load times and accessible semantic HTML5"
      ],
      architecture: [
        { tier: "Frontend Client", tech: "React 19 + Vite", role: "Component-driven responsive interface, modular layout sections, and dynamic state management" },
        { tier: "Styling & Design System", tech: "Tailwind CSS + Custom Palette", role: "Design tokens, responsive utility classes, brand visual hierarchy, and accessible typography scale" },
        { tier: "Client Gateway", tech: "RESTful Contact / Inquiry API", role: "Inquiry input sanitization, form validation, and automated client message routing" },
        { tier: "Edge Delivery", tech: "Vercel / Cloud CDN", role: "Global edge caching, asset compression, SSL encryption, and high-availability static serving" }
      ],
      databaseSchema: [
        { collection: "BusinessServices", fields: "id (PK), title, slug, summary, icon, features_list, is_featured, display_order" },
        { collection: "ClientInquiries", fields: "id (PK), client_name, email, phone, company, message, status (New/Reviewed), created_at" },
        { collection: "CompanyProfile", fields: "id (PK), company_name, client_lead, tagline, contact_email, phone, address, social_links" }
      ],
      apiEndpoints: [
        { method: "GET", path: "/api/content/services", desc: "Retrieves list of active business services and capabilities" },
        { method: "POST", path: "/api/contact/inquire", desc: "Submits client inquiry with field validation and notification dispatch" },
        { method: "GET", path: "/api/company/profile", desc: "Fetches official business information and contact metadata" }
      ],
      security: "Form input sanitization preventing Cross-Site Scripting (XSS), rate-limiting on inquiry submissions to protect against spam, strict Content Security Policy (CSP), and HTTPS/TLS encryption across all client interactions.",
      challenges: "Translating business requirements into an engaging, modern digital presence that communicates commercial value immediately without overwhelming first-time visitors.",
      solutionApplied: "Designed a clean, content-first layout using Tailwind CSS utility-first styling and reusable React components, establishing a strong visual hierarchy that naturally guides visitors to learn about services and initiate contact.",
      futureImprovements: [
        "Interactive client testimonial carousel and portfolio case studies",
        "Direct WhatsApp Business / live chat integration for real-time customer inquiries",
        "Multi-language support for regional and international business expansion",
        "Headless CMS integration allowing client administrators to update service listings"
      ]
    }
  }
];
