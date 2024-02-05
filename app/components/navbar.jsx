"use client";
import React from "react";
import style from "../page.module.css";
import Link from "next/link";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import Badge from "@mui/material/Badge";
import GroupIcon from "@mui/icons-material/Group";
import MomentLogo from "./momentLogo";
import Toggler from "./toggler";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const path = usePathname();
  return (
    <div id={style.navbar}>
      <Link href="/direct">
        <Badge variant="dot" color="secondary">
          <ChatBubbleOutlinedIcon
            fontSize="medium"
            sx={
              path === "/direct"
                ? { color: "#8ad6ff" }
                : {
                    color: "white",
                  }
            }
          />
        </Badge>
      </Link>
      <Link href="/group">
        <GroupIcon
          fontSize="medium"
          sx={
            path === "/group"
              ? { color: "#8ad6ff" }
              : {
                  color: "#ffffff",
                }
          }
        />
      </Link>
      <Link href="/moments">
        <MomentLogo color={path === "/moments" ? "#8ad6ff" : "white"} />
      </Link>
      <Toggler />
    </div>
  );
};

export default Navbar;
