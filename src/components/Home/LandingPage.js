import React from "react";

import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import HomeSection from "./HomeSection";
import Work from "../Work/Work";

import "./Home.scss";

function LandingPage({
  homeRef = null,
  eduRef = null,
  workRef = null,
  projectRef = null,
}) {
  return (
    <section>
      <div ref={homeRef}>
        <HomeSection />
      </div>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={eduRef}>
        <Education />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
    </section>
  );
}

export default LandingPage;
