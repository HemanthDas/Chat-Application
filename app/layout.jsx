import style from "./page.module.css";
import Navbar from "./components/navbar";
import ChatList from "./components/chatlist";
import "./globals.css";
import { usePathname } from "next/navigation";
export const metadata = {
  title: "Chat App",
  description: "Chat App with Next.js and CSS Modules",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body id={style.body} suppressHydrationWarning={true}>
        <Navbar />
        <main className={style.main}>
          <ChatList />
          {children}
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
