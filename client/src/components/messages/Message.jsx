import { useSelector } from "react-redux";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const authUser = useSelector((store) => store.authUser.user);
  const { selectedConversation } = useSelector((store) => store.conversations);

  const fromMe = message.senderId === authUser._id;
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe && "bg-blue-500";
  const messageTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake && "shake";

  return (
    <div className={`chat ${chatClass} ${shakeClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}   pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center">
        {messageTime}
      </div>
    </div>
  );
};

export default Message;
