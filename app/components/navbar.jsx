import React from "react";
import style from "../page.module.css";
import Link from "next/link";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import Badge from "@mui/material/Badge";
import GroupIcon from "@mui/icons-material/Group";
import MomentLogo from "./momentLogo";
import Toggler from "./toggler";
const Navbar = () => {
  return (
    <div id={style.navbar}>
      <Link href="/dashboard/direct">
        <Badge variant="dot" color="secondary">
          <ChatBubbleOutlinedIcon
            fontSize="medium"
            sx={{
              color: "#8ad6ff",
            }}
          />
        </Badge>
      </Link>
      <Link href="/dashboard/group">
        <GroupIcon
          fontSize="medium"
          sx={{
            color: "#8ad6ff",
          }}
        />
      </Link>
      <Link href="/dashboard/moments">
        <MomentLogo />
      </Link>
      <Toggler />
    </div>
  );
};

export default Navbar;
