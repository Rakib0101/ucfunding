import Link from "next/link";

export const metadata = {
  title: "Our Financials | United Capital Funding",
  description: "Gulf Coast Bank & Trust financial information — assets, liabilities, and statement of operations.",
};

interface FinancialRow {
  label: string;
  col2024: string;
  col2023: string;
  change: string;
  isTotal?: boolean;
}

const assetsRows: FinancialRow[] = [
  { label: "Cash & Due From Banks", col2024: "$208,997", col2023: "$196,113", change: "6.6%" },
  { label: "Investment Securities", col2024: "$658,411", col2023: "$643,475", change: "2.3%" },
  { label: "Loans", col2024: "$2,388,515", col2023: "$2,189,781", change: "9.1%" },
  { label: "Other Assets", col2024: "$115,441", col2023: "$101,482", change: "13.8%" },
  { label: "TOTAL ASSETS", col2024: "$3,371,364", col2023: "$3,130,851", change: "7.7%", isTotal: true },
];

const liabilitiesRows: FinancialRow[] = [
  { label: "Deposits", col2024: "$2,928,839", col2023: "$2,651,785", change: "10.4%" },
  { label: "Borrowings", col2024: "$122,106", col2023: "$174,581", change: "-30.1%" },
  { label: "Other Liabilities", col2024: "$53,963", col2023: "$43,709", change: "23.5%" },
  { label: "Equity Capital", col2024: "$266,456", col2023: "$260,776", change: "2.2%" },
  { label: "TOTAL LIABILITIES & EQUITY", col2024: "$3,371,364", col2023: "$3,130,851", change: "7.7%", isTotal: true },
];

const operationsRows: FinancialRow[] = [
  { label: "Interest Income", col2024: "$296,999", col2023: "$266,740", change: "11.3%" },
  { label: "Interest Expense", col2024: "($75,214)", col2023: "($52,770)", change: "42.5%" },
  { label: "Loan Loss Provision", col2024: "($51,354)", col2023: "($26,327)", change: "95.1%" },
  { label: "Non-Interest Income", col2024: "$42,140", col2023: "$33,470", change: "25.9%" },
  { label: "Non-Interest Expense", col2024: "($201,995)", col2023: "($186,549)", change: "8.3%" },
  { label: "Income Tax Expense", col2024: "($3,077)", col2023: "($8,402)", change: "-63.4%" },
  { label: "NET INCOME", col2024: "$7,499", col2023: "$26,162", change: "-71.3%", isTotal: true },
];

function FinancialTable({ title, rows }: { title: string; rows: FinancialRow[] }) {
  return (
    <table className="w-full mb-8 text-sm border-collapse">
      <thead>
        <tr style={{ backgroundColor: "#2d5c27" }}>
          <th
            className="text-left px-4 py-3 font-bold text-white uppercase tracking-wide"
            style={{ fontSize: "12px" }}
          >
            {title}
          </th>
          <th className="text-right px-4 py-3 font-bold text-white" style={{ fontSize: "12px" }}>2024</th>
          <th className="text-right px-4 py-3 font-bold text-white" style={{ fontSize: "12px" }}>2023</th>
          <th className="text-right px-4 py-3 font-bold text-white" style={{ fontSize: "12px" }}>CHANGE</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) =>
          row.isTotal ? (
            <tr key={row.label} style={{ backgroundColor: "#3d9090" }}>
              <td className="px-4 py-2.5 font-bold text-white uppercase text-right" style={{ fontSize: "12px" }}>
                {row.label}
              </td>
              <td className="px-4 py-2.5 font-bold text-white text-right">{row.col2024}</td>
              <td className="px-4 py-2.5 font-bold text-white text-right">{row.col2023}</td>
              <td className="px-4 py-2.5 font-bold text-white text-right">{row.change}</td>
            </tr>
          ) : (
            <tr key={row.label} className="border-b border-gray-100">
              <td className="px-4 py-2.5 text-gray-700">{row.label}</td>
              <td className="px-4 py-2.5 text-gray-700 text-right">{row.col2024}</td>
              <td className="px-4 py-2.5 text-gray-700 text-right">{row.col2023}</td>
              <td className="px-4 py-2.5 text-gray-700 text-right">{row.change}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default function FinancialsPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4 relative">
        <Link href="/application" className="absolute top-0 right-0 text-white text-sm font-bold px-5 py-3 z-10" style={{ backgroundColor: "#2d5c27" }}>
          Apply Now ›
        </Link>
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Our Financials
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">

          {/* Intro heading */}
          <h2 className="text-xl md:text-2xl font-black mb-4 leading-snug" style={{ color: "#2d5c27" }}>
            An advantage of trusting United Capital Funding with your accounts receivable financing is that our
            parent company, Gulf Coast Bank &amp; Trust, publishes its financial information.
          </h2>

          {/* Body text */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            We provide our financials as a courtesy to our clients so that you can rest assured your money
            is safe. Many of our competitors do not provide their clients with this luxury, so if they decided
            to close their doors tomorrow, you&apos;d have no warning.
          </p>

          {/* Annual report link */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            <a
              href="#"
              className="font-semibold"
              style={{ color: "#2d5c27" }}
            >
              Click here
            </a>{" "}
            to read Gulf Coast Bank &amp; Trust Company&apos;s 2024 annual report. Our statement of
            financial condition and operations are also reflected in the figures below.
          </p>

          {/* Financial Tables */}
          <FinancialTable title="Gulf Coast Bank Assets" rows={assetsRows} />
          <FinancialTable title="Liabilities & Equity" rows={liabilitiesRows} />
          <FinancialTable title="Statement of Operations" rows={operationsRows} />

        </div>
      </section>
    </>
  );
}
