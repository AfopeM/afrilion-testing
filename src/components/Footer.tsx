"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

interface SocialInfo {
  icon: IconDefinition;
  url: string;
}

// Contact information
const contacts = {
  Phone: "+234 803 306 8839",
  Email: "kmatilukuro@gmail.com",
};

// Social media links
const socials: Record<string, SocialInfo> = {
  facebook: {
    icon: faFacebookF,
    url: "https://www.facebook.com/afrilionconsulting",
  },
  LinkedIn: {
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/company/afrilion-consulting/",
  },
};

export default function Footer() {
  const [copiedInfo, setCopiedInfo] = useState<string | null>(null);

  return (
    <footer className="brand-px dotted-bg-dark relative flex h-[700px] flex-col justify-between pt-20 text-center text-background lg:h-[475px]">
      {/* Main Footer Content */}
      <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row lg:items-start">
        {/* Company Information */}
        <section className="max-w-[500px] space-y-4 lg:text-left">
          <div
            className="relative mx-auto block h-24 w-56 lg:mx-0"
            aria-label="Afrilion Consulting logo"
          >
            <Image
              fill
              src="/logo-light.svg"
              alt="Afrilion Consulting"
              className="object-contain"
            />
          </div>
          <p className="font-light leading-6 tracking-wide opacity-75">
            Afrilion Consulting delivers innovative BSS, OSS, and VAS solutions
            for MNOs and MVNOs across Africa. Expert project management, IT
            testing, and business process consulting for telecom excellence.
          </p>
          <span className="hidden text-sm font-light leading-6 tracking-widest opacity-75 md:block">
            <span className="font-bold">Afrilion Consulting</span> is Located in{" "}
            <span className="font-bold">Lagos, Nigeria</span>
          </span>
        </section>

        {/* Contact Information */}
        <section
          aria-label="Contact Information"
          className="flex w-full max-w-[320px] flex-col gap-4 lg:items-end"
        >
          {/* Social Media Links */}
          <nav
            aria-label="Social media links"
            className="brand-ease mx-auto flex h-12 w-36 justify-around lg:mx-0"
          >
            {Object.entries(socials).map(([key, { icon, url }]) => (
              <div key={key} className="relative h-full w-1/3">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${key} page`}
                  className="brand-ease relative z-10 flex h-full w-full items-center justify-center rounded-md border border-background bg-primary hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-2xl text-dark"
                    aria-hidden="true"
                  />
                </Link>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 block h-full w-full translate-x-1 translate-y-1 rounded-md bg-background"
                />
              </div>
            ))}
          </nav>
          {Object.entries(contacts).map(([key, text]) => (
            <button
              key={key}
              onClick={() => {
                navigator.clipboard.writeText(text);
                setCopiedInfo(key);
                setTimeout(() => setCopiedInfo(null), 2000);
              }}
              aria-label={`Copy ${key}: ${text}`}
              className="brand-ease flex w-full items-center gap-4 rounded-lg bg-background px-6 py-4 tracking-wider text-dark hover:scale-105 hover:bg-opacity-10 hover:text-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-0"
            >
              {copiedInfo === key ? (
                <span className="mx-auto text-sm font-bold tracking-widest">
                  Copied!
                </span>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faCopy}
                    aria-hidden="true"
                    className="lg:text-xl"
                  />
                  <div className="space-x-2 text-left text-sm">
                    <strong className="lg:block">{key}</strong>
                    <span>{text}</span>
                  </div>
                </>
              )}
            </button>
          ))}
        </section>
      </div>

      {/* Copyright and Tagline */}
      <section className="border-t border-primary border-opacity-25 py-8 text-sm font-light leading-6 tracking-wide opacity-50">
        <p>
          <span className="block">
            Empowering telecom businesses with innovative solutions, integrity,
            and excellence.
          </span>
          <span className="block">
            © {new Date().getFullYear()} Afrilion Consulting. All Rights
            Reserved.
          </span>
        </p>
      </section>
    </footer>
  );
}
