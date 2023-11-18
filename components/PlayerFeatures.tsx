/**
 * This component uses the Tailwind UI license:
 *
 * https://tailwindui.com/license
 */

import { IconThumbUp, IconTrophy } from "@tabler/icons-react";
import Image from "next/image";

import playImage from "@/images/screenshots/play.png";

const features = [
  {
    name: "Gamification.",
    description:
      "Turn education into an adventure. From progress tracking to reward systems, we keep learners motivated and engaged.",
    icon: IconTrophy,
  },
  {
    name: "Custom feedback.",
    description:
      "Provide instant, personalized feedback. Each lesson response can trigger tailored feedback, reinforcing concepts and guiding learners through complex ideas with ease and clarity.",
    icon: IconThumbUp,
  },
];

export default function PlayerFeatures() {
  return (
    <div className="overflow-hidden mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 max-w-7xl px-6 lg:px-8 bg-slate-50 rounded-lg py-8 lg:py-32">
      <div className="lg:pr-8 lg:max-w-lg">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Better learning
        </h2>

        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Interactive Lessons
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Use the power of learning by doing with interactive lessons. Our
          platform brings scenarios to life, allowing learners to engage with
          content, make decisions, and see real-time consequences of their
          choices.
        </p>

        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Image
        src={playImage}
        alt="Screenshot of the course list"
        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        width={1024}
        height={805}
        unoptimized
      />
    </div>
  );
}
