import React, { ReactNode, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
  SiAdobephotoshop,
  SiAdobexd,
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

const TimelineBar: React.FC = ({ children }) => (
  <div className="about-section__timeline-bar">{children}</div>
);

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
        <SiAdobephotoshop className="about-section__skill-icon" />
        <SiAdobexd className="about-section__skill-icon" />
      </div>
      <div className="about-section__about">{about?.about}</div>
      <div className="about-section__timeline-table-container">
        <Table borderless>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={2}>
                <TimelineBar>
                  <div className="about-section__timeline-title">Davis Materialworks</div>
                  <div className="about-section__timeline-subtitle">Full Stack Engineer</div>
                </TimelineBar>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td colSpan={3}>
                <TimelineBar>
                  <div className="about-section__timeline-title">PT Poda Husari Digital</div>
                  <div className="about-section__timeline-subtitle">Full Stack Engineer</div>
                </TimelineBar>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={5}>
                <TimelineBar>
                  <div className="about-section__timeline-title"> University of North Sumatra</div>
                  <div className="about-section__timeline-subtitle">
                    Bachelor of Computer Science (3.12 GPA)
                  </div>
                </TimelineBar>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2014/2015</td>
              <td>2016</td>
              <td>2017</td>
              <td>2018</td>
              <td>2019</td>
              <td>2020</td>
              <td>Current</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </CustomSection>
  );
};

export default AboutSection;
