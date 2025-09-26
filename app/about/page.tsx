"use client"

import AboutUsMobile from "@/components/aboutUs/aboutUsMobile";
import AboutUsDesktop from "@/components/aboutUs/aboutUsDesktop";
import {teamData} from "@/dummyData/aboutData";


const AboutPage = () => {

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center p-0 md:p-6 bg-cover bg-center" style={{ backgroundImage: 'url(/bg2.png)' }}>
      <AboutUsDesktop teamData={teamData} />
      <AboutUsMobile teamData={teamData} />
    </div>
  );
};

export default AboutPage;
