import React, { useState } from "react";
import ceoImage from "@/assets/ceo-image.jpg";
import ctoImage from "@/assets/cto-image.jpg";
import founder1Image from "@/assets/founder-1.jpg";
import founder2Image from "@/assets/founser-2.jpg";

const team = [
  {
    name: "Emmanuel AWA",
    role: "Founder & CEO",
    image: ceoImage,
    bio: [
      "Emmanuel is the Founder/CEO of InsightResolve, a seasoned specialist with a career built across some of the UK’s most respected organisations, including Lloyds Banking Group, AMEX, Tesco HQ, and Places for People.",
      "Beginning in frontline customer‑facing roles, he developed a strong foundation in customer advocacy and service recovery as a Client Service Officer at Amex UK. This early experience shaped their ability to understand customer needs, manage sensitive interactions, and deliver fair, empathetic outcomes.",
      "His expertise deepened through advanced roles in regulated complaint environments, including Complex Complaint Coordinator at Lloyds Banking Group and Complaint/Data Quality Analyst at Places for People UK. In these positions, he led case investigations, ensured FCA‑aligned resolutions, and strengthened data quality frameworks.",
      "His analytical capability expanded further as a Data Analyst with AMEX UK, where they transformed complex datasets into insights that improved operational performance, compliance, and customer experience. Alongside this, he built strong technical foundations as a Certified Software Tester, contributing to system validation, workflow optimisation, and digital transformation initiatives.",
      "With leadership experience as a Customer Service Manager at Tesco HQ UK and an academic background culminating in an MSc in Information Technology from Robert Gordon University, Scotland, Emmanuel brings a rare blend of operational, analytical, and technical expertise. Today, he applies this multidisciplinary skill set to drive InsightResolve —helping organisations achieve clarity, compliance, and customer trust."
    ]
  },
  {
    name: "Gaiya M. Obed",
    role: "CTO",
    image: ctoImage,
    bio: [
      "Gaiya leads the technological vision and strategy at InsightResolve. With a deep passion for building scalable, secure, and compliance-driven systems, he ensures our technology stack remains cutting-edge and robust.",
      "Bringing extensive experience in software architecture and engineering leadership, Gaiya oversees the development of our proprietary intelligence engine, empowering organisations to handle complaints with unprecedented accuracy and speed."
    ]
  },
  {
    name: "Ian Shelter",
    role: "Senior Corporate Counsel",
    image: founder1Image,
    bio: [
      "Ian is a seasoned corporate lawyer with extensive experience advising UK and international clients on commercial law, regulatory compliance, and dispute resolution. His background as a practising barrister gives him a sharp understanding of both courtroom advocacy and strategic business counsel.",
      "He represented clients in complex commercial cases and regulatory hearings, earning a reputation for precision, integrity, and pragmatic problem‑solving. Today, he leads corporate advisory initiatives that help businesses navigate risk, strengthen governance, and achieve sustainable growth.",
      "A member of the Bar Council of England and Wales, Ian embodies InsightResolve’s commitment to excellence, innovation, and trusted legal partnership."
    ]
  },
  {
    name: "Ezinne Ibe",
    role: "Brand Strategist",
    image: founder2Image,
    bio: [
      "Ezinne is a cooperate communication and collaboration consultant. Founder and Business Manager of De‑IbeChimz Multi‑Services. Start-up strategtist with expertise in helping African entrepreneurs through brand story telling.",
      "With experience as a Business Analyst at 7ven Oaks Limited, UK, she brings strong analytical and strategic skills to every project. Ezinne also supports community development as a Training Partner with the Ishk Tolarin Foundation and leads impactful learning programmes as Training Manager at Talent Equip Learning & Development.",
      "As an Accredited Clarity 4D Business Partner, she helps individuals and teams improve communication and collaboration. Her work is strengthened by professional expertise in PRINCE2 and Agile Project Management & Business Analysis, making her a versatile and impactful leader across all areas of the organisation."
    ]
  }
];

export const TeamSection = () => {
  return (
    <section className="section-padding bg-secondary/20 overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="badge-accent mb-4">Our People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A multidisciplinary team of experts in compliance, technology, law, and business strategy, united by the goal of redefining customer service.
          </p>
        </div>

        <div className="space-y-24">
          {team.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={member.name}
                className={`flex flex-col gap-12 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                    <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {member.name}
                          </h3>
                          <p className="text-accent font-medium text-lg">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2 lg:hidden">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-xl mb-6 lg:hidden">
                      {member.role}
                    </p>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      {member.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
