import ChatList from "@/app/components/chatlist";
import Navbar from "@/app/components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <ChatList />
      {children}
    </div>
  );
}
