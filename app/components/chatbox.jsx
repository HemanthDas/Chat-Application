import style from "./component.module.css";
const ChatBox = ({ name, message }) => {
  return (
    <div id={style.chatbox}>
      <div></div>
      <div>
        <label className={style.name}>{name}</label>
        <div className={style.message}> {message}</div>
      </div>
    </div>
  );
};
export default ChatBox;
