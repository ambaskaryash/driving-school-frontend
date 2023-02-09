import React, { FC } from "react";

import styles from "./HeaderDesktop.module.scss";

import Logo from "../../../UI/Logo/Logo";
import Link from "next/link";
import Button from "../../../UI/Button/Button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { logout } from "@/store/auth/auth.slice";

interface Props {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDesktop: FC<Props> = ({ setIsModalShow }) => {
  const dispatch = useTypedDispatch();
  const { pathname } = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.desktop}>
      <div className={styles.about}>
        <Logo />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/#categories" scroll={false}>
                Tariffs and prices
              </Link>
            </li>
            <li>
              <Link href="/#form" scroll={false}>
                Training request
              </Link>
            </li>
            <li>
              <Link href="/contacts#header">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <Button
          onClick={() => (document.location.href = "tel:89857751262")}
          className={styles.phone}
          primary
        >
          +7 (985) 775-12-62
        </Button>
        {useAuth() ? (
          pathname.includes("profile") ? (
            <Button onClick={handleLogout} className={styles.profile} secondary>
              Выйти
            </Button>
          ) : (
            <Link href="/profile">
              <Button className={styles.profile} secondary>
                Profile
              </Button>
            </Link>
          )
        ) : (
          <Button
            onClick={() => setIsModalShow((prev) => !prev)}
            className={styles.authorize}
            secondary
          >
            Authorization
          </Button>
        )}
      </div>
    </header>
  );
};

export default HeaderDesktop;
