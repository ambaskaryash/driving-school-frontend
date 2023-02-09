import React, { FC } from "react";

import { motion } from "framer-motion";

import styles from "./ContactsSection.module.scss";

import InputSecondary from "../../../UI/Input/InputSecondary/InputSecondary";
import Button from "../../../UI/Button/Button";
import Arrow from "../../../other/Icons/Arrow";
import Phone from "../../../other/Icons/Phone";
import Mail from "../../../other/Icons/Mail";
import Geo from "../../../other/Icons/Geo";

const ContactsSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <div className={styles.form}>
        <div>
          <h4 className={styles.heading}>Do you have any questions?</h4>
          <p>
            Contact us by sending your name and phone number and as soon as possible
            time the manager will contact you and answer all your questions
          </p>
        </div>
        <form>
          <div>
            <InputSecondary title="Name" placeholder="Enter your name" />
            <InputSecondary
              title="Phone number"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <Button primary>
            Записаться <Arrow />
          </Button>
        </form>
      </div>
      <div className={styles.info}>
        <h5>Contact details</h5>
        <ul>
          <li>
            <span>
              <Phone /> <h6>Call now</h6>
            </span>
            <span>
              <a href="tel:89857751262">+7 (985) 775-12-62</a>
            </span>
            <span>
              <a href="tel:89857755216">+7 (985) 775-52-16</a>
            </span>
          </li>
          <li>
            <span>
              <Mail /> <h6>Email</h6>
            </span>
            <span>
              <a href="mailto:support@autoschool.org">support@autoschool.org</a>
            </span>
            <span>
              <a href="mailto:info@autoschool.org">info@autoschool.org</a>
            </span>
          </li>
          <li>
            <span>
              <Geo /> <h6>Location</h6>
            </span>
            <span>
              <a
                href="https://goo.gl/maps/hZvhRJvsrEzpcc6M6"
                rel="noreferrer"
                target="_blank">
                Rai Town 2, D29, Hingna Rd, near lata Mangeshkar Hospital, near CRPF Camp, Nagpur, Maharashtra

              </a>
            </span>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ContactsSection;
