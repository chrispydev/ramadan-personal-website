"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const sections = [
  {
    title: "Educational Support",
    items: [
      "Scholarships & Grants",
      "School Placement Assistance (BECE/SHS)",
      "Internships & National Service",
    ],
  },
  {
    title: "Career & Employment",
    items: [
      "Job Search Assistance",
      "Entrepreneurship & Start-Up Support",
      "CV & Interview Coaching",
    ],
  },
  {
    title: "Community & Social Services",
    items: [
      "Welfare & Social Intervention Support",
      "Youth & Women Empowerment Programs",
      "Volunteer & Civic Engagement Opportunities",
    ],
  },
  {
    title: "Personal Development",
    items: [
      "Mentorship & Educational Counseling",
      "Skill Acquisition & Vocational Training",
      "Workshops & Capacity-Building Sessions",
    ],
  },
  {
    title: "Information Hub",
    items: [
      "Updates on Government Programs",
      "Constituency Projects & Initiatives",
      "Public Announcements & Resources",
    ],
  },
];

export default function ServicesDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  // 🚫 Disable background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        {/* Panel (drawer) */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="w-80 max-w-full bg-white p-6 shadow-xl flex flex-col">
                {/* Close Button */}
                <button
                  className="self-end text-gray-600 hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  <FaTimes className="w-6 h-6" />
                </button>

                <Dialog.Title className="text-xl font-bold mb-6">
                  Services & Opportunities
                </Dialog.Title>

                <div className="space-y-6 overflow-y-auto pr-2">
                  {sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-lg mb-2">
                        {section.title}
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
