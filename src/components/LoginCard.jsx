"use client";

import { authClient } from "@/app/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LoginCard = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Login successful!");
      router.push("/");
    } else {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-5xl font-extralight mt-8">Welcome Back</h3>
      <p className="text-gray-600 mb-6 mt-2">
        Resume your adventure with Wanderlust
      </p>
      <div className="bg-gray-100 max-w-sm p-8 w-full">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              placeholder="Enter your email address"
              className={"w-full rounded-none outline-0"}
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              className={"w-full rounded-none outline-0"}
            />
            <FieldError />
          </TextField>

          <Button type="submit" className={"bg-cyan-500 rounded-none w-full"}>
            Log In
          </Button>
        </Form>
        <div className="flex items-center w-full gap-4 my-4">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-xs text-gray-500">Or</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>
        <div className=" text-center mb-4">
          <button
            onClick={handleGoogleLogin}
            className="btn rounded-none bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <p className="text-xs text-center -mb-4">
          Don&apos;t have an account?{" "}
          <Link
            href={"/signup"}
            className="underline text-blue-700 hover:text-blue-800 "
          >
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
