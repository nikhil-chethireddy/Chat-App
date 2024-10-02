import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationsSlice";
import notificationSound from "../assets/sound/notification.mp3";
import { addToNotification } from "../store/notificationsSlice";

const useListenMessages = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages, selectedConversation } = useSelector(
    (store) => store.conversations
  );
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (data) => {
      const sound = new Audio(notificationSound);
      sound.play();
      if (selectedConversation && data.senderId === selectedConversation._id) {
        data.newMessage.shouldShake = true;
        dispatch(setMessages([...messages, data.newMessage]));
      } else {
        dispatch(addToNotification(data.senderId));
      }
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages, selectedConversation]);
};

export default useListenMessages;
