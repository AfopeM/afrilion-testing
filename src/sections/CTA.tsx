"use client";
import { useState } from "react";
import { Tagline, Title, Paragraph, PrimaryButtons } from "@/components";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    serviceOfInterest: "",
    projectDescription: "",
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Full response:", responseData);

      if (response.ok) {
        console.log("Form data sent to Google Sheet successfully");
        // Reset form after successful submit
        setFormData({
          name: "",
          company: "",
          jobTitle: "",
          email: "",
          phone: "",
          country: "",
          serviceOfInterest: "",
          projectDescription: "",
          consent: false,
        });
        setFormSubmitted(true);
      } else {
        throw new Error(`Failed to submit form: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error sending form data to Google Sheet:", error);
      // Show error message to user
    }
  };

  return (
    <section id="cta" className="brand-px brand-py dotted-background">
      <div className="mx-auto max-w-4xl">
        <Tagline>Expert Telecom Consulting</Tagline>
        <Title style="mb-2">
          Transform Your Telecom Business with African Expertise
        </Title>
        <Paragraph style="mb-8">
          Get innovative BSS, OSS & VAS solutions tailored for the African
          market. Partner with Afrilion Consulting for world-class professional
          services that combine global standards with local insights.
        </Paragraph>

        {formSubmitted ? (
          <div className="rounded-md bg-light px-12 py-12 text-center font-bold text-green-500">
            <span className="text:xl block md:text-2xl">
              Thank you for your submission!
            </span>
            <span className="text-lg font-light md:text-xl">
              We will be in touch shortly.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company/Organization"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
                required
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country/Region"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2"
                required
              />
            </div>

            <select
              name="serviceOfInterest"
              value={formData.serviceOfInterest}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2"
              required
            >
              <option value="">Service of Interest</option>
              <option value="BSS/OSS Implementation">
                BSS/OSS Implementation
              </option>
              <option value="VAS Solutions">VAS Solutions</option>
              <option value="Project/Program Management">
                Project/Program Management
              </option>
              <option value="IT Testing Services">IT Testing Services</option>
              <option value="Business Process Consulting">
                Business Process Consulting
              </option>
              <option value="Vendor/Solution Selection">
                Vendor/Solution Selection
              </option>
              <option value="Other">Other (please specify)</option>
            </select>

            <textarea
              name="projectDescription"
              placeholder="Project Description"
              value={formData.projectDescription}
              onChange={handleChange}
              className="h-32 w-full rounded-md border px-4 py-2"
              required
            ></textarea>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="consent">
                I agree to be contacted by Afrilion Consulting
              </label>
            </div>

            <div className="text-center">
              <button type="submit" className="relative w-fit">
                <PrimaryButtons text="Get Expert Consultation" />
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-sm text-gray-600">
          <p className="font-bold">
            Led by an Accredited Management Consultant (AMC) and Fellow of the
            International Management Consultant Board (FIMCB)
          </p>
          <ul className="mt-2 list-inside list-disc">
            <li> 25+ years of telecom industry experience across Africa</li>
            <li>Client-centric approach</li>
            <li>Excellence & Integrity in all we do</li>
            <li>Innovative solutions for the African telecom landscape</li>
          </ul>
          <p className="mt-2">
            Your information is safe with us. We respect your privacy and data
            protection rights.
          </p>
          <p className="mt-2 font-bold">
            Successfully led over 60 critical solution deployments and
            enhancements across Africa
          </p>
        </div>
      </div>
    </section>
  );
}
