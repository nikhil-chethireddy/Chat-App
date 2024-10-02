import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../store/conversationsSlice";
import { removeFromNotification } from "../../store/notificationsSlice";

const Conversation = ({ conversation, lastIdx }) => {
  const dispatch = useDispatch();
  const { selectedConversation } = useSelector((store) => store.conversations);
  const { onlineUsers } = useSelector((store) => store.socket);
  const notifications = useSelector((store) => store.notifications);

  const isOnline = onlineUsers.includes(conversation._id);
  const isSelected = selectedConversation?._id === conversation._id;
  const numberOfNotifications = notifications.filter(
    (id) => id === conversation._id
  ).length;

  const handleClick = () => {
    dispatch(setSelectedConversation(conversation));
    dispatch(removeFromNotification(conversation._id));
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected && "bg-sky-500"
        }`}
        onClick={handleClick}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between items-center">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            {numberOfNotifications > 0 && (
              <div className="badge badge-primary">{numberOfNotifications}</div>
            )}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
