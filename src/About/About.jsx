import "./About.css";
import developer from "../assets/developer.png"; // ✅ replaced tulip with developer illustration
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faGithub,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "Express", icon: faNodeJs },
  { name: "MongoDB", icon: faDatabase },
  { name: "Python", icon: faPython },
  { name: "C++", icon: faLaptopCode },
  { name: "JavaScript", icon: faJs },
  { name: "Git", icon: faGitAlt },
  { name: "GitHub", icon: faGithub },
  { name: "MySQL", icon: faDatabase },
];

const h2variant = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, ease: "easeOut" }
};

const pvariant = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, ease: "easeOut" }
};

const imgvariant = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, ease: "easeOut" }
};

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <motion.h2 initial="hidden" animate="visible" variants={h2variant}>
            Hey there! 🌸✨
          </motion.h2>
          <motion.p
            className="intro-para"
            variants={pvariant}
            initial="hidden"
            animate="show"
          >
            I'm a passionate web developer, currently focusing on the MERN stack
            and modern web technologies. I enjoy turning ideas into real
            projects and love solving problems through code. Alongside building
            applications, I continuously practice data structures and algorithms
            to sharpen my logical thinking. Always curious, I explore new tools,
            frameworks, and approaches to grow as a developer every single day.
            🚀💻🔥
          </motion.p>
        </div>
        <motion.div variants={imgvariant} initial="hidden" animate="show">
          <img src={developer} alt="developer-illustration" />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="skills-marquee"
          animate={{ x: ["5%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "linear"
          }}
        >
          <div className="skills-wrapper">
            {skills.concat(skills).map((skill, index) => (
              <span key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
