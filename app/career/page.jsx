"use client";

import { jobOpenings } from "@/public/data/jobOpenings";
import Link from "next/link";
import React from "react";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-transparent text-gray-100 flex flex-col justify-center">
      {/* Hero Section */}
      <section className="bg-transparent text-white py-14">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Talent Management, we believe in nurturing talent and building a
            dynamic team. If you're passionate about innovation and growth,
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-5 bg-transparent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Current Job Openings
          </h2>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-transparent"
              >
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-500 mb-2">
                  {job.location} • {job.type}
                </p>
                <p>{job.description}</p>
                <Link href={job.googleFormLink} target="blank">
                <button className="mt-4 bg-transparent text-white border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition">
                  Apply Now
                </button>
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="mt-12 mx-auto mb-20">
          <a
            href="#book-now" 
            className="bg-transparent border-2 border-white text-white py-2 px-8 rounded-full text-lg hover:bg-white hover:text-black transition duration-300 mt-44"
          >
            Want to be managed by us ?
          </a>
        </div>

    </main>
  );
}
