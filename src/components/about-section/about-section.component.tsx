import React, { useEffect, useState } from "react";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
  FaUnity,
  FaVuejs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiUnrealengine,
  SiWebpack,
} from "react-icons/si";
import { About } from "../../global";
import { firestoreDB } from "../../lib/firebase";
import CustomSection from "../custom-section";
import SectionTitle from "../section-title";

import "./about-section.style.scss";

const AboutSection: React.FC = () => {
  const [about, setAbout] = useState<About>();
  useEffect(() => {
    firestoreDB
      .collection("about")
      .doc("Iqqt0Qvbi1XIgPz0DZUl")
      .onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (data) {
          setAbout({
            name: data.name,
            email: data.email,
            about: data.about,
            github: data.github,
            linkedin: data.linkedin,
          });
        }
      });
  }, []);
  return (
    <CustomSection className="about-section">
      <SectionTitle>About Me</SectionTitle>
      <div className="about-section__skills">
        <FaReact className="about-section__skill-icon" />
        <FaLaravel className="about-section__skill-icon" />
        <FaVuejs className="about-section__skill-icon" />
        <FaAngular className="about-section__skill-icon" />
        <SiTypescript className="about-section__skill-icon" />
        <SiJavascript className="about-section__skill-icon" />
        <FaPhp className="about-section__skill-icon" />
        <FaHtml5 className="about-section__skill-icon" />
        <FaCss3Alt className="about-section__skill-icon" />
        <FaSass className="about-section__skill-icon" />
        <FaNodeJs className="about-section__skill-icon" />
        <SiWebpack className="about-section__skill-icon" />
        <SiFlutter className="about-section__skill-icon" />
        <SiFirebase className="about-section__skill-icon" />
        <SiUnrealengine className="about-section__skill-icon" />
        <FaUnity className="about-section__skill-icon" />
      </div>
      <div className="about-section__about">{about?.about}</div>
    </CustomSection>
  );
};

export default AboutSection;
