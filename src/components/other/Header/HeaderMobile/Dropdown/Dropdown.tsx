import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

import styles from "./Dropdown.module.scss";
import Button from "../../../../UI/Button/Button";
import Logo from "../../../../UI/Logo/Logo";
import Cross from "../../../Icons/Cross";
import classNames from "classnames";
import { createFocusTrap } from "focus-trap";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { logout } from "@/store/auth/auth.slice";

interface Props {
  isDropdown: boolean;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<Props> = ({ setIsModalShow, isDropdown, setIsDropdown }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useTypedDispatch();
  const { pathname } = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true
    });

    if (isDropdown) trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [isDropdown]);

  return createPortal(
    <div
      className={classNames({
        [styles.overlay]: true,
        [styles.show]: isDropdown
      })}
      onClick={() => setIsDropdown(false)}
    >
      <div
        className={styles.dropdown}
        onClick={(event) => event.stopPropagation()}
        ref={ref}
      >
        <div className={styles.header}>
          <button onClick={() => setIsDropdown(false)}>
            <Logo />
          </button>
          <button onClick={() => setIsDropdown(false)}>
            <Cross />
          </button>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                href="/#categories"
                onClick={() => setIsDropdown(false)}
                scroll={false}
              >
                Tariffs and prices
              </Link>
            </li>
            <li>
              <Link
                href="/#form"
                onClick={() => setIsDropdown(false)}
                scroll={false}
              >
                Training request
              </Link>
            </li>
            <li>
              <Link href="/contacts#header">Contact Us</Link>
            </li>
          </ul>
        </nav>
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
              <Button
                onClick={handleLogout}
                className={styles.profile}
                secondary
              >
                Log Out
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
              onClick={() => setIsModalShow(true)}
              className={styles.authorize}
              secondary
            >
              Authorization
            </Button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("overlay") as HTMLElement
  );
};

export default Dropdown;
