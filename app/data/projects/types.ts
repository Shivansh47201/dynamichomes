export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  status: "Under Construction" | "Ready for Fitouts" | "Newly Launched" | "Completed" | "Plots Available" | "Status to be confirmed";
  completionDate: string;
  startingPrice: string;
  numericPrice: number;
  totalUnits: number | null;
  totalLandArea: string | null;
  developer: string;
  image: string;
  overview: string;
  priceNote?: string;
  highlights: string[];
  floorPlans: {
    title: string;
    size: string;
    price: string;
    image: string;
  }[];
  connectivity?: { landmark: string; distance: string }[];
  amenities?: { title: string; desc: string }[];
  paymentPlan?: { stage: string; percentage: string; detail: string }[];
}
