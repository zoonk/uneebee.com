/**
 * This component uses the Tailwind UI license:
 *
 * https://tailwindui.com/license
 */

import { IconLayoutDashboard, IconUsers } from "@tabler/icons-react";
import Image from "next/image";

import editor from "@/images/screenshots/editor.png";

const features = [
  {
    name: "Friendly editor.",
    description:
      "Our editor empowers you to create courses with ease. No technical expertise needed. Design, edit, and publish your interactive lessons with a simple, intuitive interface.",
    icon: IconLayoutDashboard,
  },
  {
    name: "Manage students.",
    description:
      "Managing your students is seamless. Track progress, gain insights into learning patterns, and customize courses to fit the unique needs of each learner group.",
    icon: IconUsers,
  },
];

export default function EditorFeatures() {
  return (
    <div className="overflow-hidden mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 max-w-7xl mt-4 px-6 lg:px-8 bg-indigo-50 rounded-lg py-24 sm:py-32">
      <div className="lg:pr-8 lg:max-w-lg">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Teach faster
        </h2>

        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Effortless Content Creation
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          UneeBee lets you quickly build lessons that go beyond watching videos.
          Bring your content to life with real-world scenarios, making it easy
          to create content that’s interactive and impactful. Lead your audience
          through choices that matter, fostering a deeper understanding with
          each step.
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
        src={editor}
        alt="Lesson editor screenshot"
        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
        width={1024}
        height={1149}
        unoptimized
      />
    </div>
  );
}
