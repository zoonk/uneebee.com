import PlayerFeatures from "@/components/PlayerFeatures";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import EditorFeatures from "@/components/EditorFeatures";
import HomeSponsors from "@/components/HomeSponsors";

export const metadata: Metadata = {
  title: "UneeBee | Open-source interactive courses",
  description:
    "UneeBee is an open-source alternative to Duolingo. Easily create interactive courses.",
  twitter: {
    title: "UneeBee",
    description: "An open-source, white-label alternative to Duolingo.",
    creator: "@zoonkeducation",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <PlayerFeatures />
      <EditorFeatures />
      <HomeSponsors />
    </main>
  );
}
