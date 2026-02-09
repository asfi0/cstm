import React from "react";
import Hero from "../components/Hero.jsx";
import PrincipleSection from "../components/Principle.jsx";
import KnowledgeSection from "../components/KnowledgeSection.jsx";
import WhyChooseCollege from "../components/WhyChooseCollege.jsx";
import NoticesAdvertisements from "../components/NoticeAdvertisements.jsx";
import NewsEventsCarousel from "../components/NewsEvents.jsx";
import FacultySection from "../components/FacultyCard.jsx";
import FamousQoutes from "../components/FamousQoutes.jsx";
import CollegeAtAGlance from "../components/CollegeAtGlance.jsx";
function HomeCollge() {
  return (
    <>
      <Hero />
      <PrincipleSection />
      <WhyChooseCollege />
      <FamousQoutes />
      <NoticesAdvertisements />
      <KnowledgeSection />
      <FacultySection />
      <NewsEventsCarousel />
      <CollegeAtAGlance/>
    </>
  );
}

export default HomeCollge;
