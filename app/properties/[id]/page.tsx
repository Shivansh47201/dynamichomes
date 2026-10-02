import { vamiEnclave } from "@/app/data/projects";
import PropertyDetailClient from "./PropertyDetailClient";

export function generateStaticParams() {
  return vamiEnclave.plotOptions.map((option) => ({
    id: `vami-${option.sizeSqYd}`,
  }));
}

export default function Page() {
  return <PropertyDetailClient />;
}