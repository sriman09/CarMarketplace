"use client";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function page() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const res = await axios.post("http://localhost:8000/api/login", payload);
      localStorage.setItem("accessToken", res.data.userInfo.accessToken);
      router.push("/dashboard");
    }
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="flex flex-col w-full px-8 md:px-16 gap-4">
      <span className="text-2xl font-bold">Welcome Back</span>
      <span className="text-sm">Please sign in to your Account</span>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={(e) => handleLogin(e)}
      >
        <div className="flex flex-col">
          <span className="text-sm font-bold">Email Address</span>
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 border border-gray-300"
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Password</span>
          <input
            type="password"
            placeholder="Enter your Password"
            className="p-2 border border-gray-300"
            ref={passwordRef}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-md py-2 w-full"
        >
          Sign in
        </button>
      </form>

      <span className="font-bold text-center">
        <Link href={"/forgot-password"} className="hover:text-blue-700">
          Forgot Password?
        </Link>
      </span>
    </div>
  );
}

export default page;
