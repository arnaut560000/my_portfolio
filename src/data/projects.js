import outage from "../../screenshots/outage-management-system.png";
import apartment from "../../screenshots/apartment-management-system.png";
import documents from "../../screenshots/document-management-system.png";

export const projects = [
  {
    slug: "talavera-dental-scheduling",
    title: "Talavera E-dental Scheduling",
    category: "Government services",
    status: "Featured project",
    role: "Web development & maintenance",
    repository: "https://github.com/arnaut560000/Dental_scheduling",
    stack: ["Python", "Flask", "Supabase / PostgreSQL", "Render"],
    summary: "A public request form and staff scheduling workspace for Talavera’s free dental service.",
    problem: "Residents need a clear way to request dental assistance, while municipal staff need to organize requests, assign available clinic slots, and maintain a reliable history of appointments.",
    focus: "Separating public requests from staff operations, validating available slots and clinic capacity, and controlling staff access by role. PostgreSQL supports hosted storage, while Render hosts the Flask application.",
    workflow: [
      { title: "Request assistance", text: "Residents submit their details and privacy consent through the public form." },
      { title: "Organize the clinic day", text: "Staff review the oldest requests first and assign appointments within configured clinic days, time slots, and capacity." },
      { title: "Keep a traceable record", text: "Authorized staff track appointment history, review audit events, and export the daily schedule as CSV." }
    ],
    visual: { label: "A resident request, through to a clinic schedule", steps: ["Resident request", "Staff review", "Clinic appointment"], foundation: "Flask application · Supabase database · Render hosting" },
    evidence: ["Role-based staff access", "Configurable clinic schedule", "Appointment history & audit log", "Automated regression tests in the repository"],
    outcome: "The system connects online requests, staff scheduling, walk-in registration, and daily schedule exports in one municipal service workflow.",
    note: "The diagram explains the workflow; it contains no patient records. The linked source includes regression tests for scheduling, validation, staff permissions, and database migrations."
  },
  {
    slug: "osy-connect",
    title: "OSY Connect",
    category: "Offline desktop application",
    status: "Recent work",
    role: "Desktop application development",
    repository: "https://github.com/arnaut560000/capstone-client1",
    stack: ["Python", "Tkinter", "SQLite", "ReportLab"],
    summary: "An offline system for out-of-school youth records, printable ID cards, reports, and backups.",
    problem: "A records workflow should remain usable without an internet connection or a separate web server, from registration through reporting.",
    focus: "Building a native Python desktop interface over SQLite, with validated records, stable registration IDs, archive and restore, and portable backups containing the database and photos.",
    workflow: [
      { title: "Register and organize", text: "Capture personal, education, and employment information with validation and a persistent registration ID." },
      { title: "Find and maintain records", text: "Search and filter records, update profiles, and archive or restore entries without permanently removing them." },
      { title: "Print and preserve", text: "Generate PDF ID cards and reports, export CSV data, and create ZIP backups of local records and photos." }
    ],
    visual: { label: "Records that stay available offline", steps: ["Register", "Track locally", "Print & back up"], foundation: "Tkinter interface · Local SQLite storage · PDF & CSV exports" },
    evidence: ["Works without a web server", "Reversible archive & restore", "PDF IDs and filtered reports", "Tests for imports, backups, and record integrity"],
    outcome: "Registration, searchable profiles, printable outputs, and backups are available in one desktop application that can work offline.",
    note: "Records are stored locally on each machine. Multi-device synchronization is not included. The repository contains the application source and packaging instructions."
  },
  {
    slug: "outage-management-system",
    title: "Outage Management System",
    repository: "https://github.com/arnaut560000/outage_management",
    image: outage,
    category: "Monitoring & mapping",
    status: "Completed",
    stack: ["Python", "Flask", "Leaflet", "JavaScript", "KML / GPX", "XLSX"],
    summary: "Map service interruptions, trace affected areas, and review outage impact in one place.",
    problem: "Operational teams need to connect feeder-line maps, consumer information, and interruption records to understand the impact of an outage.",
    focus: "Connecting uploaded KML, GPX, and Excel data with a map-based workflow, including data validation and downstream affected-area detection.",
    workflow: [
      { title: "Bring in operational data", text: "Upload KML, GPX, and XLSX files and review validation reports." },
      { title: "Understand the affected area", text: "Use the interactive map and downstream detection to inspect affected areas and consumers." },
      { title: "Review interruption impact", text: "Inspect energy-loss estimates and interruption records for reporting." }
    ],
    outcome: "The system brings map exploration, validation reports, affected-consumer information, and interruption records into a single workflow.",
    note: "Energy-loss figures are estimates. This portfolio presents the system interface and functionality; it does not provide access to operational data."
  },
  {
    slug: "apartment-management-system",
    title: "Apartment Management System",
    repository: "https://github.com/arnaut560000/apartment-management-system",
    image: apartment,
    category: "Property operations",
    status: "Completed",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    summary: "Manage tenants, payments, apartment availability, and maintenance from one dashboard.",
    problem: "Property staff need a consistent view of tenants, unit occupancy, payments, and maintenance requests.",
    focus: "Organizing related property records into clear CRUD workflows with admin/staff login, dashboard analytics, and archived records.",
    workflow: [
      { title: "Organize units and tenants", text: "Manage tenant records and track apartment availability and occupancy." },
      { title: "Track day-to-day activity", text: "Monitor payment records and maintenance requests." },
      { title: "Review the property overview", text: "Use dashboard analytics and archived records to review operations." }
    ],
    outcome: "Tenant, unit, payment, and maintenance records can be managed from a shared property dashboard.",
    note: "The walkthrough shows the application interface. Tenant and payment records are not available through this portfolio."
  },
  {
    slug: "document-management-system",
    title: "Document Management System",
    repository: "https://github.com/arnaut560000/documents_management",
    image: documents,
    category: "Document workflows",
    status: "Prototype",
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
    summary: "Upload documents, track their status, and review a history of workflow updates.",
    problem: "Office users need to find documents and understand their current status without relying on repeated manual follow-ups.",
    focus: "Combining file uploads, searchable records, manual status updates, and status history in one department workflow.",
    workflow: [
      { title: "Create a document record", text: "Upload a file and keep its record within the application." },
      { title: "Track its progress", text: "Update the document status manually and review the history of changes." },
      { title: "Find and review records", text: "Use search and the analytics dashboard to locate documents and monitor workflow status." }
    ],
    outcome: "The prototype combines document uploads, search, status history, and an analytics dashboard.",
    note: "This project is a prototype. Status changes are entered manually; automated routing is not presented as a completed feature."
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
