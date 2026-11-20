export const processSteps = [
  {
    title: "Understand",
    status: "Delivered",
    text: "Stakeholder workshops and requirements analysis. Before any plan, I find out what the organisation actually needs and who it affects.",
    points: ["Stakeholder mapping", "Requirements workshops", "Business case"],
  },
  {
    title: "Plan",
    status: "Delivered",
    text: "A plan people can follow: scope, schedule, budget and resources, with a RAID register from day one so risks are visible early.",
    points: ["Project charter", "RAID register", "Budget and resources"],
  },
  {
    title: "Deliver",
    status: "On track",
    text: "Coordinating cross-functional teams and vendors, tracking performance and stepping in early when something starts to slip.",
    points: ["Performance tracking", "Escalation routes", "Vendor management"],
  },
  {
    title: "Test and hand over",
    status: "Not started",
    text: "User acceptance testing, training and structured handovers, because a system that nobody uses has not really been delivered.",
    points: ["User acceptance testing", "Training", "Implementation handover"],
  },
  {
    title: "Learn and improve",
    status: "Not started",
    text: "Post-implementation reviews and Plan-Do-Study-Act cycles turn every project into lessons for the next one.",
    points: ["Post-implementation review", "PDSA cycles", "Benefits tracking"],
  },
] as const;

export const pdsa = [
  {
    key: "Plan",
    title: "Plan",
    text: "Decide what to test and what good looks like. Write the scenarios real users will go through.",
    example: "For DOC Express: every farmer journey, from registration and enquiry to wallet top-up, checkout and tracking.",
  },
  {
    key: "Do",
    title: "Do",
    text: "Run the test with real people in real conditions and capture everything that happens.",
    example: "My test team worked through each flow and recorded every point of confusion with a screenshot.",
  },
  {
    key: "Study",
    title: "Study",
    text: "Look at the evidence. What worked, what broke, and what does the business actually need instead?",
    example: "Each finding was numbered with a clear expected result, and the development team answered item by item.",
  },
  {
    key: "Act",
    title: "Act",
    text: "Fix, adjust and agree the next change, then start the cycle again with what you learned.",
    example: "Round 1's 18 findings fed into Round 2's 35 requests: SMS alerts, ratings, refunds and live tracking.",
  },
];

export const raid = [
  {
    key: "R",
    title: "Risks",
    text: "Things that might go wrong. Each one gets an owner, a likelihood, an impact and a plan.",
    example: "\"Customers might order against past-date stock\" became a rule to block it.",
  },
  {
    key: "A",
    title: "Assumptions",
    text: "Things we are treating as true so we can move forward, written down so they can be checked.",
    example: "\"Farmers will register with a phone number, not always an email\" changed the password reset flow.",
  },
  {
    key: "I",
    title: "Issues",
    text: "Problems that are already happening. They need action now, not monitoring.",
    example: "Wallet balances not reducing after an order went straight to the top of the log.",
  },
  {
    key: "D",
    title: "Dependencies",
    text: "Things we are waiting on from other people or other work before we can finish.",
    example: "The iOS release depended on meeting Apple's App Store criteria.",
  },
];

export const glossary = [
  { term: "PRINCE2", meaning: "A structured project management method used widely in the UK. It breaks work into stages, with clear roles and decision points." },
  { term: "RAID register", meaning: "A live log of Risks, Assumptions, Issues and Dependencies, so nothing important lives only in someone's head." },
  { term: "UAT", meaning: "User acceptance testing. Real users try the system before launch to confirm it does what they need." },
  { term: "PDSA", meaning: "Plan, Do, Study, Act. A short improvement cycle used across the NHS to test changes safely." },
  { term: "Change control", meaning: "A simple agreed way to request, assess and approve changes, so scope doesn't creep quietly." },
  { term: "Stage gate", meaning: "A checkpoint where the team decides whether the project is ready to move to its next stage." },
  { term: "Handover", meaning: "Passing a finished system to the people who will run it, with training, documents and support." },
  { term: "Post-implementation review", meaning: "Looking back after launch: did we get the benefits we promised, and what will we do differently?" },
];

export const workingWithMe = [
  "Clear, honest status updates. If something is at risk, you will hear it from me first.",
  "Plans that people outside the project team can actually read.",
  "Shared accountability, where every voice is heard and no one is micromanaged.",
  "A steady focus on the result: the problem solved, not just the system installed.",
];
