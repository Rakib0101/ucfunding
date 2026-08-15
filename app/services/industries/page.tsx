import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | United Capital Funding",
  description: "UC Funding provides invoice factoring for staffing, government, manufacturing, IT, security, and service companies.",
};

const industries = [
  {
    name: "Staffing",
    desc: "Staffing companies face unique cash flow challenges — paying employees weekly while waiting 30–60 days for client payment. UC Funding bridges that gap, so you can meet payroll and take on new contracts without stress.",
    challenges: ["Weekly payroll obligations", "Slow-paying clients", "Seasonal demand fluctuations", "Rapid growth requirements"],
  },
  {
    name: "Government Contracting",
    desc: "Government contractors often face payment cycles of 30–90 days or more. Our B2G factoring solutions are designed specifically for businesses working with federal, state, and local agencies.",
    challenges: ["Long payment cycles", "Complex contract requirements", "Prompt Payment Act compliance", "Multiple agency billing"],
  },
  {
    name: "Manufacturing",
    desc: "Manufacturers need capital to purchase raw materials, pay labor, and maintain equipment — often before they receive payment for finished goods. AR factoring keeps production flowing.",
    challenges: ["Material purchase requirements", "Equipment and maintenance costs", "Inventory financing needs", "Seasonal production cycles"],
  },
  {
    name: "Service Companies",
    desc: "Service businesses of all types can benefit from invoice factoring. Whether you provide consulting, cleaning, logistics, or any other service, if you invoice clients, we can help.",
    challenges: ["Project-based billing gaps", "Client payment delays", "Overhead and operational costs", "Business growth funding"],
  },
  {
    name: "Information Technology",
    desc: "IT companies — from managed services providers to software consultants — often have large contracts with long payment terms. UC Funding helps IT businesses maintain cash flow and invest in growth.",
    challenges: ["Long-term contract billing", "Hardware/software costs", "Talent acquisition and retention", "Rapid technology changes"],
  },
  {
    name: "Security Guard",
    desc: "Security guard companies face the same weekly payroll pressures as staffing firms. With UC Funding, you can pay your guards on time, every time, regardless of when your clients pay.",
    challenges: ["Weekly guard payroll", "Licensing and training costs", "Equipment and uniform expenses", "Contract growth requirements"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="UC Funding provides tailored invoice factoring solutions for a wide range of industries across the United States."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Industries We Serve", href: "/services/industries" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind) => (
              <div key={ind.name} className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow card-hover">
                <h2 className="text-xl font-bold text-blue-900 mb-3">{ind.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{ind.desc}</p>
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Common Challenges We Solve:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="text-green-500 font-bold">✓</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">Don&apos;t see your industry? We likely work with it too.</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
              <Link href="/application" className="btn-primary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
