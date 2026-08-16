export default function WorkTogetherForm() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "480px" }}>
        {/* Photo placeholder */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a2535 0%, #263548 100%)",
            minHeight: "320px",
          }}
        />

        {/* Form */}
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-4">Work with us</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 400, color: "#111", marginBottom: "28px" }}>
            {"Let's work together."}
          </h2>
          <form className="space-y-6 max-w-sm">
            <input className="form-field" type="text" placeholder="Name" required />
            <input className="form-field" type="text" placeholder="Company Name" />
            <input className="form-field" type="tel" placeholder="Phone Number" />
            <input className="form-field" type="email" placeholder="Email Address" required />
            <textarea className="form-field resize-none" rows={3} placeholder="Message" />
            <div>
              <button type="submit" className="btn-dark mt-2">
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
