import { vamiEnclave } from "./vami-enclave";
import type { Project } from "./types";
export { vamiEnclave };

export type { Project } from "./types";

const suppliedPrice = vamiEnclave.plotOptions.find(
  (option) => typeof option.price === "number",
);

// UI adapter for the supplied brochure record; facts not in the brochure stay unknown.
const vamiEnclaveProject = {
  id: vamiEnclave.slug,
  slug: vamiEnclave.slug,
  name: vamiEnclave.projectName,
  tagline: vamiEnclave.overview.brochureTagline,
  location: vamiEnclave.location.addressLine,
  status: "Plots Available",
  completionDate: "Ready for Registry",
  startingPrice: suppliedPrice
    ? `${suppliedPrice.priceDisplay}*`
    : "Price on request",
  numericPrice: suppliedPrice ? suppliedPrice.price / 10_000_000 : 0,
  totalUnits: 180,
  totalLandArea: "25 Acres",
  developer: vamiEnclave.developer,
  image: "/properties/indian-villa-exterior.png",
  overview: vamiEnclave.overview.description,
  priceNote:
    "₹15 Lakh for 50 sq. yd. is user-provided and should be confirmed as current. Prices shown for 100, 200 and 300 sq. yd. are indicative, not an official rate sheet. The 300 sq. yd. figure also differs from the indicative-rate calculation; confirm it with Dynamic Homes.",
  highlights: [...vamiEnclave.brochureHighlights],
  floorPlans: vamiEnclave.plotOptions.map((option) => ({
    title: `${option.label} Residential Plot`,
    size: option.label,
    price: option.priceDisplay,
    image: option.sizeSqYd === 50
      ? "/properties/plot-50-sqyd.png"
      : option.sizeSqYd === 100
      ? "/properties/plot-100-sqyd.png"
      : option.sizeSqYd === 200
      ? "/properties/plot-200-sqyd.png"
      : "/properties/plot-300-sqyd.png",
  })),
  connectivity: vamiEnclave.connectivity.map((item) => ({
    landmark: item.name,
    distance: item.distance,
  })),
  amenities: vamiEnclave.amenities.map((amenity) => ({
    title: amenity.name,
    desc: amenity.description,
  })),
  paymentPlan: [
    { stage: "Booking", percentage: "10%", detail: "On booking" },
    { stage: "Registry", percentage: "50%", detail: "On registry" },
    {
      stage: "Full Payment",
      percentage: "Within 3 months",
      detail: "Complete payment within the maximum 3-month period",
    },
  ],
} satisfies Project;

export const PROJECTS: Project[] = [vamiEnclaveProject];

export const FEATURED_PROJECT = vamiEnclaveProject;
