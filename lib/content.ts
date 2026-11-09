export const company = {
  name: "Limatel Nigeria Limited",
  short: "Limatel",
  tagline: "Building, connecting and maintaining telecommunications infrastructure",
  email: "limatelx@yahoo.com",
  website: "www.limatel.com.ng",
  rc: "460389",
  established: "1984",
  incorporated: "2002",
  formerName: "Limatel Enterprises",
  address: [
    "Block 7, Ebole Street, U-Turn B/Stop",
    "Jibowu Estate, Abule Egba",
    "Lagos State, Nigeria",
  ],
  phones: [
    { display: "0803 334 8441", tel: "+2348033348441" },
    { display: "0805 949 6166", tel: "+2348059496166" },
    { display: "0706 946 1005", tel: "+2347069461005" },
  ],
  banker: "Zenith Bank Plc",
  insurer: "Sovereign Trust Insurance Plc",
  leaders: [
    { name: "Mustapha Lola Alhaji", role: "Chairman and Chief Executive Officer" },
    { name: "Mustapha Babatunde Ahmed", role: "General Manager" },
  ],
  mission:
    "To design, deploy and maintain the cable routes telecommunications networks depend on. That is optical fibre, copper, coaxial and RF cable, the civil works around them, and the maintenance that puts a failed route back in service.",
  vision:
    "To be the infrastructure partner operators, public bodies and corporate sites rely on when a route has to be built, expanded or restored, and to keep that work reliable enough that the network stays in service.",
  positioning:
    "Limatel is a telecommunications infrastructure engineering, network deployment and maintenance partner. The company supports the development, expansion, operation and maintenance of telecom networks, from cable and civil works through testing, commissioning and field maintenance.",
  founderNote:
    "We founded Limatel with a clear purpose: to bridge the communication gap and connect people in a fast-paced and ever-evolving digital world.",
};

export const specialty = [
  "Construction of duct routes",
  "Laying of optical fibre cable",
  "Splicing, termination and testing",
  "Overhead and underground cable",
  "Complete external-line cable projects",
  "Earthing",
  "Supply of telecom materials",
];

export const controls = [
  {
    title: "Specification",
    text: "Each stage is checked against the client’s specification, approved drawings and method statement.",
  },
  {
    title: "Quality",
    text: "Inspections at defined stages of the work, with testing and commissioning written down before handover.",
  },
  {
    title: "Safety",
    text: "Health, safety and environmental practice, with field safety supervision while the ground is open.",
  },
  {
    title: "Programme",
    text: "Scheduling, work-front planning and progress monitoring, reported daily, weekly and monthly.",
  },
  {
    title: "Crew and materials",
    text: "Skilled technical manpower, site supervision, and control of materials, equipment and tools.",
  },
  {
    title: "Records",
    text: "Fault tracking, restoration notes and the handover record that closes the job.",
  },
];

export const nav = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/how-we-deliver", label: "How we deliver" },
  { href: "/sectors", label: "Sectors" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    id: "fibre",
    num: "01",
    title: "Optical fibre routes",
    text: "Underground, overhead and intercity fibre. Route surveys, ducting, trenching, blowing and pulling, jointing, splicing, OTDR and power testing, commissioning, diversion and restoration.",
    image: "/services/fibre.jpg",
    alt: "Crew laying fibre duct into a trench beside a laterite road",
  },
  {
    id: "copper",
    num: "02",
    title: "Copper, coaxial and RF",
    text: "Cable for telecom and CCTV, laid overhead or in the ground. Routing, termination, testing, replacement and the repair of routes that have already been in service.",
    image: "/services/copper.jpg",
    alt: "Drums of copper and coaxial cable beside a utility pole",
  },
  {
    id: "maintenance",
    num: "03",
    title: "Operations and maintenance",
    text: "Preventive rounds and emergency response for network operators. Fibre-cut detection, route and chamber inspection, fault tracking, escalation and the records that close a job.",
    image: "/services/maintenance.jpg",
    alt: "A technician restoring a fibre route at an open chamber",
  },
  {
    id: "cctv",
    num: "04",
    title: "CCTV and security cable",
    text: "Route planning and installation for security systems, using copper, coaxial and RF cable, then termination, connectivity testing and later rehabilitation.",
    image: "/services/cctv.jpg",
    alt: "Security camera with copper and coaxial cable on a concrete wall",
  },
  {
    id: "civil",
    num: "05",
    title: "Civil works for the route",
    text: "Trenching, excavation, HDPE duct, manholes, handholes and chambers, road crossings, backfill and reinstatement of the ground we open.",
    image: "/services/civil.jpg",
    alt: "An open telecom trench leading to a new concrete chamber",
  },
  {
    id: "expansion",
    num: "06",
    title: "New networks and expansion",
    text: "Greenfield routes and additions to live networks. Relocation, diversion, capacity work, testing and a documented handover.",
    image: "/services/expansion.jpg",
    alt: "A long cable route running beside a road at golden hour",
  },
];

export const testimonials = [
  {
    slot: "01",
    quote: "A sentence from a client about a fibre route we built will sit here.",
    name: "Client name",
    org: "Organisation",
  },
  {
    slot: "02",
    quote: "A sentence about a cut we restored, or a route we keep in service, will sit here.",
    name: "Client name",
    org: "Organisation",
  },
  {
    slot: "03",
    quote: "A sentence about civil works or a new network will sit here.",
    name: "Client name",
    org: "Organisation",
  },
];

export const stages = [
  {
    title: "Plan",
    text: "Scope review, mobilisation, method and the materials, equipment and logistics the route will need.",
  },
  {
    title: "Survey",
    text: "Technical site survey, route assessment and a check of crossings and what is already buried.",
  },
  {
    title: "Civil",
    text: "Trench, duct and build the chambers the cable will live in.",
  },
  {
    title: "Lay",
    text: "Blow or pull fibre, copper, coaxial and RF, overhead or underground.",
  },
  {
    title: "Prove",
    text: "Splice, test, commission, and hand over the acceptance documents with the route.",
  },
  {
    title: "Keep",
    text: "Preventive and corrective maintenance, fault restoration, progress reports and final handover.",
  },
];

export const sectors = [
  {
    title: "Network operators",
    text: "Mobile and fixed operators who need routes built, expanded or put back in service.",
  },
  {
    title: "Internet and broadband",
    text: "Providers whose customers depend on fibre that actually reaches them.",
  },
  {
    title: "Fibre infrastructure",
    text: "Companies whose business is the cable itself, over long and local routes.",
  },
  {
    title: "Security systems",
    text: "CCTV and electronic security teams who need a cable path, not a catalogue.",
  },
  {
    title: "Public works",
    text: "Government and public infrastructure projects with a telecom route inside them.",
  },
  {
    title: "Corporate sites",
    text: "Offices, campuses and institutions that need their own cable brought in and kept.",
  },
];
