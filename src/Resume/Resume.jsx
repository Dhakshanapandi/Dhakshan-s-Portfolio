import Pdf from '../Pdf';
import './Resume.css';
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const hvariant = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, ease: "easeOut", delay: 0.5 }
};

function Resume() {
  return (
    <div className="Resume">
      {/* Header with animation */}
      <motion.div className='header' initial="hidden" animate="visible" variants={hvariant}>
        <h2>My Resume</h2>
        <a href={"/Resume.pdf"} download>
          <button className="download-btn">
            Download <FontAwesomeIcon icon={faDownload} className='icon' />
          </button>
        </a>
      </motion.div>

      {/* Responsive PDF Viewer */}
      <div className='pdf-viewer'>
        <Pdf />
      </div>
    </div>
  );
}

export default Resume;
