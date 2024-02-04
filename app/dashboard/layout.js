import style from "../page.module.css";
import Navbar from "../components/navbar";
import ChatList from "../components/chatlist";
const rootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body id={style.body} suppressHydrationWarning={true}>
        <Navbar />
        <ChatList />
        {children}
      </body>
    </html>
  );
};
export default rootLayout;
