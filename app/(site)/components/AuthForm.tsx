"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";

import { useCallback, useState } from "react";

import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //* Axios Register
    }

    if (variant === "LOGIN") {
      //* NextAuth SignIn
    }

    const socialAction = (action: string) => {
      setIsLoading(true);

      //* NextAuth Social SignIn
    };
  };

  return (
    <div
      className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    
    "
    >
      <div
        className="
        bg-white
        px-4
        py-8
        shadow-md
        sm:rounded-lg
        sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="name" errors={errors} register={register} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            errors={errors}
            register={register}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            errors={errors}
            register={register}
          />
          <div>
            <Button>{variant === "LOGIN" ? "Sign in" : "REGISTER"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;