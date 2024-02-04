"use client";
import style from "./component.module.css";
import { useEffect, useState } from "react";

const Toggler = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    let b = document.body;
    if (typeof window !== "undefined" && window.localStorage) {
      const mode = localStorage.getItem("mode");
      if (mode === "dark") {
        b.setAttribute("data-theme", "dark");
        setMode("dark");
      } else if (mode === "light") {
        b.setAttribute("data-theme", "light");
        setMode("light");
      } else {
        localStorage.setItem("mode", "light");
        setMode("light");
      }
    }
  }, []);
  const changeMode = () => {
    const body = document.body;
    if (typeof window !== "undefined" && window.localStorage)
      localStorage.setItem("mode", mode === "light" ? "dark" : "light");
    if (mode === "light") {
      body.setAttribute("data-theme", "dark");
      setMode("dark");
    } else {
      body.setAttribute("data-theme", "light");
      setMode("light");
    }
  };
  return (
    <button onClick={changeMode} id={style.toggle}>
      {mode !== "light" ? "🌞" : "🌚"}
    </button>
  );
};
export default Toggler;
