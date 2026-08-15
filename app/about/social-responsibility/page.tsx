"use client";

import Image from "next/image";
import { useState } from "react";

export default function SocialResponsibilityPage() {
  const organizations = [
    "Alex Brown Ministries",
    "The Al Society",
    "American Heart Association",
    "American Red Cross",
    "Amigos de las Americas",
    "Athletics",
    "Angels Against Abuse",
    "Baloncestistas (BPK)",
    "Benedict House",
    "Boys & Girls Clubs of America",
    "Canterbury School of Florida",
    "Central Association of the Miraculous Medal",
    "Chihuly Collection",
    "Children's Dream Fund",
    "Clothes to Kids",
    "Community Action Stops Abuse (CASA)",
    "Community Service Foundation",
    "Circle Bay Network",
    "Daughters of the American Revolution",
    "D8 / J9",
    "DMG School Project",
    "Ducks Unlimited",
    "Eckerd College",
    "Five Star of St. Petersburg",
    "Fields of Honor",
    "Heroes of the St. Pete Police",
    "Holy Family Catholic Church",
    "Humane Society of Tampa Bay",
    "The Leukemia & Lymphoma Society",
    "The Leukemia & Lymphoma Society's Leukemia Cup Regatta",
    "The Luke Foundation",
    "Make-A-Wish Foundation®",
    "Mason Dixon's Christmas Wish Fund",
    "Metropolitan Ministries",
    "Moffitt Cancer Center & Research Institute",
    "Mothers Against Drunk Driving® (MADD)",
    "Morean Arts Center",
    "Muscular Dystrophy Association (MDA)",
    "The Museum of Fine Arts",
    "Northeast Little League",
    "PARC",
    "Police Athletic League",
    "Relay For Life",
    "Ronald McDonald House Charities® of Tampa Bay",
    "Rosacea Retreat",
    "Sacred Heart Catholic School",
    "Salvador Dali Museum",
    "Side Effects Inc.",
    "Society of St. Vincent de Paul",
    "Southeastern Guide Dogs",
    "St. Petersburg Catholic High School",
    "St. Pete Saints Baseball Club",
    "St. Raphael's Catholic Church",
    "Suncoast Hospice",
    "Susan G. Komen for the Cure",
    "Tampa Bay Lightning",
    "Tampa Bay Rays",
    "Tampa Bay Research Institute, Inc.",
    "Tampa Bay Metro, Inc.",
    "Tampa Preparatory School",
    "University of South Florida",
    "Howell City Impact Foundation",
    "Eckerd College Endowment Fund",
    "Navy Seal Foundation",
    "Georgia Police K9 Foundation",
  ];

  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
        <Image
          src="/hero-right.jpg"
          alt="Social Responsibility — United Capital Funding"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex items-end">
          <div
            className="px-8 py-5"
            style={{ background: "rgba(20,40,10,0.72)", minWidth: "260px" }}
          >
            <h1 className="text-3xl font-black leading-tight" style={{ color: "#a8c84a" }}>
              Social<br />Responsibility
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <h2 className="text-2xl font-black mb-4" style={{ color: "#1e1e1e" }}>
            Growing, Sharing, Giving
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Since our formation in 1997, United Capital Funding strives to make a difference in the lives of our
            clients, employees, partners and the communities that we live in. We accomplish this by using our
            capital, knowledge, skills, and resources to make an impact in the community.
          </p>

          {/* Quote block */}
          <div className="flex flex-col items-center text-center mb-10">
            <div
              className="rounded-full flex items-center justify-center mb-4"
              style={{ width: "88px", height: "88px", backgroundColor: "#f0f2ec" }}
            >
              <Image src="/logo.png" alt="United Capital Funding" width={56} height={44} className="w-14 h-auto" />
            </div>
            <p className="text-lg font-semibold leading-snug mb-2" style={{ color: "#1e1e1e", maxWidth: "420px" }}>
              Never worry about numbers. Help one person at a time, and always start with the person nearest you.
            </p>
            <p className="text-sm font-bold" style={{ color: "#2d5c27" }}>Mother Teresa</p>
          </div>

          {/* Body copy */}
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            At United Capital Funding, we believe being a Corporate Citizen is a cornerstone for success. Our
            statement of Cornerstone Business confirms our belief that integrity is the most valuable asset of
            a company. Integrity means being honest; following the &ldquo;golden rule&rdquo; and being a responsible and
            positive contributor to our community. Over the years, United Capital Funding and its employees
            have contributed over half a million dollars in local, regional, national and global giving. United
            Capital Funding supports a wide array of organizations, schools, sports teams, universities, and
            other fundraising efforts.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            <strong>Here are some of the efforts we have supported over years:</strong>
          </p>

          {/* Accordion list */}
          <div className="border-t border-gray-200">
            {organizations.map((org) => {
              const isOpen = open === org;
              return (
                <div key={org} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpen(isOpen ? null : org)}
                    className="w-full flex items-center justify-between px-3 py-3 text-left transition-colors"
                    style={
                      isOpen
                        ? { backgroundColor: "#2d5c27", color: "white" }
                        : { backgroundColor: "white", color: "#1e1e1e" }
                    }
                  >
                    <span className="text-sm font-medium">{org}</span>
                    <span
                      className="w-6 h-6 flex items-center justify-center text-white text-base font-bold shrink-0 ml-3"
                      style={{ backgroundColor: "#2d5c27" }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-3 py-3 text-sm text-gray-600 bg-white border-t border-gray-100">
                      United Capital Funding is proud to support {org} and its mission to strengthen our community.
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
