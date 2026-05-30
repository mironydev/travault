"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthToast = () => {
  const router = useRouter();
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get("signup") === "success") {
      toast.success("Signup successful");
      hasShown.current = true;
      router.replace(window.location.pathname);
    }
    if (params.get("login") === "success") {
      toast.success("Login successful");
      hasShown.current = true;
      router.replace(window.location.pathname);
    }
  }, [router]);

  return null;
};

export default AuthToast;
