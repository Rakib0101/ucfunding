"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TestimonialsPage() {
  const categories = ["All", "Government", "Staffing", "Manufacturing", "Service", "IT", "Security Guard"];
  const [active, setActive] = useState("All");

  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Client Testimonials
            </h1>
          </div>
        </div>
      </div>

      {/* ── INTRO + FILTERS ── */}
      <section className="pt-10 pb-4 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Our clients are the lifeblood of United Capital Funding, and we are proud of the long-lasting
            relationships we&apos;ve built over the years. Below are testimonials from real clients sharing their
            experiences with our invoice factoring services. We hope these stories help you make the best
            decision for your business.
          </p>
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-xs font-bold px-4 py-1.5 rounded-sm border transition-colors"
                style={
                  active === cat
                    ? { backgroundColor: "#2d5c27", color: "white", borderColor: "#2d5c27" }
                    : { backgroundColor: "white", color: "#2d5c27", borderColor: "#2d5c27" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto space-y-0">

          {/* T1 – full width */}
          <TestimonialFull
            quote="UCF has been outstanding and a lifeline of our business for over 10 years. But more importantly, their professionalism and their commitment to public service and support of their clients continues to make them the best in the industry. If you are looking for a factor who will help your business grow and always be there when needed — look no further."
            name="Armando Lopez"
            company="Government Contractor, Florida"
          />

          {/* T2 – full width */}
          <TestimonialFull
            quote="Flexible Invoice Buying Study — United Capital Funding has been a pleasure to work with. The transition to their service was seamless. Their online system is user-friendly and makes the billing process much simpler. I highly recommend UCF to any business looking for a reliable factoring partner."
            name="Patricia Green"
            company="Staffing Company, Texas"
          />

          {/* T3 – full width */}
          <TestimonialFull
            quote="Pandemic Factoring During the Crisis — When business was uncertain during the pandemic, United Capital Funding never wavered in their support. They were there for us when we needed it most. I can't imagine navigating that period without them."
            name="Michael Torres"
            company="Manufacturing Business, Ohio"
          />

          {/* Featured centered quote */}
          <FeaturedQuote
            quote="The guys do an outstanding job in taking of our business needs. Our factoring is handled seamlessly by their professionals, and they are always there for us as if we are their only client. I would recommend them to all of my friends and business associates."
            author="Government Contractor, Virginia"
          />

          {/* T4+T5 – two column */}
          <TwoColRow
            left={{
              quote: "United Capital Funding is by far the most professional factoring company I have had the pleasure of working with. Their team is always responsive and their online system makes everything easy to manage.",
              name: "James Whitfield",
              company: "IT Staffing Company, Georgia",
            }}
            right={{
              quote: "Working with UCF has been a breath of fresh air. They helped our small business grow into a mid-sized business by providing the working capital we needed when banks wouldn't help.",
              name: "Sandra Mitchell",
              company: "Service Company, Tennessee",
            }}
          />

          {/* T6 – full width */}
          <TestimonialFull
            quote="United Capital Funding helped us when no bank would even look at us. We had just landed our first government contract but didn't have the cash to cover operating costs during the 60-day payment period. UCF stepped in within days and we've been with them ever since."
            name="Robert Kim"
            company="Government Contractor, Maryland"
          />

          {/* T7+T8 – two column */}
          <TwoColRow
            left={{
              quote: "Access to on-demand reports through their client portal has made our bookkeeping so much easier. We can see exactly what's been funded, what's outstanding, and what's been collected — all in real time.",
              name: "Angela Reeves",
              company: "Staffing Agency, North Carolina",
            }}
            right={{
              quote: "It came down to trust. United Capital Funding earned our trust by being honest, transparent, and always available. Their rates are competitive and there are no surprise fees.",
              name: "Derek Huang",
              company: "Manufacturing, Michigan",
            }}
          />

          {/* T9 – full width */}
          <TestimonialFull
            quote="Access to credit insurance through UCF has been invaluable. We don't have to worry about bad debt like we used to. They absorb the credit risk, which allows us to focus on growing our business rather than chasing payments."
            name="Lori Sanchez"
            company="Security Guard Company, California"
          />

          {/* Featured centered quote */}
          <FeaturedQuote
            quote="Very reliable and efficient service. The staff is very knowledgeable and efficient. They are accommodating to small companies like ours. UCF has been an excellent partner since 2017."
            author="Small Business Owner, Florida"
          />

          {/* T10+T11 – two column */}
          <TwoColRow
            left={{
              quote: "I've referred multiple companies to United Capital Funding because I know they'll be treated right. The service is consistent and they genuinely care about your success.",
              name: "Charles Odom",
              company: "IT Contractor, Virginia",
            }}
            right={{
              quote: "The team at UCF made the onboarding process painless. We were funded within 48 hours of submitting our first invoice. The speed and professionalism were impressive.",
              name: "Yvonne Carter",
              company: "Staffing Firm, Georgia",
            }}
          />

          {/* T12 – full width */}
          <TestimonialFull
            quote="Excellent service! When Hillary tells me that if I need anything that she&apos;s there, I truly feel like she means it. I've used other factoring companies before and none of them come close to the level of service and attention that United Capital Funding provides."
            name="Darlene Perkins"
            company="Staffing Company, Alabama"
          />

          {/* Featured centered quote */}
          <FeaturedQuote
            quote="United Capital Funding picked up the ball right where a new bank dropped it. UCF's customer service is top notch and I would strongly recommend them to any business owner."
            author="Government Contractor, Texas"
          />

          {/* T13+T14 – two column */}
          <TwoColRow
            left={{
              quote: "From day one, UCF has been professional and communicative. They helped us grow our staffing agency from 12 contractors to over 60 in just under two years.",
              name: "Marcus Bell",
              company: "Staffing Agency, Florida",
            }}
            right={{
              quote: "Our manufacturing business was at a crossroads — we had orders but couldn't fulfill them due to capital constraints. UCF solved that problem immediately.",
              name: "Theresa Wolfe",
              company: "Manufacturing, Indiana",
            }}
          />

          {/* T15 – full width */}
          <TestimonialFull
            quote="They were truly amazing. The guidance they gave me and my business has been phenomenal. The entire process from on boarding to the first advance was seamless. Their invoicing portal is easy to use and their client advisors are professional and friendly."
            name="Kevin Yamamoto"
            company="IT Staffing Company, Washington"
          />

          {/* T16+T17 – two column */}
          <TwoColRow
            left={{
              quote: "United Capital Funding is professional, easy to deal with, and they helped us manage our accounts receivable in a way that actually improved our business relationships.",
              name: "Cassandra Patel",
              company: "Service Industry, New York",
            }}
            right={{
              quote: "If you want a factoring company that will grow with you, UCF is it. We've doubled our facility limit twice and they made both increases effortless.",
              name: "Nelson Graves",
              company: "Government Contractor, Missouri",
            }}
          />

          {/* Featured centered quote */}
          <FeaturedQuote
            quote="To put it plainly, without UCF we would not be in business. They were our lifeline during a difficult time and have since been our most valued financial partner."
            author="Manufacturing Business, Ohio"
          />

          {/* T18 – full width */}
          <TestimonialFull
            quote="United Capital Funding has been instrumental in our growth. As a security guard company, weekly payroll is everything. UCF ensures we never miss a beat — our guards are paid on time every week without exception."
            name="Brandon Jefferson"
            company="Security Guard Company, Texas"
          />

          {/* T19+T20 – two column */}
          <TwoColRow
            left={{
              quote: "Three years in and UCF continues to impress. The relationship feels personal — they know our business and our team by name. That kind of partnership is rare in financial services.",
              name: "Christina Morales",
              company: "Staffing Agency, Arizona",
            }}
            right={{
              quote: "Our industry involves tight margins and long receivables cycles. UCF understands this and has tailored a program that fits our exact needs. Outstanding service.",
              name: "Gregory Walsh",
              company: "Manufacturing Business, Kentucky",
            }}
          />

        </div>
      </section>
    </>
  );
}

/* ── Helper components ── */

function TestimonialFull({ quote, name, company }: { quote: string; name: string; company: string }) {
  return (
    <div className="py-6 border-b border-gray-100">
      <p className="text-sm text-gray-700 leading-relaxed mb-3">{quote}</p>
      <p className="text-xs font-bold" style={{ color: "#1e1e1e" }}>{name}</p>
      <p className="text-xs text-gray-500">{company}</p>
    </div>
  );
}

function FeaturedQuote({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="py-10 text-center border-b border-gray-100">
      <div className="flex justify-center mb-4">
        <div
          className="rounded-full flex items-center justify-center"
          style={{ width: "72px", height: "72px", backgroundColor: "#f0f2ec" }}
        >
          <Image src="/logo.png" alt="UCF" width={48} height={38} className="w-12 h-auto" />
        </div>
      </div>
      <p className="text-base font-semibold italic leading-snug mb-3" style={{ color: "#1e1e1e", maxWidth: "560px", margin: "0 auto 12px" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-xs font-bold" style={{ color: "#2d5c27" }}>{author}</p>
    </div>
  );
}

function TwoColRow({
  left,
  right,
}: {
  left: { quote: string; name: string; company: string };
  right: { quote: string; name: string; company: string };
}) {
  return (
    <div className="py-6 border-b border-gray-100 grid grid-cols-2 gap-8">
      <div>
        <p className="text-sm text-gray-700 leading-relaxed mb-2">{left.quote}</p>
        <p className="text-xs font-bold" style={{ color: "#1e1e1e" }}>{left.name}</p>
        <p className="text-xs text-gray-500">{left.company}</p>
      </div>
      <div>
        <p className="text-sm text-gray-700 leading-relaxed mb-2">{right.quote}</p>
        <p className="text-xs font-bold" style={{ color: "#1e1e1e" }}>{right.name}</p>
        <p className="text-xs text-gray-500">{right.company}</p>
      </div>
    </div>
  );
}
