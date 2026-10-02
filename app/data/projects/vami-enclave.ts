// VAMI ENCLAVE — Dynamic Homes project data
// Source: VAMI ENCLAVE brochure supplied by Dynamic Homes.
// Pricing for 100, 200 and 300 sq. yd. is indicative only and still requires
// confirmation against Dynamic Homes' current official rate sheet.

export const vamiEnclave = {
  slug: "vami-enclave",
  projectName: "VAMI Enclave",
  developer: "Dynamic Homes Pvt. Ltd.",
  projectType: "Residential Plotted Development",

  location: {
    locality: "Daudpur",
    city: "Greater Noida",
    district: "Gautam Buddh Nagar",
    state: "Uttar Pradesh",
    pincode: "203201",
    addressLine: "Daudpur, Greater Noida, Uttar Pradesh - 203201",
  },

  overview: {
    short:
      "VAMI Enclave is a residential plotted development by Dynamic Homes Pvt. Ltd. in Daudpur, Greater Noida, with plot options listed from 50 to 300 sq. yd.",
    description:
      "VAMI Enclave is presented as a plotted residential project positioned around the Greater Noida–Yamuna Expressway growth corridor. The supplied project brochure highlights connectivity to major roads, the proposed/ongoing regional development around the Noida International Airport and Film City, and plot sizes of 50, 100, 200 and 300 sq. yd.",
    brochureTagline: "Sapne Aapke Sath Hamara",
  },

  plotOptions: [
    {
      sizeSqYd: 50,
      label: "50 Sq. Yd.",
      price: 1500000,
      priceDisplay: "₹15 Lakh",
      status: "user-provided-price",
    },
    {
      sizeSqYd: 100,
      label: "100 Sq. Yd.",
      price: 3000000,
      priceDisplay: "₹30 Lakh",
      status: "not-confirmed-in-brochure",
    },
    {
      sizeSqYd: 200,
      label: "200 Sq. Yd.",
      price: 6000000,
      priceDisplay: "₹60 Lakh",
      status: "not-confirmed-in-brochure",
    },
    {
      sizeSqYd: 300,
      label: "300 Sq. Yd.",
      price: 90000000,
      priceDisplay: "₹90 Lakh",
      status: "not-confirmed-in-brochure",
    },
  ],

  // Do not publish these as confirmed prices until Dynamic Homes provides
  // the current rate sheet. If ₹15 lakh for 50 sq. yd. is based on the same
  // rate of ₹30,000/sq. yd., the arithmetic would be ₹30 lakh, ₹60 lakh,
  // and ₹90 lakh respectively. The supplied indicative ₹1 crore for 300 sq. yd.
  // differs from that calculation and must be confirmed before being advertised.
  indicativeRateNote: {
    derivedRatePerSqYd: 30000,
    disclaimer:
      "Indicative arithmetic only; not an official project price list.",
  },

  paymentPlan: {
    booking: "10% on booking",
    registry: "50% on registry",
    fullPayment: "Maximum 3 months for full payment",
  },

  connectivity: [
    {
      name: "Eastern Peripheral Expressway",
      distance: "Approx. 2 min",
      source: "Project brochure",
    },
    {
      name: "Yamuna Expressway",
      distance: "Approx. 10–15 min",
      source: "Project brochure",
    },
    {
      name: "Oppo Factory",
      distance: "Approx. 5–7 min",
      source: "Project brochure",
    },
    {
      name: "Noida International Airport / Jewar Airport",
      distance: "Approx. 30–35 min",
      source: "Project brochure",
    },
    {
      name: "Dankaur Railway Station",
      distance: "Approx. 15–20 min",
      source: "Project brochure",
    },
    {
      name: "Rapid Metro",
      distance: "Approx. 5 min",
      source: "Project brochure",
    },
    {
      name: "130 m Road: Noida Extension to Jewar Airport",
      distance: "Approx. 700 m",
      source: "Project brochure",
    },
    {
      name: "Pari Chowk",
      distance: "Approx. 15 min",
      source: "Project brochure",
    },
    {
      name: "Film City",
      distance: "Approx. 22–25 min",
      source: "Project brochure",
    },
  ],

  infrastructureContext: {
    educationalHub:
      "The brochure describes Gautam Buddh Nagar as an educational hub and mentions institutions including Galgotias University.",
    filmCity:
      "The brochure highlights the planned Film City in the YEIDA region and states that nearly 1,000 acres had been identified for the project.",
    yamunaExpressway:
      "The brochure describes Yamuna Expressway as a 6-lane, 165.5 km access-controlled expressway connecting Greater Noida with Agra.",
    metro:
      "The brochure includes an Aqua Line connectivity concept between Ghaziabad and Jewar and lists stations/areas along the corridor.",
    airport:
      "The brochure presents Noida International Airport at Jewar as a major regional connectivity development.",
  },

  layout: {
    mainRoads: ["30 ft wide road", "60 ft wide road"],
    internalRoadReference: "20 ft wide roads are shown in the supplied layout.",
    futureExpansion:
      "The layout marks areas on both sides as 'Future Expansion'.",
    plotCategoriesShown: [
      "50 Sq. Yd. plots",
      "100 Sq. Yd. plots",
      "200 Sq. Yd. plots",
      "300 Sq. Yd. plots",
    ],
    note:
      "The supplied layout is a visual planning map. Do not infer exact plot dimensions, total project area, or availability without an official layout/availability sheet.",
  },

  amenities: [
    {
      name: "Security Management",
      description:
        "The brochure presents security management for resident safety, including references to surveillance, security personnel and secure entry points.",
    },
    {
      name: "Electricity Management",
      description:
        "The brochure describes electricity management and references reliable supply, power backup, energy-efficient lighting and smart electrical management.",
    },
    {
      name: "Sewage Management",
      description:
        "The brochure describes sewage and waste management intended to support hygiene and environmental standards.",
    },
    {
      name: "Fresh Air",
      description:
        "The brochure highlights fresh-air and healthy-living considerations through landscaping, ventilation and possible air-purification measures.",
    },
    {
      name: "Water Management",
      description:
        "The brochure highlights water supply, usage and conservation management.",
    },
  ],

  brochureHighlights: [
    "Residential plotted development",
    "50, 100, 200 and 300 sq. yd. plot options",
    "30 ft and 60 ft wide main roads shown in layout",
    "20 ft internal-road references shown in layout",
    "Future expansion areas shown in layout",
    "Connectivity references to Eastern Peripheral Expressway and Yamuna Expressway",
    "Regional connectivity references to Noida International Airport / Jewar Airport",
    "Film City and educational-hub context",
  ],

  websiteSections: [
    "Project Overview",
    "Location & Connectivity",
    "Plot Options & Pricing",
    "Payment Plan",
    "Project Layout",
    "Amenities",
    "Why This Location",
    "Infrastructure & Growth Drivers",
    "Gallery",
    "Enquiry / Site Visit Form",
    "Contact",
    "Legal / Disclaimer",
  ],

  enquiryForm: {
    fields: [
      "Full Name",
      "Mobile Number",
      "Email Address",
      "Preferred Plot Size",
      "Budget",
      "Message",
    ],
    cta: "Enquire Now",
    secondaryCta: "Schedule a Site Visit",
  },

  contact: {
    address: "Daudpur, Greater Noida - 203201",
    email: "dynamichomes.pvt.ltd@gmail.com",
    company: "Dynamic Homes Pvt. Ltd.",
    phone: null,
    note: "Add the official phone number before publishing the contact section.",
  },

  complianceAndPublishingChecklist: [
    "Confirm current price for 100, 200 and 300 sq. yd. plots.",
    "Confirm whether ₹15 lakh for 50 sq. yd. is the current live price.",
    "Confirm plot availability before displaying Available/Sold status.",
    "Add RERA/approval details only after receiving the official registration/approval information.",
    "Confirm exact project address and Google Maps location.",
    "Confirm possession/development status.",
    "Confirm electricity, water, sewage and security provisions actually delivered/committed.",
    "Confirm whether the stated travel times are approximate and the route/time basis.",
    "Add official phone/WhatsApp contact details.",
    "Add current brochure/layout and date the pricing information.",
  ],

  source: {
    document: "VAMI ENCLAVE brochure supplied in this conversation",
    pagesUsed: [1, 2, 3, 4, 5, 6, 7, 8],
    lastReviewed: "2026-10-02",
  },
} as const;

export default vamiEnclave;
