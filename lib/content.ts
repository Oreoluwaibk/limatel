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
};

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
    text: "Scope, mobilisation, method and the materials the route will need.",
  },
  {
    title: "Survey",
    text: "Walk the ground. Check the route, the crossings and what is already buried.",
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
    text: "Splice, test, commission and hand over the records with the route.",
  },
  {
    title: "Keep",
    text: "Inspect, restore cuts, and report until the route is quiet again.",
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
