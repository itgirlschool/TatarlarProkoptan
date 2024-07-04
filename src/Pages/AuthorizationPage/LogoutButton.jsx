import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../store/slice/UserAuthSlice.js";
import { auth } from "../../main.jsx";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(clearUser());
      alert("Вы успешно вышли из системы");
    } catch (error) {
      alert("Ошибка выхода: " + error.message);
    }
  };

  return <button onClick={handleLogout}>Выйти</button>;
};

export default LogoutButton;
