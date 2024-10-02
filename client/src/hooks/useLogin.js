import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setItem } from "../store/authUserSlice";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const sucess = handleErrorLogin({ username, password });

      if (!sucess) return;

      const res = await axios.post("/api/auth/login", {
        username,
        password,
      });

      const data = res.data;

      if (data.error) {
        throw new Error(data.Error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      dispatch(setItem(data));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleErrorLogin = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
