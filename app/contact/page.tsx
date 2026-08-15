import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | United Capital Funding",
  description: "Get in touch with United Capital Funding. Call us toll free at 877-894-8232 or send us a message.",
};

const locations = [
  {
    city: "Headquarters",
    address: "146 Second Street North, Ste 200\nSt. Petersburg, FL 33701",
    role: "Main Office",
    phone: "877-894-8232",
    email: "info@ucfunding.com",
    directions: true,
  },
  {
    city: "St. Petersburg, FL",
    address: "St. Petersburg, FL 33701",
    name: "Joshua Register",
    role: "Business Development Officer",
    email: "josh@ucfunding.com",
    directions: false,
  },
  {
    city: "Chicago, IL",
    address: "401 N Michigan Ave, Ste 1200\nChicago, IL 60611",
    name: "Nancy Kalman",
    role: "Senior Business Development Officer",
    email: "nancykalman@ucfunding.com",
    directions: true,
  },
  {
    city: "Nashville, TN",
    address: "4525 Harding Pike, Suite 256\nNashville, TN 37205",
    name: "Matt Perkins",
    role: "Senior Business Development Officer",
    email: "matt@ucfunding.com",
    directions: true,
  },
  {
    city: "Columbus, OH",
    address: "Columbus, OH",
    name: "Renee Tyack",
    role: "Vice President, Sales",
    email: "renee@ucfunding.com",
    directions: false,
  },
  {
    city: "Los Angeles, CA",
    address: "Los Angeles, CA",
    name: "Neisha Pereira",
    role: "Vice President, West Region",
    email: "Neisha@ucfunding.com",
    directions: false,
  },
  {
    city: "Charleston, SC",
    address: "Charleston, SC",
    name: "Nicholas Pittas",
    role: "National Sales Manager",
    email: "Nicholas@ucfunding.com",
    directions: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
        <Image
          src="/hero-right.jpg"
          alt="Contact Us — United Capital Funding team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay on left with text */}
        <Link href="/application" className="absolute top-0 right-0 text-white text-sm font-bold px-5 py-3 z-10" style={{ backgroundColor: "#2d5c27" }}>
          Apply Now ›
        </Link>
        <div className="absolute inset-0 flex items-end">
          <div className="px-8 py-5" style={{ background: "rgba(20,40,10,0.72)", minWidth: "220px" }}>
            <h1 className="text-3xl font-black" style={{ color: "#a8c84a" }}>
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* ── CONNECT SECTION ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "#1e1e1e" }}>
            Connect with United Capital Funding
          </h2>

          {/* Fraud notice */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#444" }}>
            <span
              className="font-bold"
              style={{ backgroundColor: "#d4e84a", padding: "0 3px" }}
            >
              Did you receive a fax from &ldquo;United Capital&rdquo;?
            </span>{" "}
            These communications are <strong>not affiliated</strong> with our company, United Capital Funding.
            Read more and learn how to report suspected fraud here:{" "}
            <a
              href="https://ucfunding.com/unitedcapitalfax/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ucfunding.com/unitedcapitalfax/
            </a>
          </p>

          {/* Form card */}
          <div className="border border-gray-300 rounded p-6 mb-4">
            <p className="text-sm text-gray-600 mb-4">
              Please fill out the form below and a representative will be in touch with you.
            </p>

            <form className="space-y-3">
              {/* Row 1: First / Last name */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
              </div>

              {/* Row 2: Company */}
              <input
                type="text"
                placeholder="Company name"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
              />

              {/* Row 3: Email / Phone */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
              </div>

              {/* Row 4: State select / Industry */}
              <div className="grid grid-cols-2 gap-3">
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-green-600">
                  <option value="">Please select...</option>
                  <option>Alabama</option><option>Alaska</option><option>Arizona</option>
                  <option>Arkansas</option><option>California</option><option>Colorado</option>
                  <option>Connecticut</option><option>Delaware</option><option>Florida</option>
                  <option>Georgia</option><option>Hawaii</option><option>Idaho</option>
                  <option>Illinois</option><option>Indiana</option><option>Iowa</option>
                  <option>Kansas</option><option>Kentucky</option><option>Louisiana</option>
                  <option>Maine</option><option>Maryland</option><option>Massachusetts</option>
                  <option>Michigan</option><option>Minnesota</option><option>Mississippi</option>
                  <option>Missouri</option><option>Montana</option><option>Nebraska</option>
                  <option>Nevada</option><option>New Hampshire</option><option>New Jersey</option>
                  <option>New Mexico</option><option>New York</option><option>North Carolina</option>
                  <option>North Dakota</option><option>Ohio</option><option>Oklahoma</option>
                  <option>Oregon</option><option>Pennsylvania</option><option>Rhode Island</option>
                  <option>South Carolina</option><option>South Dakota</option><option>Tennessee</option>
                  <option>Texas</option><option>Utah</option><option>Vermont</option>
                  <option>Virginia</option><option>Washington</option><option>West Virginia</option>
                  <option>Wisconsin</option><option>Wyoming</option>
                </select>
                <input
                  type="text"
                  placeholder="Type of business (industry)?"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
              </div>

              {/* Row 5: How did you hear */}
              <div>
                <label className="text-xs text-gray-500 block mb-1">How did you hear about us? *</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-green-600">
                  <option value="">Please select...</option>
                  <option>Google / Search Engine</option>
                  <option>Referral</option>
                  <option>LinkedIn</option>
                  <option>Facebook</option>
                  <option>Trade Show / Conference</option>
                  <option>Email</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Legal text */}
              <p className="text-xs text-gray-500 leading-relaxed">
                By providing your contact information you are authorizing United Capital Funding, or its
                affiliates including Gulf Coast Bank &amp; Trust, AmerifactorS, Gulf Coast Business Credit,
                KLC Financial, Phoenix Capital Group, Seven Oaks Capital Associates, and Spectrum Commercial
                Services to contact you. Authorization includes the use of text messaging and automated
                telephone dialing systems in connection with calls made to the number you provide. Please
                contact us at anytime to change your preferences. Additional data rates may apply.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, you acknowledge you are over the age of 13 and approve submission
                of the above information.
              </p>

              {/* reCAPTCHA placeholder */}
              <div className="border border-gray-300 rounded p-3 flex items-center gap-4 bg-gray-50" style={{ maxWidth: "300px" }}>
                <input type="checkbox" id="robot" className="w-5 h-5" />
                <label htmlFor="robot" className="text-sm text-gray-700 select-none">I&apos;m not a robot</label>
                <div className="ml-auto text-right">
                  <div className="text-xs text-gray-400 leading-tight">reCAPTCHA</div>
                  <div className="text-xs text-gray-400">Privacy - Terms</div>
                </div>
              </div>
              <p className="text-xs text-gray-400">reCAPTCHA helps prevent automated form spam.</p>
              <p className="text-xs text-gray-400">The submit button will be disabled until you complete the CAPTCHA.</p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 font-bold text-white text-sm rounded transition-colors"
                style={{ backgroundColor: "#555" }}
              >
                Connect
              </button>
            </form>
          </div>

          {/* Contact Information link */}
          <div className="text-center">
            <a href="#locations" className="text-sm text-gray-500 hover:underline">
              Contact Information
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR LOCATIONS ── */}
      <section id="locations" className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: "#1e1e1e" }}>
            Our Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="p-5 rounded"
                style={{ backgroundColor: "#f0f2ec" }}
              >
                <h3 className="font-black text-sm mb-2" style={{ color: "#1e1e1e" }}>
                  {loc.city}
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line mb-2">{loc.address}</p>

                {loc.name && (
                  <p className="text-sm font-semibold text-gray-800">{loc.name}</p>
                )}
                {loc.role && (
                  <p className="text-sm text-gray-600 mb-1">{loc.role}</p>
                )}
                {loc.phone && (
                  <p className="text-sm mb-1">
                    <a href={`tel:${loc.phone.replace(/-/g, "")}`} className="text-gray-700">
                      {loc.phone}
                    </a>
                  </p>
                )}
                {loc.email && (
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-sm"
                    style={{ color: "#2d5c27" }}
                  >
                    {loc.email}
                  </a>
                )}
                {loc.directions && (
                  <div className="mt-2">
                    <Link
                      href="#"
                      className="text-sm font-semibold"
                      style={{ color: "#2d5c27" }}
                    >
                      Get Directions &rsaquo;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
