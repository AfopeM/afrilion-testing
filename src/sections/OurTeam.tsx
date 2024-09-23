"use client";
import Image from "next/image";
import MNOdata from "@/data/vendors.json";
import { useState } from "react";
import { useMobileScreen } from "@/hooks/useMobile";
import { useDesktopScreen } from "@/hooks/useDesktop";
import { motion, AnimatePresence } from "framer-motion";
import { Title, Paragraph, Tagline } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const { MNO } = MNOdata;

const whoWeAre = {
  "our vision":
    "To be recognized as a leading consulting firm providing world-class professional services in Africa.",
  "our mission":
    "To deliver top notch professional services and to be a strong and reliable partner in all areas of our business activities.",
  "our values":
    "Client-centric Excellence & Integrity Responsible Innovation Continuous Improvement Reliable & Trusted",
};

export default function OurTeam() {
  const isDesktop = useDesktopScreen();
  const [showMore, setShowMore] = useState(false);

  const isMobile = useMobileScreen();
  const [showMoreTeam, setShowMoreTeam] = useState(false);

  const SeeMoreBtn = () => (
    <button
      onClick={() => setShowMore(!showMore)}
      className="brand-ease group mx-auto mt-6 flex w-fit items-center gap-2 text-xs opacity-50 hover:gap-4 hover:opacity-100"
    >
      <span>{showMore ? "See Less" : "See More"}</span>
      <FontAwesomeIcon
        icon={faArrowUp}
        className={showMore ? "rotate-0" : "rotate-180"}
      />
    </button>
  );

  return (
    <section
      id="our-team"
      className="brand-px brand-py dotted-bglight flex flex-col items-center justify-center gap-y-16"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center">
        <Tagline>Introduction to Afrilion Consulting</Tagline>
        <Title style="w-[400px] lg:w-[700px]">
          Pioneering Telecom Solutions in Africa
        </Title>
      </div>

      <div className="brand-max-w flex flex-col items-center justify-center gap-y-20">
        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid w-full grid-cols-1 items-center justify-center gap-6 text-center lg:grid-cols-2 lg:justify-between lg:gap-10 lg:text-left"
        >
          <div className="relative mx-auto h-[450px] w-full max-w-[450px] overflow-hidden rounded-md bg-dark shadow-lg lg:h-full xl:mx-0">
            <Image
              fill
              alt="founder"
              src={"/founder.png"}
              className="object-cover"
            />
          </div>
          <div className="dotted-bg-light mx-auto max-w-[800px] rounded-md px-10 py-8 shadow-lg">
            <Tagline>Our Founder</Tagline>
            <Title isSub>Kehinde Matilukuro</Title>
            <Paragraph style="pt-4 flex-col flex justify-between gap-4 text-sm">
              <span>
                a distinguished leader and{" "}
                <strong>
                  an Accredited Management Consultant, brings over 25 years of
                  telecom expertise
                </strong>{" "}
                to Afrilion Consulting.
              </span>
              <span>
                Having worked with both vendors and mobile network operators
                (MNOs),{" "}
                <strong>
                  he has spearheaded BSS/OSS transformations for major telecom
                  players in Nigeria.
                </strong>
              </span>
              <AnimatePresence>
                {(showMore || isDesktop) && (
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="block pb-4">
                      <strong>
                        Kehinde&apos;s accomplishments span multiple industries,
                        including Public Sector, Insurance, IT, Banking, and
                        Telecom. As a Huawei-certified expert in project
                        delivery and an MBA holder,
                      </strong>{" "}
                      Kehinde is dedicated to driving innovation with integrity,
                      ensuring that every project achieves excellence.
                    </span>
                    <span>
                      His leadership is rooted in strategic vision and a
                      commitment to fostering sustainable success for clients.
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Paragraph>
            {!isDesktop && <SeeMoreBtn />}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 items-center justify-center gap-6 text-center lg:grid-cols-2 lg:gap-10 lg:text-left"
        >
          <div className="relative h-56 w-full overflow-hidden rounded-md shadow-lg lg:h-full xl:mx-0">
            <Image fill alt="team" src={"/team.jpg"} className="object-cover" />
          </div>
          <div className="dotted-bg-light rounded-md px-10 py-8 shadow-lg lg:col-start-1 lg:row-start-1">
            <Tagline>About Us</Tagline>
            <Title isSub>Dedicated Experts Driving Telecom Innovation</Title>
            <Paragraph style="mt-4 flex-col flex justify-between gap-6 text-sm">
              <span>
                <strong>
                  At Afrilion Consulting, our strength lies in the collective
                  expertise and dedication of our seasoned team.
                </strong>{" "}
                With a diverse background in vendor environments and telecom
                operations, our professionals have led the successful delivery
                of <strong>over 60 mission-critical solutions.</strong>
              </span>
              <AnimatePresence>
                {(showMoreTeam || !isMobile) && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    <span className="block pb-4">
                      Our team is driven by
                      <strong>
                        passion, knowledge, and a deep understanding of the
                        telecom industry and the regulatory landscape in Africa,
                        particularly Nigeria.
                      </strong>
                      Whether it’s deploying BSS/OSS and VAS solutions or
                      streamlining business processes, we bring excellence to
                      every project.
                    </span>
                    <span>
                      We believe in
                      <strong>
                        continuous improvement and responsible innovation,
                      </strong>
                      working hand in hand with our clients to deliver outcomes
                      that matter.
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Paragraph>
            {isMobile && <SeeMoreBtn />}
          </div>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tagline>Who We Are</Tagline>
          <Title isSub>Our Vision, Mission, and Values</Title>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {Object.entries(whoWeAre).map(([key, text]) => {
              return (
                <article
                  key={key}
                  className="dotted-bg-light max-w-sm rounded-md px-10 py-8 shadow-lg"
                >
                  <h4 className="text-lg font-black uppercase">{key}</h4>
                  <Paragraph style="mt-1 flex-col flex justify-between text-sm">
                    {text}
                  </Paragraph>
                </article>
              );
            })}
          </div>
        </motion.div>

        {/* MNO Experience */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl text-center"
        >
          <Tagline>MNO expertise</Tagline>
          <Title style="max-w-xs md:max-w-none mx-auto" isSub>
            Our team is profiencent with these MNO&apos;s
          </Title>
          <span className="mt-4 block h-[1px] w-full bg-primary opacity-45" />
          <div className="flex flex-wrap justify-around justify-items-center md:justify-between">
            {Object.entries(MNO).map(([name, src]) => {
              return (
                <div key={name} className="relative h-32 w-32 xl:h-48 xl:w-48">
                  <Image
                    fill
                    src={src}
                    alt={`${name} logo image`}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
