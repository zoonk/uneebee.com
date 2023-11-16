import type { Metadata } from "next";

import educasso from "@/images/educasso.svg";
import wikaro from "@/images/wikaro.svg";
import wisek from "@/images/wisek.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import StyledLink from "@/components/StyledLink";

export const metadata: Metadata = {
  title: "Join the waitlist | UneeBee",
  description: "Get 50% off your 1st year by joining the waitlist.",
  twitter: {
    title: "UneeBee Waitlist",
    description: "Join the UneeBee waitlist to get 50% off your 1st year.",
    creator: "@zoonkeducation",
  },
};

const products = [
  {
    name: "For Businesses",
    description:
      "Create interactive courses to teach employees about your business - or engage your customers with hands-on tutorials about your products.",
    href: "https://wikaro.com",
    img: wikaro,
  },
  {
    name: "For schools",
    description:
      "Create fun activities for students and save time with tailored lessons compliant with your curriculum. Your lesson plan will be much easier now.",
    href: "https://educasso.com",
    img: educasso,
  },
  {
    name: "For creators",
    description:
      "Earn money by creating interactive courses about anything. It's much easier and faster than creating video courses.",
    href: "https://mywisek.com",
    img: wisek,
  },
];

export default function WaitlistPage() {
  return (
    <main className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Get 50% off your 1st year
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Join the waitlist
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            UneeBee is an open-source, white-label alternative to Duolingo
            developed by <StyledLink href="https://zoonk.org">Zoonk</StyledLink>
            . You can self-host it using{" "}
            <StyledLink href="https://github.com/zoonk/uneebee">
              our open-source code
            </StyledLink>{" "}
            or choose one of our cloud offerings below.{" "}
            <strong>
              Everyone who joins the waitlist for our cloud offerings will get
              50% off their 1st year.
            </strong>
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
        {products.map((item) => (
          <div
            key={item.name}
            className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 flex-col sm:p-6"
          >
            <Image src={item.img} height={24} unoptimized alt={item.name} />

            <div>
              <h3 className="font-semibold text-gray-900">{item.name}</h3>

              <p className="mt-1 text-gray-600">{item.description}</p>

              <Button href={item.href} color="blue" className="mt-4">
                Join the wailist
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
