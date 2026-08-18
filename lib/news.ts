export interface NewsItem {
	title: string;
	date: string;
	excerpt: string;
	body: string;
}

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/&/g, "and")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export const news: NewsItem[] = [
	{
		title: "United Capital Secures Terms for up to $6.3MM",
		date: "July 15, 2026",
		excerpt:
			"United Capital Partners recently secured a $6.3MM credit facility for a high-growth technology company.",
		body: "United Capital Partners recently secured terms for up to $6.3MM in credit facilities for a high-growth technology company preparing for its next stage of expansion. The company needed flexible capital to support hiring, product development, and go-to-market initiatives without diluting existing equity holders. UCP structured a facility that scales alongside the company's growth trajectory, giving management the runway to execute on its plan. The transaction reflects UCP's continued focus on venture-stage and growth-stage technology companies.",
	},
	{
		title: "United Capital Secures Terms for $3.5MM Line of Credit & Term Debt",
		date: "May 28, 2026",
		excerpt:
			"UCP structured a combined $3.5MM credit and term debt facility for a regional services firm.",
		body: "UCP structured a combined $3.5MM facility, pairing a revolving line of credit with term debt, for a regional services firm looking to smooth out seasonal cash flow swings while investing in longer-term growth. The blended structure gave the company working capital flexibility alongside a predictable repayment schedule for capital expenditures. UCP worked closely with the management team to size each tranche appropriately for the business's cash conversion cycle. The facility closed on a timeline that allowed the client to move forward with its expansion plans without interruption.",
	},
	{
		title: "United Capital Secures Terms for $5.5MM Bridging Equity Investment",
		date: "April 2, 2026",
		excerpt:
			"UCP closed a $5.5MM bridging equity investment to support a Midwest manufacturer.",
		body: "UCP closed a $5.5MM bridging equity investment to support a Midwest manufacturer navigating a transition period between ownership groups. The bridge capital allowed the company to maintain operations and meet supplier commitments while a longer-term recapitalization was finalized. UCP's investor network specializes in situations that require speed and certainty of execution, and this transaction was structured and funded within a compressed timeline. The manufacturer was able to preserve key customer relationships throughout the process.",
	},
	{
		title: "United Capital Secures $4MM Equipment Leasing for Customer",
		date: "February 20, 2026",
		excerpt:
			"A new $4MM equipment lease facility was structured for a growing distribution business.",
		body: "A new $4MM equipment lease facility was structured for a growing distribution business that needed to expand its fleet and warehouse equipment to keep pace with new customer volume. Rather than tie up cash reserves in outright purchases, the company opted to lease the equipment through UCP, preserving liquidity for day-to-day operations. The lease terms were tailored to match the useful life of the assets and the company's projected cash flow. The facility gave the business the operational capacity it needed to support its expanding customer base.",
	},
	{
		title:
			"United Capital Secures $500K Term Line Of Credit for an AI Driven Care to Nurse Matching Technology",
		date: "January 8, 2026",
		excerpt:
			"UCP provided a $500K term facility to an innovative healthcare staffing technology company.",
		body: "UCP provided a $500K term facility to an innovative healthcare staffing technology company that uses AI-driven matching to connect care providers with nursing opportunities. The capital supported continued platform development and hiring ahead of a broader rollout to new markets. Given the company's early stage, UCP structured a facility that balanced the founders' need for growth capital with a manageable repayment structure. The transaction reflects UCP's willingness to work with venture-backed technology companies earlier in their lifecycle.",
	},
	{
		title:
			"United Capital Announces Completion of an $8 Million Purchase Order Finance Facility",
		date: "November 19, 2025",
		excerpt:
			"UCP completed an $8 million purchase order finance facility for a federal government supplier.",
		body: "UCP completed an $8 million purchase order finance facility for a supplier fulfilling contracts with the federal government. The facility allowed the company to accept and fulfill purchase orders that exceeded its existing working capital position, without waiting on lengthy government payment cycles. UCP's underwriting team evaluated the underlying contracts and the supplier's fulfillment history to structure a facility sized to the opportunity. The transaction enabled the supplier to pursue larger contract awards going forward.",
	},
	{
		title: "United Capital Corp Sources $3.3MM Real Estate Financing Offer",
		date: "October 5, 2025",
		excerpt:
			"UCP sourced a $3.3MM real estate bridge financing solution for a commercial property transaction.",
		body: "UCP sourced a $3.3MM real estate bridge financing solution for a commercial property transaction that required a fast close outside of conventional bank timelines. The bridge loan gave the borrower the certainty needed to complete the acquisition while longer-term permanent financing was arranged. UCP's investor pool was able to move quickly on underwriting given the strength of the underlying asset and the sponsor's track record. The transaction closed within weeks of initial engagement.",
	},
	{
		title:
			"United Capital Secures Terms for a $500MM Term Debt & Growth Capital Facility",
		date: "August 22, 2025",
		excerpt:
			"A major growth capital milestone — UCP structured a $500MM facility for a scaling enterprise.",
		body: "UCP structured terms for a $500MM term debt and growth capital facility, marking one of the largest transactions in the firm's history. The facility was designed to support a scaling enterprise's continued expansion, combining term debt with additional growth capital to fund the next phase of the company's strategy. UCP worked alongside a syndicate of institutional investors to size and structure the facility appropriately for the company's balance sheet. The transaction underscores UCP's ability to lead and structure large, complex financings for established enterprises.",
	},
	{
		title: "United Capital Corp Sources $6MM Debt Refinancing Line",
		date: "July 10, 2025",
		excerpt:
			"UCP sources $6MM debt refinancing for a manufacturing client seeking lower cost of capital.",
		body: "UCP sourced a $6MM debt refinancing line for a manufacturing client looking to lower its overall cost of capital and simplify its balance sheet. The new facility replaced a patchwork of higher-cost obligations with a single, more efficient structure. UCP's underwriting team evaluated the company's equipment and receivables to determine appropriate advance rates for the refinancing. The client was able to redirect the resulting savings toward reinvestment in its production capacity.",
	},
	{
		title: "United Capital Corp Sources $4MM Growth-ph Capital Funding",
		date: "May 27, 2025",
		excerpt:
			"UCP sourced $4MM in growth-phase capital for an emerging consumer technology company.",
		body: "UCP sourced $4MM in growth-phase capital for an emerging consumer technology company scaling its customer base ahead of a planned equity raise. The facility gave the company additional runway to hit key growth milestones without having to raise dilutive capital prematurely. UCP structured the facility with flexible terms that accounted for the company's evolving revenue profile. The funding helped position the company for a stronger negotiating position in its next financing round.",
	},
	{
		title: "United Capital Corp Sources $8MM Venture Equipment Lease Line",
		date: "April 14, 2025",
		excerpt:
			"A $8MM venture equipment lease line was arranged for a venture-backed hardware startup.",
		body: "UCP arranged an $8MM venture equipment lease line for a venture-backed hardware startup building out its manufacturing and testing capacity. The lease structure allowed the company to acquire the specialized equipment it needed without depleting the cash reserves raised in its most recent equity round. UCP's team worked with the company's investors to structure terms consistent with the startup's growth stage and burn profile. The facility gave the company the operational infrastructure to move from prototype to scaled production.",
	},
	{
		title:
			"United Capital Corp Sources $5MM Revolving Line of Credit for a Fast Growing Specialty Pharmaceutical Manufacturing Entity",
		date: "March 3, 2025",
		excerpt:
			"UCP arranged a $5MM revolving credit facility for a specialty pharma manufacturer.",
		body: "UCP arranged a $5MM revolving line of credit for a fast-growing specialty pharmaceutical manufacturer that needed working capital to keep pace with rising order volume. The revolving structure gave the company the flexibility to draw and repay capital as its inventory and receivables cycles required. UCP's underwriting accounted for the specialized nature of the company's inventory and the credit quality of its customer base. The facility supported the manufacturer's ability to fulfill larger orders without straining its cash position.",
	},
	{
		title:
			"United Capital Corp Successfully Places $60MM Venture Equipment Lease Line for Fast Growing Specialty Pharmaceutical Manufacturing Entity",
		date: "January 20, 2025",
		excerpt:
			"UCP placed a $60MM venture equipment lease for a large-scale pharmaceutical manufacturer.",
		body: "UCP successfully placed a $60MM venture equipment lease line for a fast-growing specialty pharmaceutical manufacturer scaling its production capabilities. The facility financed a significant expansion of manufacturing equipment required to meet increased demand from the company's customer base. Given the size and complexity of the transaction, UCP worked with its investor network to structure a facility that matched the equipment's useful life to the company's growth plan. The lease line positioned the manufacturer to meet its production targets without straining its balance sheet.",
	},
	{
		title: "United Capital Corp Successfully Secures $60MM AR Revolving LOC",
		date: "December 8, 2024",
		excerpt: "UCP closed a $60MM accounts receivable revolving line of credit.",
		body: "UCP closed a $60MM accounts receivable revolving line of credit for a company looking to unlock liquidity tied up in its receivables portfolio. The facility allowed the company to convert outstanding invoices into working capital more quickly than its standard collection cycle. UCP structured advance rates based on the credit quality and aging of the underlying receivables. The facility gave the company the flexibility to fund operations and growth initiatives without waiting on customer payment terms.",
	},
	{
		title: "United Capital Corp Successfully Secures $15MM Line of Credit",
		date: "October 25, 2024",
		excerpt:
			"A $15MM line of credit was secured for a mid-market services company.",
		body: "A $15MM line of credit was secured for a mid-market services company seeking additional working capital to support a period of steady growth. The facility gave the company the liquidity to manage payroll, vendor payments, and other operating expenses through seasonal fluctuations in revenue. UCP structured the facility with covenants appropriate to the company's size and industry. The line of credit gave management the confidence to pursue new contracts without concern over short-term cash flow gaps.",
	},
];
