import './History.css'
import React from "react";
import { motion } from "framer-motion";

const historySecVar = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delay: 0.2
        }
    },
}

const h2variant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, ease: "easeOut" }
}

const pvariant = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, ease: "easeOut" }
}

function History() {
    return (
        <div className="about">
            <motion.h2
                className='intro'
                initial="hidden"
                animate="visible"
                variants={h2variant}
            >
                A brief about my life in education & work.
            </motion.h2>

            <motion.section
                variants={historySecVar}
                initial="hidden"
                animate="show"
                className="history"
            >
                <motion.p variants={pvariant}>
                    Freelancing
                    <p className='title'>Software / Web Development</p>
                    <span className='dates'>2024 - Present</span>
                </motion.p>

                <motion.p variants={pvariant}>
                    Internship
                    <p className='title'>Freshkite</p>
                    <span className='dates'>2022 - 2024</span>
                </motion.p>

                <motion.p variants={pvariant}>
                    Bachelor of Science - Computer Science
                    <p className='title'>PMT College of Arts and Science</p>
                    <span className='dates'>2022 - 2025</span>
                </motion.p>

                <motion.p variants={pvariant}>
                    Fundamentals of Programming in C & Python
                    <p className='title'>Self-Learning</p>
                    <span className='dates'>2022</span>
                </motion.p>

                <motion.p variants={pvariant}>
                    HSC
                    <p className='title'>Higher Secondary Education</p>
                    <span className='dates'>2022</span>
                </motion.p>

                <motion.p variants={pvariant}>
                    SSLC
                    <p className='title'>School Education</p>
                    <span className='dates'>2020</span>
                </motion.p>
            </motion.section>
        </div>
    );
}

export default History;
