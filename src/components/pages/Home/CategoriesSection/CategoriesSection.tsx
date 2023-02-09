import React, { FC } from "react";

import styles from "./CategoriesSection.module.scss";
import Image from "next/image";
import Button from "../../../UI/Button/Button";
import Arrow from "../../../other/Icons/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import Heading from "../../../UI/Heading/Heading";

import categoryCarB from "/src/images/oversize/category_car_b.jpg";
import categoryCarC from "/src/images/oversize/category_car_c.jpg";
import categoryCarCE from "/src/images/oversize/category_car_ce.jpg";
import categoryCarD from "/src/images/oversize/category_car_d.jpg";

import price from "/src/images/icons/price.png";
import theory from "/src/images/icons/theory.png";
import practice from "/src/images/icons/practice.png";

const CategoriesSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="categories"
    >
      <Heading>Select a category</Heading>
      <div className={styles.categories}>
        <article>
          <h3>
          Category <span>B</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarB} alt="Category B car" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="price icon" />
              <span className={styles.heading}>23 400 ₽</span>
              <span>с Fuel Accounting</span>
            </li>
            <li>
              <Image src={theory} alt="theory icon" />
              <span className={styles.heading}>Theory</span>
              <span>-2 months</span>
            </li>
            <li>
              <Image src={practice} alt="practice icon" />
              <span className={styles.heading}>Practice</span>
              <span>- 1.5 Months</span>
            </li>
          </ul>
          <Button primary>
            Sign up <Arrow />
          </Button>
        </article>
        <article>
          <h3>
            Category <span>C</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarC} alt="Category C car" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="price icon" />
              <span className={styles.heading}>33 500 ₽</span>
              <span>с Fuel accounting</span>
            </li>
            <li>
              <Image src={theory} alt="theory icon" />
              <span className={styles.heading}>Теория</span>
              <span>- 3 Months</span>
            </li>
            <li>
              <Image src={practice} alt="Practice icon" />
              <span className={styles.heading}>Practice</span>
              <span>- 2 Months</span>
            </li>
          </ul>
          <Button primary>
            Sign up <Arrow />
          </Button>
        </article>
        <article>
          <h3>
            Category <span>CE</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarCE} alt="CE category machine" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="price icon" />
              <span className={styles.heading}>45 000 ₽</span>
              <span>с fuel accounting</span>
            </li>
            <li>
              <Image src={theory} alt="theory icon" />
              <span className={styles.heading}>Theory</span>
              <span>- 3 Months</span>
            </li>
            <li>
              <Image src={practice} alt="Practice Icon" />
              <span className={styles.heading}>Practice</span>
              <span>- 2.5 Months</span>
            </li>
          </ul>
          <Button primary>
            Sign up <Arrow />
          </Button>
        </article>
        <article>
          <h3>
            Category <span>D</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarD} alt="Category D car" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="price icon" />
              <span className={styles.heading}>26 000 ₽</span>
              <span>с fuel accounting</span>
            </li>
            <li>
              <Image src={theory} alt="theory icon" />
              <span className={styles.heading}>Theory</span>
              <span>- 3 Months</span>
            </li>
            <li>
              <Image src={practice} alt="Practice icon" />
              <span className={styles.heading}>Practice</span>
              <span>- 2.5 Months</span>
            </li>
          </ul>
          <Button primary>
            Sign Up <Arrow />
          </Button>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Категория <span>B</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarB} alt="Category B car" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="Price icon" />
                <span className={styles.heading}>23 400 ₽</span>
                <span>с fuel accounting</span>
              </li>
              <li>
                <Image src={theory} alt="theory icon" />
                <span className={styles.heading}>Theory</span>
                <span>- 2 Months</span>
              </li>
              <li>
                <Image src={practice} alt="Practice icon" />
                <span className={styles.heading}>Practice</span>
                <span>- 1.5 Months</span>
              </li>
            </ul>
            <Button primary>
              Sign Up <Arrow />
            </Button>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Category <span>C</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarC} alt="Category C car" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="price icon" />
                <span className={styles.heading}>33 500 ₽</span>
                <span>с fuel accounting</span>
              </li>
              <li>
                <Image src={theory} alt="theory icon" />
                <span className={styles.heading}>Theory</span>
                <span>- 3 Monrhts</span>
              </li>
              <li>
                <Image src={practice} alt="practice icon" />
                <span className={styles.heading}>Practice</span>
                <span>- 2 Months</span>
              </li>
            </ul>
            <Button primary>
              Sign Up <Arrow />
            </Button>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Category <span>CE</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarCE} alt="CE category machine" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="price icon" />
                <span className={styles.heading}>45 000 ₽</span>
                <span>с fuel accounting</span>
              </li>
              <li>
                <Image src={theory} alt="theory icon" />
                <span className={styles.heading}>Theory</span>
                <span>- 3 Months</span>
              </li>
              <li>
                <Image src={practice} alt="practice icon" />
                <span className={styles.heading}>Practice</span>
                <span>- 2.5 Months</span>
              </li>
            </ul>
            <Button primary>
              Sign Up <Arrow />
            </Button>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Category <span>D</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarD} alt="Category D car" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="price icon" />
                <span className={styles.heading}>26 000 ₽</span>
                <span>с fuel accounting</span>
              </li>
              <li>
                <Image src={theory} alt="theory icon" />
                <span className={styles.heading}>Theory</span>
                <span>- 3 Months</span>
              </li>
              <li>
                <Image src={practice} alt="practice icon" />
                <span className={styles.heading}>Practice</span>
                <span>- 2.5 Months</span>
              </li>
            </ul>
            <Button primary>
              Sign Up <Arrow />
            </Button>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default CategoriesSection;
