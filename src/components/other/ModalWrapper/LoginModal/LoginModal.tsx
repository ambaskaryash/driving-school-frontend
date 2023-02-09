import React, { FC } from "react";
import styles from "./LoginModal.module.scss";
import ExitThin from "../../Icons/ExitThin";
import InputPrimary from "../../../UI/Input/InputPrimary/InputPrimary";
import Button from "../../../UI/Button/Button";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginType } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { api } from "@/store/api/api";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginFields extends LoginType {}

const LoginModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  const router = useRouter();
  const [login] = api.useLoginMutation();

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Enter Email")
      .matches(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Enter a valid E-mail"
      ),
    password: Yup.string()
      .required("Enter Password")
      .min(8, "Password must contain at least 8 characters")
  });
  const validationOpt = { resolver: yupResolver(formSchema) };

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm<LoginFields>(validationOpt);

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data)
      .then((data: any) => {
        if (data.error) {
          if (data.error.status === 404) {
            setError("email", {
              message: "ㅤ"
            });
            setError("password", {
              message: "Server error. Try Again Later"
            });
          }
          switch (data.error.data.field) {
            case "password":
              setError("password", {
                message: data.error.data.message
              });
              break;
            case "all":
              setError("email", {
                message: "ㅤ"
              });
              setError("password", {
                message: data.error.data.message
              });
              break;
            default:
              setError("email", {
                message: "ㅤ"
              });
              setError("password", {
                message: "Server error. Try Again Later"
              });
              break;
          }
        } else {
          router.push("/profile");
        }
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className={styles.login}>
      <div className={styles.top}>
        <h4>Вход</h4>
        <button onClick={() => setIsModalShow(false)}>
          <ExitThin />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.primary}>
        <Controller
          name="email"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="email"
              title="Email"
              error={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="password"
              title="Password"
              error={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button type="submit" className={styles.auth} primary>
          Войти
        </Button>
      </form>
      <div className={styles.footer}>
        <p>
          New user?{" "}
          <button onClick={() => setModalType("register")}>
            Register
          </button>
        </p>
        <p className={styles.info}>
          Entering data confirms your consent с{" "}
          <Link href={"/"}>Privacy Policy</Link> и{" "}
          <Link href={"/"}>Processing of personal data</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
