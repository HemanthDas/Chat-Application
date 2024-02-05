"use client";
import React from "react";
import style from "../page.module.css";
import { usePathname } from "next/navigation";
import ChatBox from "./chatbox";
const ChatList = () => {
  const chat = [
    {
      id: 1,
      name: "John Doe",
      message: "Hello",
    },
    {
      id: 2,
      name: "Jane Doe",
      message: "Hi",
    },
    {
      id: 3,
      name: "John Doe",
      message: "How are you?",
    },
    {
      id: 4,
      name: "Jane Doe",
      message: "I'm good",
    },
    {
      id: 5,
      name: "John Doe",
      message: "Great",
    },
  ];
  return (
    // pathname !== "/moments" && (
    <div id={style.chatlist}>
      {chat.map((item) => (
        <ChatBox key={item.id} name={item.name} message={item.message} />
      ))}
    </div>
  );
  // );
};

export default ChatList;
