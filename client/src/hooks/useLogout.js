import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { removeItem } from "../store/authUserSlice";
import { removeAllNotifications } from "../store/notificationsSlice";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      setLoading(true);

      const res = await axios.post("/api/auth/logout");
      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      dispatch(removeItem());
      dispatch(removeAllNotifications());
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
