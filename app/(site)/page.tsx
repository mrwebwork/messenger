import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
    flex 
    flex-col
    items-center
    min-h-full
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100
    "
    >
      <div
        className="
        sm:mx-atuo
        sm:w-full
        sm:max-w-md
        "
      >
        <Image
          alt="Logo"
          width={48}
          height={48}
          sizes="(max-width: 375px) 100vw"
          src="/images/logo.png"
          className="mx-auto"
        />

        <h2
          className="
        my-6
        text-center
        text-3xl
        font-bold
        tracking-tight
        text-gray-900
        "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
