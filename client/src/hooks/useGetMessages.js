import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setMessages } from "../store/conversationsSlice";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { selectedConversation, messages } = useSelector(
    (store) => store.conversations
  );

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }

        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
