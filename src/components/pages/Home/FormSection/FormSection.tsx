import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "./FormSection.module.scss";
import Heading from "../../../UI/Heading/Heading";
import InputSecondary from "../../../UI/Input/InputSecondary/InputSecondary";
import Radio from "../../../UI/Radio/Radio";
import LongArrow from "../../../other/Icons/LongArrow";

const FormSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "-200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="form"
    >
      <Heading>Detailed application for Training</Heading>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputSecondary
            required
            title="Name"
            placeholder="Enter your name"
            dark
            name="name"
          />
          <InputSecondary
            required
            title="Age"
            type="number"
            placeholder="Enter Your Age"
            name="age"
            dark
          />
          <InputSecondary
            required
            title="Phone number"
            type="tel"
            placeholder="Enter your phone number"
            dark
            name="tel"
          />
          <InputSecondary
            required
            title="Email"
            type="email"
            placeholder="Enter your Email"
            dark
            name="email"
          />
        </div>
        <div className={styles.buttons}>
          <div>
            <h5>Desired categories</h5>
            <div className={styles.category}>
              <Radio
                required
                title="B (A Car)"
                name="category"
                defaultValue="B"
                dark
              />
              <Radio
                required
                title="C (freight car)"
                name="category"
                defaultValue="C"
                dark
              />
              <Radio
                required
                title="CE (truck with trailer)"
                name="category"
                defaultValue="CE"
                dark
              />
              <Radio
                required
                title="D (bus)"
                name="category"
                defaultValue="D"
                dark
              />
            </div>
          </div>
          <div>
            <h5>Preferred Group</h5>
            <div className={styles.group}>
              <Radio
                required
                title="Morning"
                name="group"
                defaultValue="morning"
                dark
              />
              <Radio
                required
                title="Daytime"
                name="group"
                defaultValue="day"
                dark
              />
              <Radio
                required
                title="Evening"
                name="group"
                defaultValue="evening"
                dark
              />
            </div>
          </div>
        </div>
        <button className={styles.submit}>
          Sign Up <LongArrow />
        </button>
      </form>
    </motion.section>
  );
};

export default FormSection;
