import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:harisiftikhar109@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">More Information</span>
          </div>
          <ul className={css.menu}>
            <li><a href="https://calendly.com/HarisIftikhar/15min?month=2023-11" style={{ textDecoration: 'none' }} target="_blank">Calendly</a></li>
            <li><a href="https://docs.google.com/document/d/1KTIrkgeIkGirpL9th8MGH_BXa-dy6GGZ2pb_JlLxSjE/edit?usp=sharing" style={{ textDecoration: 'none' }} target="_blank">Resume</a></li>
            <li><a href="mailto:harisiftikhar109@gmail.com" style={{ textDecoration: 'none' }}>Email</a></li>
            <li><a href = "tel:+92304-915-1865" style={{ textDecoration: 'none' }} target="_blank">Phone</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
