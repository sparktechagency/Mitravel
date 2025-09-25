
import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import MarketAnimation from "@/components/Pages/Home/MarketAnimation";
import OurMission from "@/components/Pages/Home/OurMission";
import Playstore from "@/components/Pages/Home/Playstore";
import ProblemSolutionComparison from "@/components/Pages/Home/ProblemSolutionComparison";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
      <div id="OurMission" className="pt-5 md:pt-10 lg:pt-20 pb-10">
       <MarketAnimation />
       <OurMission />
      </div>
      <div id="Solution" className="pt-10">
        <ProblemSolutionComparison />
      </div>
      <div id="playStore" className="md:pt-28">
        <div  className="pb-5 md:py-10 lg:pt-10 lg:pb-24 ">
        <Playstore />
      </div>
      </div>
    </section>
  );
};

export default HomePage;
