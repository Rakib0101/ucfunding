import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact Us | United Capital Funding",
  description: "Get in touch with United Capital Funding. Call us toll free at 877-894-8232 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Our factoring specialists are ready to answer your questions. Reach out today."
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Contact Info */}
            <div>
              <div className="w-14 h-1 bg-yellow-400 mb-6" />
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-sm">Toll Free</p>
                    <a href="tel:8778948232" className="text-blue-900 font-bold text-xl hover:text-yellow-600">877-894-8232</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm">We respond within 1 business day</p>
                    <a href="mailto:info@ucfunding.com" className="text-blue-700 hover:underline">info@ucfunding.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Service Area</h3>
                    <p className="text-gray-600 text-sm">Our factoring services are available nationwide across all 50 states.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Referral Program</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Know a business that could benefit from invoice factoring? Refer them to UC Funding and earn a referral fee. Our referral program rewards accountants, brokers, and business advisors who send us qualified leads.
                </p>
                <a href="/contact/referral" className="btn-secondary mt-4 inline-block text-xs">Learn About Referrals</a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option>General Inquiry</option>
                    <option>Factoring Services</option>
                    <option>Application Status</option>
                    <option>Referral Program</option>
                    <option>Client Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full py-4 font-bold text-white rounded-lg transition-colors" style={{ backgroundColor: "#1a3a6b" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
