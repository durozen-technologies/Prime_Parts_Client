export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  yearOrEvent: string;
  highlights: string[];
  recipientOrLocation: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemsCount: string;
  features: string[];
}

export interface FeaturedProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  badge: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span: 'col-span-1 row-span-1' | 'col-span-1 row-span-2' | 'col-span-2 row-span-2' | 'col-span-2 row-span-1';
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  videoSrc: string;
  description: string;
}

export interface IndustryItem {
  title: string;
  tagline: string;
  description: string;
  image: string;
  applications: string[];
}

export const COMPANY_DATA = {
  name: "PRIME PARTS",
  logo: "/images/logo.png",
  tagline: "The Prime Choice for the Right Part",
  subtext: "Leading supplier and distributor of precision automotive spare parts, commercial fleet components, and heavy-duty industrial engineering solutions.",
  
  contactInfo: {
    phone: "+91 98765 43210",
    phoneSecondary: "+91 87654 32109",
    email: "contact@primeparts.in",
    salesEmail: "sales@primeparts.in",
    address: "Prime Parts Logistics & Warehouse Hub, Sector 18, Industrial Area, Phase II",
    city: "New Delhi / NCR, India",
    workingHours: "Monday - Saturday: 09:00 AM - 07:00 PM (IST)",
    gstin: "07AAAAA0000A1Z5",
    whatsappNumber: "919876543210",
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Awards", href: "#awards" },
    { label: "Featured", href: "#featured" },
    { label: "Tour", href: "#video-tour" },
    { label: "Advantages", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "THE PRIME CHOICE FOR THE RIGHT PART",
    titlePrimary: "PRIME PARTS",
    titleSecondary: "Powering Performance. Built for Reliability.",
    description: "Your trusted distribution partner for high-precision OEM and aftermarket automotive spare parts, fleet overhaul components, and industrial mechanical assemblies.",
    videoSrc: "/videos/prime-parts-hero.mp4",
    fallbackPoster: "/images/part-01.jpg",
    ctaPrimary: "Explore Awards & Network",
    ctaSecondary: "Get in Touch",
  },

  about: {
    badge: "ABOUT PRIME PARTS",
    heading: "Engineered for Excellence, Driven by Trust",
    description: "Prime Parts stands at the forefront of the automotive spare parts supply chain. Combining an extensive ready-stock warehouse network with stringent quality verification, we empower workshops, fleet operators, and industrial enterprises with zero-downtime reliability.",
    keyPoints: [
      {
        title: "Rigorous Quality Certification",
        text: "Every component is verified against OEM benchmarks for tolerance, thermal resilience, and cycle endurance."
      },
      {
        title: "Massive Ready Inventory",
        text: "Direct warehousing infrastructure ensuring swift fulfillment across engine, brake, suspension, and body lines."
      },
      {
        title: "Dedicated B2B & Fleet Support",
        text: "Specialized account managers and rapid dispatch logistics for retail counters, workshops, and transit fleets."
      }
    ],
    imageMain: "/images/tvs-warehouse-bg.jpg",
    imageSecondary: "/images/part-05.jpg",
    experienceYears: "15+",
  },

  stats: [
    {
      value: "15+",
      numericValue: 15,
      suffix: "+",
      label: "Years of Industry Leadership",
      description: "Delivering unmatched automotive parts distribution across regional hubs"
    },
    {
      value: "5,000+",
      numericValue: 5000,
      suffix: "+",
      label: "Active Part Numbers (SKUs)",
      description: "From critical engine assemblies to fast-moving electricals & filters"
    },
    {
      value: "1,200+",
      numericValue: 1200,
      suffix: "+",
      label: "Wholesale & Workshop Clients",
      description: "Trusted by top service chains, fleet hubs, and regional dealers"
    },
    {
      value: "99.4%",
      numericValue: 99.4,
      suffix: "%",
      label: "On-Time Dispatch Rate",
      description: "Rapid warehouse processing with dedicated logistics partners"
    },
  ],

  // Awards, Rewards & Recognition Showcase
  awards: [
    {
      id: "award-1",
      title: "Retailer of the Year - Grand Felicitation",
      category: "retailer-year",
      categoryLabel: "Retailer of the Year",
      tagline: "Distinguished Excellence",
      description: "Honoring our star retail counters for exceptional sales milestones, unyielding market trust, and extraordinary distribution achievements.",
      image: "/images/part-09.jpg",
      badge: "★ Gold Trophy Winner",
      yearOrEvent: "Annual Dealer Convention",
      highlights: ["Grand Trophy Handover", "Top Sales Volume", "Certified Partner of the Year"],
      recipientOrLocation: "Grand Felicitation Stage"
    },
    {
      id: "award-2",
      title: "Annual Retailers & Dealers Meet",
      category: "annual-meet",
      categoryLabel: "Annual Meets",
      tagline: "Strengthening Partnerships",
      description: "A prestigious convention bringing together hundreds of retail owners and distributors to celebrate collective growth and reveal new product roadmaps.",
      image: "/images/part-07.jpg",
      badge: "Dealer Summit",
      yearOrEvent: "Wayfarer Inn Convention",
      highlights: ["500+ Channel Partners", "Strategic Growth Vision", "Special Partner Privileges"],
      recipientOrLocation: "Wayfarer Grand Convention Hall"
    },
    {
      id: "award-3",
      title: "Outstanding Performance & Star Achiever Trophy",
      category: "performance",
      categoryLabel: "Performance Awards",
      tagline: "Milestone Benchmark",
      description: "Special honours presented to regional dealers who outperformed quarterly targets and established record-setting turnaround times.",
      image: "/images/part-10.jpg",
      badge: "Star Performer Award",
      yearOrEvent: "Excellence Night",
      highlights: ["Honorary Shield & Cup", "Record Dispatch Volume", "Zero-Defect Order Rate"],
      recipientOrLocation: "Annual Award Banquet"
    },
    {
      id: "award-4",
      title: "Proud Partner Retailers Welcome Ceremony",
      category: "annual-meet",
      categoryLabel: "Annual Meets",
      tagline: "Milestone Alliances",
      description: "Welcoming our esteemed network of auto parts retailers, stockists, and workshop partners at the signature dealer engagement forum.",
      image: "/images/part-05.jpg",
      badge: "Partner Welcome Gala",
      yearOrEvent: "Dealer Engagement Forum",
      highlights: ["Network Expansion", "Executive Welcome Arch", "Dealer Loyalty Honors"],
      recipientOrLocation: "Convention Welcome Pavillion"
    },
    {
      id: "award-5",
      title: "Distributor Leadership & Star Partner Honors",
      category: "distributor-honor",
      categoryLabel: "Distributor Honors",
      tagline: "Visionary Leadership",
      description: "Recognizing visionary retail leadership and pioneering distribution benchmarks across regional automotive hubs.",
      image: "/images/part-06.jpg",
      badge: "Leadership Crest",
      yearOrEvent: "Leadership Conclave",
      highlights: ["Leadership Shield", "Long-Term Association", "Excellence in Distribution"],
      recipientOrLocation: "Executive Leadership Stage"
    },
    {
      id: "award-6",
      title: "Regional Retailers Assembly & Grand Gathering",
      category: "felicitation",
      categoryLabel: "Felicitations",
      tagline: "Collaborative Triumph",
      description: "Capturing the proud gathering of key automotive retail stalwarts, workshop managers, and logistics partners united for excellence.",
      image: "/images/part-08.jpg",
      badge: "Pan-India Gathering",
      yearOrEvent: "Regional Summit",
      highlights: ["Full Delegation Meet", "Knowledge Exchange", "Exclusive Partner Rewards"],
      recipientOrLocation: "Grand Convention Banquet"
    },
    {
      id: "award-7",
      title: "Operations & Hub Team Excellence Felicitation",
      category: "felicitation",
      categoryLabel: "Felicitations",
      tagline: "Backbone of Reliability",
      description: "Celebrating the dedication of our warehouse logistics team, audit technicians, and inventory specialists maintaining highest standards.",
      image: "/images/part-04.jpg",
      badge: "Operations Pride",
      yearOrEvent: "Hub Recognition Day",
      highlights: ["Dedicated Fleet Team", "Zero-Downtime Logistics", "Commitment to Quality"],
      recipientOrLocation: "Central Distribution Centre"
    },
    {
      id: "award-8",
      title: "Authorized TVS & Prime Distribution Hub",
      category: "distributor-honor",
      categoryLabel: "Distributor Honors",
      tagline: "Genuine Quality Benchmark",
      description: "Milestone celebration of our authorized distribution depot, ensuring genuine parts supply and trusted after-sales reliability.",
      image: "/images/part-03.jpg",
      badge: "Authorized Facility",
      yearOrEvent: "Depot Milestone",
      highlights: ["Certified Genuine Spares", "Direct Factory Supply", "Rapid Regional Logistics"],
      recipientOrLocation: "Authorized Distribution Facility"
    }
  ],

  categories: [
    {
      id: "engine",
      name: "Engine & Powertrain",
      tagline: "Core Performance Assemblies",
      description: "Cylinder heads, pistons, camshafts, crankshafts, gasket sets, timing components, and valve mechanisms.",
      image: "/images/part-19.jpg",
      itemsCount: "850+ SKUs",
      features: ["OEM Tolerances", "Heat Treated Alloys", "Micro-tested Seals"]
    },
    {
      id: "brakes",
      name: "Braking Systems",
      tagline: "Uncompromising Stopping Power",
      description: "Heavy-duty brake pads, rotors, drums, master cylinders, caliper assemblies, and ceramic friction kits.",
      image: "/images/part-21.jpg",
      itemsCount: "420+ SKUs",
      features: ["High Friction Coeff.", "Fade Resistant", "Low Dust Compound"]
    },
    {
      id: "suspension",
      name: "Suspension & Steering",
      tagline: "Maximum Stability & Control",
      description: "Shock absorbers, control arms, tie rod ends, stabilizer links, bush kits, and power steering racks.",
      image: "/images/part-24.jpg",
      itemsCount: "620+ SKUs",
      features: ["Nitrogen Charged", "Reinforced Ball Joints", "Anti-Vibration Rubber"]
    },
    {
      id: "electrical",
      name: "Electricals & Sensors",
      tagline: "Precision Signal & Power Delivery",
      description: "Alternators, starter motors, ignition coils, Lambda sensors, ECU relays, and high-conductivity harness sets.",
      image: "/images/part-23.jpg",
      itemsCount: "580+ SKUs",
      features: ["Surge Protected", "Gold-plated Pins", "Direct Fit Harness"]
    },
    {
      id: "transmission",
      name: "Clutch & Transmission",
      tagline: "Smooth Torque Transfer",
      description: "Clutch plates, pressure plates, release bearings, flywheel kits, synchronizer rings, and gear sets.",
      image: "/images/part-20.jpg",
      itemsCount: "340+ SKUs",
      features: ["High-Torque Friction", "Pre-balanced Assemblies", "Durable Hubs"]
    },
    {
      id: "filters",
      name: "Filtration & Fluids",
      tagline: "Clean Systems, Long Engine Life",
      description: "High-efficiency oil filters, air intake filters, cabin pollen filters, fuel separators, and hydraulic strainers.",
      image: "/images/part-27.jpg",
      itemsCount: "290+ SKUs",
      features: ["Micron Synthetic Media", "Leakproof Canisters", "High Flow Rate"]
    },
    {
      id: "cooling",
      name: "Cooling & Climate",
      tagline: "Optimal Thermal Management",
      description: "Aluminium core radiators, intercoolers, water pumps, thermostats, condenser coils, and blower fans.",
      image: "/images/part-30.jpg",
      itemsCount: "310+ SKUs",
      features: ["Anti-corrosive Alloy", "Pressure Tested", "Optimal Heat Transfer"]
    },
    {
      id: "body",
      name: "Body & Lighting",
      tagline: "Structural & Aesthetic Perfection",
      description: "LED/Halogen headlamp units, tail lights, bumper reinforcements, side mirrors, and exterior trim hardware.",
      image: "/images/part-31.jpg",
      itemsCount: "460+ SKUs",
      features: ["Impact Resistant ABS", "UV Protected Lenses", "Precise Alignment"]
    }
  ],

  featuredProducts: [
    {
      id: "fp-1",
      name: "High-Tension Heavy-Duty Powertrain Assemblies",
      subtitle: "PRECISION ENGINEERED",
      description: "Built with hardened alloy forgings and state-of-the-art micro-finishing to handle extreme thermal stress and high RPM cycles without material degradation.",
      image: "/images/part-12.jpg",
      badge: "Flagship Quality",
      specs: [
        { label: "Material Grade", value: "Chromoly Forged Steel" },
        { label: "Thermal Tolerance", value: "Up to 850°C" },
        { label: "Certification", value: "ISO/TS 16949 Compliant" },
        { label: "Warranty", value: "24-Month / 50k KM Standard" },
      ]
    },
    {
      id: "fp-2",
      name: "Reinforced Anti-Wear Hydraulic Brake Calipers & Pads",
      subtitle: "SAFETY CRITICAL",
      description: "Constructed with advanced semi-metallic and ceramic formulations that deliver instant pedal bite, zero brake fade, and long friction disc longevity.",
      image: "/images/part-13.jpg",
      badge: "Commercial Grade",
      specs: [
        { label: "Compound", value: "Carbon-Ceramic Matrix" },
        { label: "Operating Temp", value: "-40°C to 650°C" },
        { label: "Noise Rating", value: "< 55 dB Acoustic Dampened" },
        { label: "Durability", value: "Tested for 80,000+ Cycles" },
      ]
    },
    {
      id: "fp-3",
      name: "Mono-Tube Nitrogen Suspension & Damping Units",
      subtitle: "RIDE CONTROL DYNAMICS",
      description: "Precision-valved shock absorber struts engineered for rugged road conditions, delivering responsive damping and superior chassis stability under heavy loads.",
      image: "/images/part-14.jpg",
      badge: "Heavy Duty",
      specs: [
        { label: "Gas Type", value: "High-Pressure Nitrogen" },
        { label: "Piston Rod", value: "Micro-cracked Hard Chrome" },
        { label: "Fluid", value: "All-Weather Synthetic Oil" },
        { label: "Fitment", value: "Direct OEM Replacement" },
      ]
    }
  ],

  videoSection: {
    badge: "FACILITY & OPERATIONS",
    heading: "Inside Prime Parts",
    subheading: "Driven by Quality. Built for Performance.",
    description: "Take an exclusive look inside our modern central warehousing hub, automated inventory racking systems, and precision quality-testing facility.",
    videoSrc: "/videos/prime-parts-hero.mp4",
    poster: "/images/part-15.jpg",
  },

  videoGallery: [
    {
      id: "vg-1",
      title: "Warehouse Logistics & Stock Racking Tour",
      subtitle: "Automated Parts Sorting & Inventory Management",
      duration: "Full Video Tour",
      thumbnail: "/images/part-16.jpg",
      videoSrc: "/videos/prime-parts-hero.mp4",
      description: "A comprehensive look at our high-capacity warehouse operations, stock cataloging, and daily dispatch pipeline."
    },
    {
      id: "vg-2",
      title: "Quality Testing & Tolerance Verification",
      subtitle: "Bench Testing Engine & Electrical Units",
      duration: "Quality Spotlight",
      thumbnail: "/images/part-17.jpg",
      videoSrc: "/videos/prime-parts-hero.mp4",
      description: "How our technician team verifies every batch before packaging and regional dispatch."
    },
    {
      id: "vg-3",
      title: "Bulk Packaging & Safe Freight Handling",
      subtitle: "Damage-Proof Shipping Protocols",
      duration: "Operations",
      thumbnail: "/images/part-18.jpg",
      videoSrc: "/videos/prime-parts-hero.mp4",
      description: "Ensuring every sensitive component and heavy metal assembly arrives pristine at your doorstep."
    }
  ],

  whyChooseUs: [
    {
      icon: "ShieldCheck",
      title: "Uncompromising Quality Assurance",
      description: "Every part undergoes multi-point inspection to ensure exact fitment, zero defects, and full compliance with OEM tolerances.",
      highlight: "100% Tested Batches"
    },
    {
      icon: "PackageCheck",
      title: "Vast Ready Inventory",
      description: "Thousands of critical part numbers kept in active ready-stock to minimize workshop waiting times and vehicle downtime.",
      highlight: "5,000+ Active SKUs"
    },
    {
      icon: "TrendingUp",
      title: "Competitive Wholesale Pricing",
      description: "Direct-from-source distribution model gives our dealers and fleet partners industry-leading margins and pricing consistency.",
      highlight: "Direct Tier-1 Pricing"
    },
    {
      icon: "Truck",
      title: "Rapid Dispatch Logistics",
      description: "Same-day order processing and prioritized express freight partnerships covering metropolitan and regional hubs.",
      highlight: "24-48h Delivery"
    },
    {
      icon: "Cpu",
      title: "Technical Fitment Guidance",
      description: "Expert parts specialists to assist in cross-referencing OEM numbers, model variants, and engineering compatibility.",
      highlight: "Expert Support Team"
    },
    {
      icon: "Award",
      title: "Trusted Industry Reputation",
      description: "Over a decade of established credibility serving mechanics, logistics corporations, and auto retailers nationwide.",
      highlight: "1,200+ Loyal Clients"
    }
  ],

  // Masonry gallery highlighting actual events, awards & facility photos
  gallery: [
    { id: 1, title: "Grand Retailer of the Year Trophy Handover", category: "Awards", image: "/images/part-09.jpg", span: "col-span-2 row-span-2" },
    { id: 2, title: "Annual Retailers & Dealers Meet Reception", category: "Conferences", image: "/images/part-07.jpg", span: "col-span-1 row-span-1" },
    { id: 3, title: "Star Performer Award Ceremony", category: "Awards", image: "/images/part-10.jpg", span: "col-span-1 row-span-1" },
    { id: 4, title: "Prime Parts Central Distribution Hub & Godown", category: "Facility", image: "/images/part-01.jpg", span: "col-span-1 row-span-2" },
    { id: 5, title: "Distributor Leadership & Star Partner Honors", category: "Felicitations", image: "/images/part-06.jpg", span: "col-span-1 row-span-1" },
    { id: 6, title: "Regional Retailers Grand Assembly & Hall", category: "Conferences", image: "/images/part-08.jpg", span: "col-span-2 row-span-1" },
    { id: 7, title: "Proud Partner Welcome Arch & Delegates", category: "Retailer Meets", image: "/images/part-05.jpg", span: "col-span-1 row-span-1" },
    { id: 8, title: "Ground Operations & Warehouse Team", category: "Operations", image: "/images/part-04.jpg", span: "col-span-1 row-span-1" },
    { id: 9, title: "Authorized Depot & Fleet Logistics Hub", category: "Facility", image: "/images/part-03.jpg", span: "col-span-1 row-span-1" },
    { id: 10, title: "Executive Retail Partner Recognition Shield", category: "Awards", image: "/images/part-11.jpg", span: "col-span-2 row-span-1" },
    { id: 11, title: "Dealer Engagement Forum & Discussions", category: "Retailer Meets", image: "/images/part-12.jpg", span: "col-span-1 row-span-2" },
    { id: 12, title: "Distinguished Retailer Felicitation Night", category: "Felicitations", image: "/images/part-13.jpg", span: "col-span-1 row-span-1" },
    { id: 13, title: "Annual Conference Networking & Banquet", category: "Conferences", image: "/images/part-14.jpg", span: "col-span-1 row-span-1" },
    { id: 14, title: "High-Volume Distributor Shield Presentation", category: "Awards", image: "/images/part-15.jpg", span: "col-span-1 row-span-1" },
    { id: 15, title: "Central Warehouse Dispatch & Sorting Bay", category: "Operations", image: "/images/part-16.jpg", span: "col-span-1 row-span-1" },
    { id: 16, title: "Prime Parts & TVS Alliance Celebration", category: "Felicitations", image: "/images/part-17.jpg", span: "col-span-2 row-span-2" },
  ],

  industries: [
    {
      title: "Passenger Automobiles",
      tagline: "Hatchbacks, Sedans & Premium SUVs",
      description: "Extensive catalogue of fast-moving maintenance consumables, braking setups, and engine sensors for all leading domestic and international car brands.",
      image: "/images/part-35.jpg",
      applications: ["OEM replacement parts", "Periodic service kits", "Electronic sensors", "Chassis components"]
    },
    {
      title: "Commercial Fleet & Logistics",
      tagline: "Light Commercial Vehicles & Vans",
      description: "Heavy-duty wear-resistant parts engineered to keep commercial transit fleets on the road with minimal downtime and maximum fuel efficiency.",
      image: "/images/part-36.jpg",
      applications: ["Fleet maintenance bulk supply", "Heavy clutch plates", "Suspension leaf & bushings", "Cooling systems"]
    },
    {
      title: "Heavy Commercial Vehicles (HCV)",
      tagline: "Multi-Axle Trucks & Transit Buses",
      description: "High-torque transmission gears, pneumatic air-brake valves, heavy axle shafts, and rugged kingpin sets for tough long-haul routes.",
      image: "/images/part-37.jpg",
      applications: ["Air brake valves & boosters", "Heavy flywheel assemblies", "Steering gear boxes", "Multi-stage filtration"]
    },
    {
      title: "Industrial & Agricultural Equipment",
      tagline: "Tractors, Generators & Heavy Machinery",
      description: "Robust hydraulic cylinders, heavy mechanical pumps, drive belts, and specialized filtration components for off-highway applications.",
      image: "/images/part-38.jpg",
      applications: ["Hydraulic pumps & hoses", "High-capacity radiators", "Industrial diesel filters", "Mechanical seals"]
    }
  ],

  cta: {
    heading: "Looking for Reliable Automotive Spare Parts?",
    subheading: "Partner with Prime Parts for guaranteed genuine quality, wholesale pricing, and swift pan-India dispatch.",
    primaryButton: "Request a Quote",
    secondaryButton: "Download Product Catalog",
    imageBg: "/images/part-39.jpg"
  }
};
