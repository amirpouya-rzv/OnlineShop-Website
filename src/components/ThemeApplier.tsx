"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/redux/reduxHooks";

export default function ThemeApplier() {
  const theme = useAppSelector((state) => state.uiManager.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return null;
}
