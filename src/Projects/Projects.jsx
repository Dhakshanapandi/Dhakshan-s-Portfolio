import './Projects.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCode, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";

const projectSecVar = {
  hidden : {opacity:0},
  visible: {
      opacity:1,
      transition :{
          staggerChildren : 0.5,
          delay :0.2
      }
  },
}

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

function Projects() {
  return (
    <div className="projects">
      <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>Projects I have worked on.</motion.h2>
      <motion.section initial="hidden" animate="visible" variants={projectSecVar}>
        
        {/* Smart Billing System */}
        <motion.div className="project" variants={h2variant}>
          <a href="https://smart-billing-system.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h2>Smart Billing System</h2>
          </a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon"/>
            A full-stack billing system with invoice generation, dashboards, analytics, and secure authentication.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            MERN Stack (MongoDB, Express, React, Node.js)
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/Dhakshanapandi/smart-billing-system.git" target="_blank" rel="noopener noreferrer"> Git Repository</a>
          </p>
          <div className="credentials">
            <p><strong>Admin Credential:</strong> <br/> Username: <code>admin@example.com</code> <br/> Password: <code>123456</code></p>
            <p><strong>Staff Credential:</strong> <br/> Username: <code>pandi@gmail.com</code> <br/> Password: <code>123456</code></p>
          </div>
        </motion.div>

        {/* Casino Dashboard */}
        <motion.div className="project" variants={h2variant}>
          <a href="#" target="_blank" rel="noopener noreferrer"><h2>Casino Dashboard</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
            An interactive casino dashboard with analytics and real-time tracking.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            React, Node.js
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/Dhakshanapandi/Casino-Dashboard.git" target="_blank" rel="noopener noreferrer"> Git Repository</a>
          </p>
        </motion.div>

        {/* MERN Auth System */}
        <motion.div className="project" variants={h2variant}>
          <a href="#" target="_blank" rel="noopener noreferrer"><h2>MERN Auth System</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
            A secure authentication system with JWT-based login, signup, and password recovery features.  
            Built for modern web applications requiring robust user management.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            MERN Stack (MongoDB, Express, React, Node.js), JWT
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/Dhakshanapandi/MERN-Auth-System-JWT-PasswordRecovery.git" target="_blank" rel="noopener noreferrer"> Git Repository</a>
          </p>
        </motion.div>

        {/* Indian Stock Market Average Calculator */}
        <motion.div className="project" variants={h2variant}>
          <a href="#" target="_blank" rel="noopener noreferrer"><h2>Indian Stock Market Average Calculator</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
            A stock market utility tool to calculate the average buying price of multiple stock entries.  
            Helps investors quickly track and manage average costs for better decision-making.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            React, JavaScript
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/Dhakshanapandi/indian-stock-market-Average-calculator.git" target="_blank" rel="noopener noreferrer"> Git Repository</a>
          </p>
        </motion.div>

      </motion.section>
    </div>
  );
}

export default Projects;
