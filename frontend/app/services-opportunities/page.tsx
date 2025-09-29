import { HiOutlineBookOpen } from "react-icons/hi";
import { IoMdBriefcase } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";

const services = [
  {
    icon: HiOutlineBookOpen,
    title: "Educational Support",
    description:
      "Providing resources and guidance to help young people access education and succeed academically.",
    items: [
      "Scholarships & Grants",
      "School Placement Assistance (BECE/SHS)",
      "Internships & National Service",
    ],
  },
  {
    icon: IoMdBriefcase,
    title: "Career & Employment",
    description:
      "Helping youth and job-seekers connect to opportunities, develop entrepreneurial skills, and build sustainable careers.",
    items: [
      "Job Search Assistance",
      "Entrepreneurship & Start-Up Support",
      "CV & Interview Coaching",
    ],
  },
  {
    icon: FaUsers,
    title: "Community & Social Services",
    description:
      "Promoting inclusive development through welfare support and civic engagement.",
    items: [
      "Welfare & Social Intervention Support",
      "Youth & Women Empowerment Programs",
      "Volunteer & Civic Engagement Opportunities",
    ],
  },
  {
    icon: FaRegLightbulb,
    title: "Personal Development",
    description:
      "Equipping individuals with skills, mentorship, and training to unlock their full potential.",
    items: [
      "Mentorship & Educational Counseling",
      "Skill Acquisition & Vocational Training",
      "Workshops & Capacity-Building Sessions",
    ],
  },
  {
    icon: FaInfo,
    title: "Information Hub",
    description:
      "Serving as a reliable source of updates and resources for the community.",
    items: [
      "Updates on Government Programs",
      "Constituency Projects & Initiatives",
      "Public Announcements & Resources",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}

      <section
        style={{
          backgroundImage: "url('/service.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative bg-secondary opacity-85 text-white py-20 px-6 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Services & Opportunities
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Explore the wide range of programs, resources, and initiatives
            available to empower individuals and strengthen our community.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col space-y-4"
          >
            <service.icon className="h-10 w-10 text-secondary" />
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundImage: "url('/service.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="bg-black text-white py-16 px-6 text-center opacity-85">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you’re a student, job-seeker, or community member, these
            services are designed to support your growth. Join us in shaping a
            brighter future together.
          </p>
          <a
            href="/contact-us"
            className="bg-secondary hover:bg-red-600 px-6 py-3 rounded-full font-semibold transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
