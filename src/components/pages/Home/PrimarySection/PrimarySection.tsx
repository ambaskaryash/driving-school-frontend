import React, { FC } from "react";

import styles from "./PrimarySection.module.scss";
import Button from "../../../UI/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import Arrow from "../../../other/Icons/Arrow";

import Image from "next/image";
import { Autoplay } from "swiper";
import Link from "next/link";

import car from "/src/images/oversize/car.png";
import chart from "/src/images/icons/chart.png";
import fleet from "/src/images/icons/fleet.png";
import instructor from "/src/images/icons/instructor.png";
import discount from "/src/images/icons/discount.png";

const PrimarySection: FC = () => {
  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <article className={styles.majorArticle}>
        <h1>Learn to drive in 10 Days</h1>
        <p>
          Learn to drive in 3 months. We provide high quality
          driving lessons since 2000 and graduating over 450 students per month.
        </p>
        <Link href="/#form" scroll={false}>
          <Button primary>
            Sign Up <Arrow />
          </Button>
        </Link>
        <Image src={car} alt="car picture" />
      </article>
      <div className={styles.items}>
        <article>
          <Image src={chart} alt="Graphic" />
          <h4>Graphic</h4>
          <p>Tailored to you</p>
        </article>
        <article>
          <Image src={fleet} alt="Car park" />
          <h4>Car park</h4>
          <p>Updated annually</p>
        </article>
        <article>
          <Image src={instructor} alt="Instructor" />
          <h4>Instructor</h4>
          <p>With at least 5 years experience</p>
        </article>
        <article>
          <Image src={discount} alt="Installments and discounts" />
          <h4>Installments and discounts</h4>
          <p>At 12 pm and student discounts</p>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={chart} alt="Graphic" />
            <h4>Graphic</h4>
            <p>Tailored to you</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={fleet} alt="Car park" />
            <h4>Car park</h4>
            <p>Updated annually</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={instructor} alt="Instructor" />
            <h4>Instructor</h4>
            <p>With at least 5 years experience</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={discount} alt="Installments and discounts" />
            <h4>Installments and discounts</h4>
            <p>At 12 pm and student discounts</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default PrimarySection;
