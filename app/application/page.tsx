import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Apply Now | United Capital Funding",
  description: "Start your invoice factoring application with UC Funding. Fast, free, and no obligation.",
};

export default function ApplicationPage() {
  return (
    <>
      <PageHero
        title="Apply for Invoice Factoring"
        subtitle="Complete the form below to begin your application. It's free, with no obligation, and takes just a few minutes."
        breadcrumbs={[{ label: "Application", href: "/application" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div style={{ backgroundColor: "#1a3a6b" }} className="px-8 py-6">
              <h2 className="text-white text-xl font-bold">Business Application</h2>
              <p className="text-blue-300 text-sm mt-1">All fields marked with * are required</p>
            </div>

            <form className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Smith" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Business Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Your Company LLC" required />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="(555) 000-0000" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="john@company.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Industry *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required>
                  <option value="">Select your industry</option>
                  <option>Staffing</option>
                  <option>Government Contracting</option>
                  <option>Manufacturing</option>
                  <option>Service Companies</option>
                  <option>Information Technology</option>
                  <option>Security Guard</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Monthly Invoice Volume *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required>
                  <option value="">Select approximate monthly volume</option>
                  <option>Under $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>$100,000 – $250,000</option>
                  <option>$250,000 – $500,000</option>
                  <option>$500,000 – $1,000,000</option>
                  <option>Over $1,000,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">State *</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="e.g. California" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tell us about your business</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" placeholder="Brief description of your business and why you're interested in factoring..." />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to UC Funding contacting me by phone and email regarding my application. I have read and agree to the <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-base font-bold text-center rounded-lg"
                style={{ background: "#1a3a6b", color: "white" }}
              >
                Submit Application
              </button>

              <p className="text-center text-xs text-gray-500">
                Or call us directly at <a href="tel:8778948232" className="text-blue-600 font-semibold">877-894-8232</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
