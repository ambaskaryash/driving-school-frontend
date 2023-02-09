import React, { FC } from "react";
import ExitThin from "../../Icons/ExitThin";
import InputPrimary from "../../../UI/Input/InputPrimary/InputPrimary";
import Button from "../../../UI/Button/Button";
import styles from "./RegisterModal.module.scss";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegisterType } from "@/types/auth.types";
import { api } from "@/store/api/api";
import { useRouter } from "next/navigation";

interface Props {
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RegisterFields {
  fio: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterModal: FC<Props> = ({ setIsModalShow, setModalType }) => {
  const [register] = api.useRegisterMutation();
  const router = useRouter();

  const formSchema = Yup.object().shape({
    fio: Yup.string()
      .required("Enter your full name")
      .matches(
        /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/,
        "Please enter a valid full name"
      ),
    phone: Yup.string()
      .required("Enter your phone number")
      .matches(
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
        "Please enter a valid phone number"
      ),
    email: Yup.string()
      .required("Enter your E-mail address")
      .matches(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Enter a valid E-mail"
      ),
    password: Yup.string()
      .required("Enter Password")
      .min(8, "Password must contain at least 8 characters"),
    repeatPassword: Yup.string()
      .required("Confirm the password")
      .oneOf([Yup.ref("password")], "Password Mismatch")
  });
  const validationOpt = { resolver: yupResolver(formSchema) };

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm<RegisterFields>(validationOpt);

  const onSubmit: SubmitHandler<RegisterFields> = (data) => {
    const fio = data.fio.split(" ");

    const body: RegisterType = {
      surname: fio[0],
      name: fio[1],
      patronymic: fio[2],
      ...data
    };

    !fio[2] && Reflect.deleteProperty(body, "patronymic");

    register(body).then((data: any) => {
      if (data.error) {
        if (data.error.status === 404) {
          setError("fio", {
            message: "ㅤ"
          });
          setError("phone", {
            message: "ㅤ"
          });
          setError("email", {
            message: "ㅤ"
          });
          setError("password", {
            message: "ㅤ"
          });
          setError("repeatPassword", {
            message: "Server error. Try Again Later"
          });
        }
        switch (data.error.data.field) {
          case "phone":
            setError("phone", {
              message: data.error.data.message
            });
            break;
          case "email":
            setError("email", {
              message: data.error.data.message
            });
            break;
          default:
            setError("fio", {
              message: "ㅤ"
            });
            setError("phone", {
              message: "ㅤ"
            });
            setError("email", {
              message: "ㅤ"
            });
            setError("password", {
              message: "ㅤ"
            });
            setError("repeatPassword", {
              message: "Server error. Try Again Later"
            });
            break;
        }
      } else {
        router.push("/profile");
      }
    });
  };

  return (
    <div className={styles.register}>
      <div className={styles.top}>
        <h4>Registration</h4>
        <button onClick={() => setIsModalShow(false)}>
          <ExitThin />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.primary}>
        <Controller
          name="fio"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary title="Full name" error={errors.fio?.message} {...field} />
          )}
        />
        <Controller
          name="phone"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="tel"
              title="Phone Number"
              error={errors.phone?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="email"
              title="People. post office"
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
        <Controller
          name="repeatPassword"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <InputPrimary
              type="password"
              title="Confirm the password"
              error={errors.repeatPassword?.message}
              {...field}
            />
          )}
        />
        <Button type="submit" className={styles.register} primary>
        Register
        </Button>
      </form>
      <div className={styles.footer}>
        <p>
          Already have an account?{" "}
          <button onClick={() => setModalType("login")}>Log In</button>
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

export default RegisterModal;
