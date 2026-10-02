import { vamiEnclave } from "@/app/data/projects";

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  numericPrice: number | null;
  pricePerSqFt: string;
  location: string;
  sector: string;
  city: string;
  type: "Plot" | "Villa" | "Penthouse" | "Apartment" | "Commercial";
  beds: number;
  baths: number;
  areaSqFt: number | null;
  plotSizeSqYd?: number;
  image: string;
  gallery: string[];
  tag: "Featured" | "Newly Listed" | "Exclusive" | "Hot Deal" | "Project Option";
  description: string;
  highlights: string[];
  amenities: string[];
  coordinates: { lat: number; lng: number } | null;
  completionYear: number | null;
  verifiedStatus: "Title Verified" | "Registry Ready" | "RERA Approved" | "Ready to Move" | "Details to be confirmed";
  possessionStatus: "Ready for Registry" | "Ready to Move" | "Under Construction" | "New Launch" | "Details to be confirmed";
  priceNote?: string;
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    avatar: string;
  };
  connectivity?: { landmark: string; distance: string }[];
  paymentPlan?: { stage: string; percentage: string; detail: string }[];
}

const PLOT_IMAGES: Record<number, string> = {
  50: "/properties/plot-50-sqyd.png",
  100: "/properties/plot-100-sqyd.png",
  200: "/properties/plot-200-sqyd.png",
  300: "/properties/plot-300-sqyd.png",
};

export const PROPERTIES: Property[] = vamiEnclave.plotOptions.map((option) => {
  const hasListedPrice = typeof option.price === "number";
  const optionImage = PLOT_IMAGES[option.sizeSqYd] || "/properties/plot-100-sqyd.png";

  return {
    id: `vami-${option.sizeSqYd}`,
    slug: `${vamiEnclave.slug}-${option.sizeSqYd}-sqyd-plot`,
    title: `${vamiEnclave.projectName} - ${option.label} Residential Plot`,
    subtitle: `${vamiEnclave.projectType} · ${vamiEnclave.location.locality}, ${vamiEnclave.location.city}`,
    price: `${option.priceDisplay}${hasListedPrice ? "*" : ""}`,
    numericPrice: option.price !== null ? option.price / 10_000_000 : null,
    pricePerSqFt: "Not provided",
    location: vamiEnclave.location.addressLine,
    sector: vamiEnclave.location.locality,
    city: vamiEnclave.location.city,
    type: "Plot",
    beds: 0,
    baths: 0,
    areaSqFt: null,
    plotSizeSqYd: option.sizeSqYd,
    image: optionImage,
    gallery: [
      optionImage,
      "/properties/indian-villa-exterior.png",
      "/properties/indian-villa-courtyard.png",
      "/properties/indian-villa-living.png",
    ],
    tag: "Project Option",
    description: vamiEnclave.overview.short,
    highlights: [...vamiEnclave.brochureHighlights],
    amenities: vamiEnclave.amenities.map((amenity) => amenity.name),
    coordinates: null,
    completionYear: null,
    verifiedStatus: "Details to be confirmed",
    possessionStatus: "Details to be confirmed",
    priceNote: option.status === "user-provided-price"
      ? "User-provided price; confirm the current live rate with Dynamic Homes."
      : "Indicative price only, not confirmed in the brochure. Request the official current rate sheet from Dynamic Homes.",
    agent: {
      name: vamiEnclave.developer,
      title: "Project Enquiries",
      phone: "",
      email: vamiEnclave.contact.email,
      avatar: "/brand/dynamic-homes-logo.png",
    },
    connectivity: vamiEnclave.connectivity.map((item) => ({
      landmark: item.name,
      distance: item.distance,
    })),
    paymentPlan: [
      { stage: "Booking", percentage: "10%", detail: "On booking" },
      { stage: "Registry", percentage: "50%", detail: "On registry" },
      {
        stage: "Full Payment",
        percentage: "Within 3 months",
        detail: "Maximum 3 months for full payment",
      },
    ],
  };
});
