import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  Compass,
  MapPin,
  Navigation,
  Route,
  Trees,
} from "lucide-react";
import { vamiEnclave } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "VAMI Enclave Project Details | Dynamic Homes",
  description:
    "VAMI Enclave residential plot sizes, indicative pricing, brochure information, connectivity, payment terms and location in Daudpur, Greater Noida.",
};

const mapQuery = encodeURIComponent(vamiEnclave.location.addressLine);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&output=embed`;

const infrastructureItems = [
  { title: "Education hub", detail: vamiEnclave.infrastructureContext.educationalHub },
  { title: "Film City", detail: vamiEnclave.infrastructureContext.filmCity },
  { title: "Yamuna Expressway", detail: vamiEnclave.infrastructureContext.yamunaExpressway },
  { title: "Metro context", detail: vamiEnclave.infrastructureContext.metro },
  { title: "Noida International Airport", detail: vamiEnclave.infrastructureContext.airport },
];

export default function VamiProjectPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] pb-20 pt-28 text-[#202820] sm:pt-32">
      <div className="mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#64675D] transition-colors hover:text-[#9A682E]"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <section className="mt-5 grid overflow-hidden rounded-[1.75rem] border border-[#DCD6C9] bg-[#FAF8F3] shadow-[0_24px_80px_rgba(50,42,28,0.10)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="group relative min-h-82.5 overflow-hidden bg-[#2D342C] sm:min-h-112.5 lg:min-h-150">
            <Image
              src="/home/hero/dynamic-homes-hero.png"
              alt="Illustrative luxury residential visual for VAMI Enclave project information"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#111910]/75 via-transparent to-black/10" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#172018]/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-8 sm:top-8 sm:text-xs">
              <MapPin size={13} className="text-[#E8C98B]" /> Daudpur · Greater Noida
            </div>
            <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E8C98B] sm:text-xs">Dynamic Homes presents</p>
                <p className="mt-1 font-(--font-bodoni) text-3xl sm:text-4xl">VAMI Enclave</p>
              </div>
              <span className="hidden rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[10px] text-white/75 backdrop-blur-md sm:inline-flex">
                Illustrative visual
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#AD7739]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8E6335] sm:text-xs">
                {vamiEnclave.projectType}
              </span>
            </div>
            <h1 className="mt-6 font-(--font-bodoni) text-[clamp(3.2rem,6.3vw,6rem)] leading-[0.88] tracking-[-0.045em] text-[#202820]">
              VAMI
              <span className="mt-1 block italic text-[#A8783D]">Enclave.</span>
            </h1>
            <p className="mt-5 text-lg font-medium text-[#987044] sm:text-xl">
              {vamiEnclave.overview.brochureTagline}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#64675D] sm:text-base sm:leading-8">
              {vamiEnclave.overview.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#plot-pricing"
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#24352A] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#344A39] sm:text-sm"
              >
                Explore plot options <ArrowUpRight size={16} />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#C9C2B4] px-5 text-xs font-semibold text-[#343C33] transition-colors hover:border-[#A8783D] hover:text-[#8B602E] sm:text-sm"
              >
                <MapPin size={15} /> View location
              </a>
            </div>
            <div className="mt-7 flex items-start gap-3 border-t border-[#E2DDD2] pt-5 text-xs leading-5 text-[#858477]">
              <Clock3 size={15} className="mt-0.5 shrink-0 text-[#A8783D]" />
              <p>Prices, plot availability and facilities should be confirmed directly with Dynamic Homes.</p>
            </div>
          </div>
        </section>

        <section id="project-overview" className="mt-5 grid scroll-mt-32 gap-px overflow-hidden rounded-2xl border border-[#DED8CC] bg-[#DED8CC] sm:grid-cols-3">
          <Fact label="Project type" value={vamiEnclave.projectType} />
          <Fact label="Project address" value={vamiEnclave.location.addressLine} />
          <Fact label="Plot configurations" value={vamiEnclave.plotOptions.map((plot) => plot.sizeSqYd).join(" · ") + " sq. yd."} />
        </section>

        <section id="plot-pricing" className="scroll-mt-32 pt-20 sm:pt-24">
          <SectionHeading
            eyebrow="01 / Plot collection"
            title="A size for your next chapter."
            description="Review the four plot sizes shown in the project information. Pricing for the larger options is indicative and should be confirmed against the current official rate sheet."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vamiEnclave.plotOptions.map((plot, index) => (
              <article key={plot.sizeSqYd} className="group relative overflow-hidden rounded-2xl border border-[#DFD9CD] bg-[#FBFAF6] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B58A55]/60 hover:shadow-[0_18px_40px_rgba(54,45,29,0.10)] sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8783D]">Plot {String(index + 1).padStart(2, "0")}</span>
                  <span className="h-8 w-8 rounded-full border border-[#E3DDD1] transition-colors group-hover:border-[#B58A55]" />
                </div>
                <h3 className="mt-7 font-(--font-bodoni) text-3xl text-[#263329] sm:text-4xl">{plot.label}</h3>
                <div className="mt-6 border-t border-[#E7E2D8] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888779]">Price reference</p>
                  <p className="mt-1 font-(--font-bodoni) text-3xl text-[#9A6E3C]">{plot.priceDisplay}</p>
                  <p className="mt-3 min-h-12 text-xs leading-5 text-[#858477]">
                    {plot.status === "user-provided-price"
                      ? "User-provided price; confirm whether it is the current live rate."
                      : "Indicative only. Request the official current rate sheet."}
                  </p>
                </div>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#344A39] transition-colors hover:text-[#A8783D]">
                  Ask about this size <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-5 flex gap-3 rounded-2xl border border-[#D9C8A7] bg-[#EEE6D7] p-5 text-sm leading-6 text-[#625642] sm:p-6">
            <span className="mt-0.5 shrink-0 font-semibold text-[#9A6E3C]">Note</span>
            <p>The indicative rate reference is ₹30,000 per sq. yd.; that calculation gives ₹90 Lakh for 300 sq. yd., while the supplied figure is ₹1 Crore. Please confirm current prices with Dynamic Homes.</p>
          </div>
        </section>

        <section id="payment-plan" className="scroll-mt-32 pt-20 sm:pt-24">
          <div className="overflow-hidden rounded-[1.75rem] bg-[#24352A] text-white shadow-[0_24px_65px_rgba(27,42,31,0.16)]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-6 sm:p-9 lg:p-11">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8BD8F]">02 / Payment structure</p>
                <h2 className="mt-4 font-(--font-bodoni) text-4xl leading-tight sm:text-5xl">A clear path to your plot.</h2>
                <p className="mt-4 text-sm leading-6 text-white/60">Terms described in the supplied brochure. Request and review the current written payment schedule before paying.</p>
              </div>
              <div className="grid border-t border-white/10 sm:grid-cols-3 lg:border-l lg:border-t-0">
                <PaymentCard number="01" title="Booking" detail={vamiEnclave.paymentPlan.booking} />
                <PaymentCard number="02" title="Registry" detail={vamiEnclave.paymentPlan.registry} />
                <PaymentCard number="03" title="Full payment" detail={vamiEnclave.paymentPlan.fullPayment} />
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="scroll-mt-32 pt-20 sm:pt-24">
          <SectionHeading eyebrow="03 / Location" title="Rooted in Daudpur." description="The supplied address identifies Daudpur, Greater Noida. Confirm the exact project pin and entrance with the project team." />
          <div className="mt-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col rounded-2xl border border-[#DFD9CD] bg-[#FBFAF6] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8E1D4] text-[#8F673B]"><MapPin size={19} /></div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#888779]">Project address</p>
              <p className="mt-2 font-(--font-bodoni) text-2xl leading-snug text-[#263329] sm:text-3xl">{vamiEnclave.location.addressLine}</p>
              <p className="mt-4 text-sm text-[#777769]">{vamiEnclave.location.district}, {vamiEnclave.location.state} · PIN {vamiEnclave.location.pincode}</p>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-widest text-[#344A39] hover:text-[#A8783D]">
                <Navigation size={14} /> Open Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="min-h-80 overflow-hidden rounded-2xl border border-[#DFD9CD] bg-[#E9E5DB] sm:min-h-100">
              <iframe
                title="Google Maps search for VAMI Enclave, Daudpur, Greater Noida"
                src={googleMapsEmbedUrl}
                className="h-full min-h-80 w-full border-0 sm:min-h-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="connectivity" className="scroll-mt-32 pt-20 sm:pt-24">
          <SectionHeading eyebrow="04 / Connectivity" title="Connected to the region." description="Approximate locations and journey times referenced in the supplied brochure." />
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#DFD9CD] bg-[#FBFAF6]">
            {vamiEnclave.connectivity.map((item, index) => (
              <div key={item.name} className="grid grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-[#E9E4DB] px-4 py-4 last:border-b-0 sm:grid-cols-[52px_1fr_auto] sm:px-6 sm:py-5">
                <span className="font-(--font-bodoni) text-lg text-[#A8783D]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-[#394239] sm:text-base">{item.name}</span>
                <span className="text-right text-xs font-semibold text-[#777769] sm:text-sm">{item.distance}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="layout" className="scroll-mt-32 pt-20 sm:pt-24">
          <SectionHeading eyebrow="05 / Layout" title="Planning references." description={vamiEnclave.layout.note} />
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.75fr)] lg:gap-10">
            <figure className="overflow-hidden rounded-3xl border border-[#D8D0C1] bg-[#E9E2D5] p-2 shadow-[0_24px_70px_rgba(50,42,28,0.12)] sm:p-3">
              <a href="/vami/vami-projects.png" target="_blank" rel="noreferrer" aria-label="Open full VAMI Enclave project layout image">
                <Image
                  src="/vami/vami-projects.png"
                  alt="VAMI Enclave plotted layout showing 30-foot and 60-foot roads, plot categories, landscaping and future expansion areas"
                  width={1094}
                  height={1437}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-auto w-full rounded-2xl"
                />
              </a>
              <figcaption className="px-3 py-3 text-xs leading-5 text-[#777769] sm:px-4">
                VAMI Enclave layout image supplied for project information. Tap the image to open it at full size.
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {vamiEnclave.layout.mainRoads.map((road) => (
                <LayoutCard key={road} icon={<Route size={19} />} label="Main road shown" value={road} />
              ))}
              <LayoutCard icon={<Compass size={19} />} label="Internal road reference" value={vamiEnclave.layout.internalRoadReference} />
              <LayoutCard icon={<Trees size={19} />} label="Future expansion" value={vamiEnclave.layout.futureExpansion} />
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#777769]">Plot categories shown: {vamiEnclave.layout.plotCategoriesShown.join(" · ")}</p>
        </section>

        <section id="amenities" className="scroll-mt-32 pt-20 sm:pt-24">
          <SectionHeading eyebrow="06 / Amenities" title="Considered for everyday living." description="Service descriptions below summarize brochure statements; verify what is currently delivered or committed on site." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vamiEnclave.amenities.map((amenity, index) => (
              <article key={amenity.name} className="rounded-2xl border border-[#DFD9CD] bg-[#FBFAF6] p-6 sm:p-7">
                <span className="font-(--font-bodoni) text-xl text-[#A8783D]">0{index + 1}</span>
                <h3 className="mt-4 text-base font-semibold text-[#29362C]">{amenity.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#777769]">{amenity.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="infrastructure" className="scroll-mt-32 pt-20 sm:pt-24">
          <SectionHeading eyebrow="07 / Regional context" title="A growing regional story." description="Context quoted in the brochure; these references are not guarantees of completion, access, travel times or investment performance." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {infrastructureItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#DFD9CD] bg-[#FBFAF6] p-6 sm:p-7">
                <h3 className="font-(--font-bodoni) text-2xl text-[#29362C]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#777769]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[1.75rem] bg-[#202F25] p-6 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8BD8F]">Project enquiries</p>
              <h2 className="mt-3 font-(--font-bodoni) text-3xl sm:text-4xl">A conversation about VAMI Enclave.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">Ask Dynamic Homes to confirm the live rate sheet, plot availability, exact map pin, approvals and current site status.</p>
              <p className="mt-4 text-sm text-white/85">{vamiEnclave.contact.email}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${vamiEnclave.contact.email}?subject=${encodeURIComponent("VAMI Enclave project enquiry")}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E4C995] px-6 text-sm font-semibold text-[#253329] transition-colors hover:bg-white">
                Email our team <ArrowUpRight size={16} />
              </a>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white">
                Contact page <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <p className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-5 text-[#858477]">
          Information is based on the supplied brochure and user-provided pricing references. Prices, availability, map pin, approvals, development status and facilities should be confirmed with Dynamic Homes before booking.
        </p>
      </div>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#FBFAF6] px-5 py-5 sm:px-6 sm:py-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8B897D] sm:text-xs">{label}</p>
      <p className="mt-2 text-sm font-medium leading-6 text-[#303A31] sm:text-base">{value}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A6E3C] sm:text-xs">{eyebrow}</p>
      <h2 className="mt-3 font-(--font-bodoni) text-3xl leading-tight text-[#253128] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#777769] sm:text-base">{description}</p>
    </div>
  );
}

function PaymentCard({ number, title, detail }: { number: string; title: string; detail: string }) {
  return (
    <article className="border-t border-white/15 p-6 sm:border-l sm:border-t-0 sm:p-7 first:border-t-0 sm:first:border-l-0">
      <span className="font-(--font-bodoni) text-2xl text-[#D8BD8F]">{number}</span>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/65">{detail}</p>
    </article>
  );
}

function LayoutCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-[#DFD9CD] bg-[#FBFAF6] p-5 sm:p-6">
      <span className="text-[#A8783D]">{icon}</span>
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8B897D]">{label}</p>
      <p className="mt-2 text-base font-semibold leading-6 text-[#303A31]">{value}</p>
    </article>
  );
}
