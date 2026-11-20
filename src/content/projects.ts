import type { StaticImageData } from "next/image";
import { docExpressAdmin, docExpressApp } from "./images";

export type CoverKind = "doc-express" | "interpreter" | "records" | "governance" | "pmo" | "builds";

export type Metric = { value: string; label: string };
export type Step = { title: string; text: string };
export type Shot = { src: StaticImageData; alt: string; caption: string; group?: string };

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  client: string;
  sector: string;
  period: string;
  role: string;
  summary: string;
  cover: CoverKind;
  tone: "peach" | "mint" | "ivory";
  metrics: Metric[];
  challenge: string[];
  steps: Step[];
  outcomes: string[];
  tools: string[];
  quotes?: { text: string; context: string }[];
  links?: { label: string; href: string }[];
  rounds?: { name: string; when: string; count: string; items: string[] }[];
  appScreens?: Shot[];
  adminScreens?: Shot[];
  sites?: { name: string; place: string; company: string; detail: string }[];
};

const app = docExpressApp;
const admin = docExpressAdmin;

export const projects: Project[] = [
  {
    slug: "doc-express",
    title: "DOC Express",
    kicker: "Agri-tech ordering platform",
    client: "Amo Farm Sieberer Hatchery",
    sector: "Agri-tech · E-commerce",
    period: "Two testing rounds, live on Google Play",
    role: "Testing lead, requirements and change control",
    summary:
      "An online platform that lets poultry farmers order day-old chicks straight from the hatchery, pay from a wallet and choose a pickup point or farm delivery. I led the testing, turned what the business needed into clear product rules and managed every change with the development team.",
    cover: "doc-express",
    tone: "peach",
    metrics: [
      { value: "19,699", label: "Successful orders on the platform" },
      { value: "1,781", label: "Registered customers" },
      { value: "57", label: "Findings and change requests logged across two rounds" },
      { value: "4", label: "Connected modules: farmer app, driver app, hatchery and back office" },
    ],
    challenge: [
      "Farmers needed a simple way to order day-old chicks from the hatchery without phone calls, paper invoices or guesswork about stock and delivery.",
      "The platform had to handle wallet payments, fixed sale days, pickup points and farm delivery across different states, and still be easy for farmers with very different levels of reading and tech confidence.",
    ],
    steps: [
      {
        title: "Tested it like a farmer would",
        text: "I took my test team through every journey a real customer takes: registration, product enquiry, cart, wallet top-up, checkout and order tracking. Anything that confused them went straight into the log.",
      },
      {
        title: "Logged everything, item by item",
        text: "Each finding got a number, a screenshot and a clear expected result. The development team answered every item in writing, so nothing was lost between calls.",
      },
      {
        title: "Turned operations into product rules",
        text: "Chicks are only sold on Mondays and Thursdays, so only those dates should be clickable. Hatcheries sell breeds they don't own the names of, so duplicate product names had to be allowed. Addresses needed State, then LGA, then City or Location.",
      },
      {
        title: "Protected the money and the stock",
        text: "I pushed for orders to go through when the wallet balance exactly matches the order, for past-date orders to be blocked, for cart prices to refresh before checkout and for every item in a cart to share one pickup date.",
      },
      {
        title: "Planned what comes next",
        text: "SMS updates at four key moments (wallet top-up, driver assignment, dispatch and delivery), five-point ratings for product and driver, in-app support chat, live delivery tracking with an ETA, and delivery pricing ready for a new hatchery in Owerri.",
      },
    ],
    outcomes: [
      "The farmer app is live on Google Play and the back office is live, processing orders for the hatchery.",
      "The back-office dashboard shows 1,781 customers and 19,699 successful orders.",
      "Findings from both rounds were logged in writing, and the development team responded item by item.",
      "A clear roadmap for the next release, built from real operational needs rather than guesses.",
    ],
    tools: ["User acceptance testing", "Issue and change logs", "Requirements analysis", "Vendor management", "Stakeholder engagement"],
    quotes: [
      {
        text: "Hatcheries don't own the patent of the chicks they sell, so they have to always use either the name given by the patent owners or the common name of the product in the market.",
        context: "From my first-round test log, on why duplicate product names had to be allowed",
      },
      {
        text: "I think \"Available Products\" will identify with the customers more, given their assumed literacy level.",
        context: "From my test log, on naming the product search screen",
      },
    ],
    rounds: [
      {
        name: "Round 1",
        when: "App testing, feedback v1.1",
        count: "18 findings",
        items: [
          "Sign-up bug: a farmer could still log in after registration failed",
          "Allow duplicate product names across hatcheries",
          "Add a Local Government Area (LGA) field, pre-loaded by state",
          "Rename \"Pickup Delivery\" to \"Pickup Points\"",
          "Make only Mondays and Thursdays selectable",
          "Add a password confirmation field",
          "Show the right destination in the order summary",
          "Make Manage buttons edit existing cities and states",
        ],
      },
      {
        name: "Round 2",
        when: "Feedback and response, January 2025",
        count: "35 requests + 4 critical issues",
        items: [
          "Allow orders when the wallet balance equals the cart total",
          "Order notification emails to the support mailbox",
          "Block orders against past-date stock",
          "One pickup date for every item in a cart",
          "SMS alerts at four key moments of every order",
          "Ratings and comments for product and delivery",
          "A Finance role with a Refund Wallet button",
          "Fix cart, delivery fee and wallet deduction errors",
        ],
      },
    ],
    links: [{ label: "DOC Express on Google Play", href: "https://play.google.com/store/apps/details?id=com.itweaktech.docexpress" }],
    appScreens: [
      { src: app.onboarding1, alt: "DOC Express onboarding screen with a day-old chick", caption: "Onboarding", group: "Getting started" },
      { src: app.onboarding2, alt: "DOC Express onboarding screen, chicks in a brooder", caption: "Onboarding", group: "Getting started" },
      { src: app.onboarding3, alt: "DOC Express onboarding screen, close-up of a chick", caption: "Onboarding", group: "Getting started" },
      { src: app.signIn, alt: "DOC Express sign in screen", caption: "Sign in", group: "Getting started" },
      { src: app.registerFarmer, alt: "Register as a farmer screen", caption: "Register as a farmer", group: "Getting started" },
      { src: app.registerDetails, alt: "Registration details screen with business address and state", caption: "Registration details", group: "Getting started" },
      { src: app.dashboard, alt: "Farmer dashboard with wallet balance and quick access", caption: "Dashboard", group: "Ordering" },
      { src: app.inquiry, alt: "Product inquiry form with type, pickup date and quantity", caption: "Product enquiry", group: "Ordering" },
      { src: app.searchResults, alt: "Search results listing hatchery products", caption: "Search results", group: "Ordering" },
      { src: app.cart, alt: "Cart screen with product breakdown and total", caption: "Cart", group: "Ordering" },
      { src: app.orderSuccess, alt: "Order success screen, your package is on the way", caption: "Order placed", group: "Ordering" },
      { src: app.orderHistory, alt: "Order history list with statuses", caption: "Order history", group: "Tracking" },
      { src: app.orderDetails, alt: "Order details with tracking status timeline", caption: "Order tracking", group: "Tracking" },
      { src: app.rating, alt: "Rating screen asking the farmer to rate the order", caption: "Rating", group: "Tracking" },
      { src: app.wallet, alt: "Wallet screen with balance and transaction history", caption: "Wallet", group: "Wallet" },
      { src: app.fundWallet, alt: "Fund wallet by bank transfer or card", caption: "Fund wallet", group: "Wallet" },
      { src: app.account, alt: "Account menu with profile, password and contact options", caption: "Account", group: "Account and support" },
      { src: app.editProfile, alt: "Edit profile screen", caption: "Edit profile", group: "Account and support" },
      { src: app.changePassword, alt: "Change password screen", caption: "Change password", group: "Account and support" },
      { src: app.contactUs, alt: "Contact us form with query category", caption: "Contact us", group: "Account and support" },
      { src: app.logout, alt: "Logout confirmation dialog", caption: "Log out", group: "Account and support" },
    ],
    adminScreens: [
      { src: admin.adminDashboard, alt: "DOC Express back office dashboard showing 1,781 customers and 19,699 successful orders", caption: "Back-office dashboard: 1,781 customers, 19,699 successful orders" },
      { src: admin.adminOrders, alt: "Customers ordering list with hatchery, product and customer columns", caption: "Customer orders, filterable by date and exportable to Excel" },
      { src: admin.adminDeliveryStatus, alt: "Customer order delivery status table", caption: "Delivery status for every order" },
      { src: admin.adminDeliveryTracking, alt: "Order delivery tracking with assignment and acceptance times", caption: "Driver assignment and delivery tracking" },
      { src: admin.adminRefund, alt: "Initiate a refund form", caption: "Wallet refunds" },
      { src: admin.adminAddProduct, alt: "Add product form with sales date and category", caption: "Adding products and sale dates" },
      { src: admin.adminLogin, alt: "DOC Express admin login page", caption: "Back-office login" },
    ],
  },
  {
    slug: "interpreter-allocation",
    title: "Interpreter allocation and translation matching",
    kicker: "Healthcare access platform",
    client: "Healthcare client, delivered with Klipspringer",
    sector: "Healthcare · Digital transformation",
    period: "Dec 2025 – Jul 2026",
    role: "Digital Transformation Project Manager",
    summary:
      "Patients who don't speak English were waiting longer for care because matching them with the right interpreter took time. I led the development of a translation-matching platform and a real-time interpreter allocation system, and brought staff with us through the change.",
    cover: "interpreter",
    tone: "mint",
    metrics: [
      { value: "38%", label: "Shorter waiting times for non-English-speaking patients" },
      { value: "3,000+", label: "Patient interactions supported every month" },
      { value: "60%", label: "Increase in staff adoption" },
      { value: "30%", label: "Shorter delivery timelines" },
    ],
    challenge: [
      "When a patient needs an interpreter, every minute spent finding one is a minute added to their wait.",
      "Any new system also had to work with the legacy software staff already relied on, and meet healthcare standards from day one.",
    ],
    steps: [
      { title: "Led the platform build", text: "I spearheaded the development of a translation-matching platform that pairs patients with the right language support." },
      { title: "Made allocation real time", text: "We deployed a real-time interpreter allocation system so requests are matched as they come in, not hours later." },
      { title: "Connected old and new", text: "I optimised how the new software worked with legacy systems, which is what got staff using it. Adoption rose by 60%." },
      { title: "Kept everyone moving together", text: "I directed the cross-functional implementation, shortening delivery timelines by 30% while staying fully compliant with healthcare standards." },
    ],
    outcomes: [
      "Non-English-speaking patients now wait 38% less.",
      "Over 3,000 patient interactions a month run through the system.",
      "Staff adopted the new workflow because it fitted the tools they already used.",
    ],
    tools: ["Stakeholder workshops", "Workflow integration", "Implementation planning", "Healthcare compliance", "Change management"],
  },
  {
    slug: "records-migration",
    title: "Paper to digital records migration",
    kicker: "Data migration",
    client: "Healthcare client, delivered with Klipspringer",
    sector: "Healthcare · Data",
    period: "Dec 2025 – Jul 2026",
    role: "Digital Transformation Project Manager",
    summary:
      "A digital transformation that moved more than 25,000 paper files into electronic records across multiple departments, without losing a single one.",
    cover: "records",
    tone: "ivory",
    metrics: [
      { value: "25k+", label: "Files migrated from paper to electronic records" },
      { value: "0", label: "Records lost" },
      { value: "45%", label: "Faster transfer with the new migration framework" },
    ],
    challenge: [
      "Paper records are slow to find, easy to misfile and impossible to share safely between departments.",
      "Moving them meant protecting the integrity of every single file while day-to-day work carried on.",
    ],
    steps: [
      { title: "Designed the migration framework", text: "I engineered a structured framework for transferring records, which made the transfer 45% faster." },
      { title: "Protected data integrity", text: "Checks were built into the process so data stayed accurate and complete across every department involved." },
      { title: "Delivered it in full", text: "More than 25,000 files moved from paper to electronic systems, with zero data loss." },
    ],
    outcomes: ["25,000+ records are now digital and searchable.", "Not one file was lost in the move.", "Departments share one reliable source of records."],
    tools: ["Data migration", "Quality assurance", "Risk management", "Cross-department coordination"],
  },
  {
    slug: "delivery-governance",
    title: "Delivery governance and implementation",
    kicker: "Project governance",
    client: "Klipspringer Consulting",
    sector: "Consulting · Operations",
    period: "Aug 2026 – Present",
    role: "Project Delivery & Implementation Lead",
    summary:
      "Building the structure that keeps many projects on track at once: governance, RAID registers, escalation routes, testing and handovers, so teams see problems early and new systems actually get used.",
    cover: "governance",
    tone: "mint",
    metrics: [
      { value: "15+", label: "Projects delivered end to end" },
      { value: "95%", label: "On-time completion" },
      { value: "40%", label: "Better risk visibility" },
      { value: "98%", label: "Implementation readiness" },
    ],
    challenge: [
      "With several projects running at once, risks hide in inboxes and delays show up too late to fix cheaply.",
      "A system that is delivered but never adopted is not really delivered.",
    ],
    steps: [
      { title: "Put governance in place", text: "I instituted project governance, RAID registers and escalation frameworks, improving risk visibility by 40%." },
      { title: "Tracked performance and stepped in early", text: "Performance tracking and corrective interventions reduced project delays by 25%." },
      { title: "Ran workshops and testing", text: "Stakeholder workshops, requirements analysis and user acceptance testing brought implementation readiness to 98%." },
      { title: "Handed over properly", text: "Targeted training and structured handovers increased user adoption by 35%, and integrated workflows cut manual processing time by 30%." },
    ],
    outcomes: [
      "15+ projects delivered end to end, 95% of them on time.",
      "Delays down 25%, manual processing down 30%.",
      "Project outcomes aligned with the business goals they were meant to serve.",
    ],
    tools: ["PRINCE2", "RAID registers", "UAT", "Jira", "Confluence", "Power BI", "Microsoft Project"],
  },
  {
    slug: "pmo-standardisation",
    title: "PMO standardisation for a £2.5M portfolio",
    kicker: "Portfolio management",
    client: "Moon Rock Nigeria Limited",
    sector: "Corporate · Digital services",
    period: "Aug 2022 – Jun 2023 · Remote",
    role: "Digital Project Manager",
    summary:
      "Bringing consistent project management methods and tools to a portfolio worth more than £2.5 million a year, so projects were planned, documented and reported the same way every time.",
    cover: "pmo",
    tone: "peach",
    metrics: [
      { value: "£2.5M+", label: "Annual portfolio budget managed" },
      { value: "25%", label: "Fewer delivery delays" },
      { value: "50+", label: "Risks identified and resolved early" },
      { value: "30+", label: "Business-critical documents produced" },
    ],
    challenge: [
      "Every project was being run a little differently, which made delays hard to predict and budgets hard to control.",
    ],
    steps: [
      { title: "Standardised the PMO", text: "I introduced standard PMO methodologies and tools, which reduced delivery delays by 25%." },
      { title: "Got ahead of risk", text: "I identified and resolved more than 50 potential risks before they turned into delays or cost overruns." },
      { title: "Documented properly", text: "I produced 30+ business cases, project charters and post-implementation reviews." },
      { title: "Improved the service", text: "My proposed changes to service level agreements and policies contributed to a 30% rise in end-user satisfaction. My technology research also fed into the company's long-term IT strategy." },
    ],
    outcomes: ["Projects consistently met their objectives within budget.", "End-user satisfaction up 30%.", "A clearer, repeatable way of running projects."],
    tools: ["PMO frameworks", "Business cases", "Project charters", "Post-implementation reviews", "Microsoft Project"],
  },
  {
    slug: "healthcare-and-public-builds",
    title: "Healthcare and public infrastructure builds",
    kicker: "Construction and infrastructure",
    client: "Hunter and Cook · Moon Rock Nigeria · Solid Rock International",
    sector: "Construction · Public sector",
    period: "2020 – 2023",
    role: "Project Manager · Project Analyst",
    summary:
      "Before moving into digital transformation, I managed physical projects where safety, schedules and budgets are unforgiving: hospital networks, a neonatal care building and housing for service personnel.",
    cover: "builds",
    tone: "ivory",
    metrics: [
      { value: "0", label: "Accidents on site" },
      { value: "95%", label: "Adherence to project specifications" },
      { value: "20%", label: "Fewer construction delays" },
      { value: "50+", label: "People coordinated across teams" },
    ],
    challenge: [
      "Construction projects leave no room for vague plans. Delays cost money every day and safety is not negotiable.",
    ],
    steps: [
      { title: "Planned and scheduled", text: "Proactive scheduling and resource allocation reduced construction delays by 20%. Detailed project plans at Moon Rock contributed to a 10% reduction in project costs." },
      { title: "Kept people safe", text: "Robust safety protocols meant zero accidents or incidents during execution." },
      { title: "Checked quality on site", text: "Regular site inspections and quality checks kept work at 95% adherence to specifications." },
      { title: "Managed risk and cost remotely", text: "Risk assessments reduced project issues by 50%, and remote cost tracking cut expenses by 65% while keeping construction quality high." },
    ],
    outcomes: ["Every site delivered safely, with zero accidents.", "Delays and costs brought down through planning, not shortcuts."],
    tools: ["Scheduling", "Site inspections", "Safety protocols", "Cost tracking", "Risk assessment"],
    sites: [
      { name: "Network Design and Integration", place: "University of Maiduguri Teaching Hospital", company: "Hunter and Cook", detail: "Supervised, managed and monitored the capital project" },
      { name: "Dental Complex and Neonatal Care Building", place: "Maiduguri", company: "Moon Rock Nigeria", detail: "Oversaw execution, completed on time and within budget" },
      { name: "2 blocks of 6 × 2-bedroom officer quarters", place: "Maiduguri", company: "Moon Rock Nigeria", detail: "Managed construction with optimal resource use" },
      { name: "14-family barracks quarters", place: "Army Barracks, Aba, Abia State", company: "Solid Rock International", detail: "Analysed key metrics against project goals" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
