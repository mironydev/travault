import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import { fetchDestinations } from "./lib/fetch";
import WhyChooseTravault from "@/components/WhyChooseTravault";
import WhatTravelersSay from "@/components/WhatTravelersSay";
import ReadyToStart from "@/components/ReadyToStart";
import AuthToast from "@/components/AuthToast";

export default async function Home() {
  const featuredDestinations = await fetchDestinations();
  const featured = featuredDestinations.slice(0, 5);
  return (
    <div>
      <Banner />
      <Featured featured={featured} />
      <WhyChooseTravault />
      <WhatTravelersSay />
      <ReadyToStart />
      <AuthToast />
    </div>
  );
}
