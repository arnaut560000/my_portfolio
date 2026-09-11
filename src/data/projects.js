import outage from "../../screenshots/outage-management-system.png";
import apartment from "../../screenshots/apartment-management-system.png";
import documents from "../../screenshots/document-management-system.png";

export const projects = [
  {
    slug: "outage-management-system",
    title: "Outage Management System",
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
