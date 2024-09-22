import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./CharityAdminPage.module.scss";

const CharityAdminPage = () => {
  const users = useSelector((state) => state.charity.users);
  const [sortOrder, setSortOrder] = useState("desc");

  const sortUsers = (users, sortOrder) => {
    return users.slice().sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };

  const sortedUsers = sortUsers(users || [], sortOrder);

  return (
    <div className={style.page}>
      <h1>Админская страница благотворительности</h1>
      <h2>Количество волонтеров: {sortedUsers ? sortedUsers.length : 0}</h2>
      <div className={style.sort__buttons}>
        <button onClick={() => setSortOrder("asc")}>
          Сортировать по дате (возрастание)
        </button>
        <button onClick={() => setSortOrder("desc")}>
          Сортировать по дате (убывание)
        </button>
      </div>
      <h3>Список волонтеров:</h3>
      <div className={style.container}>
        {sortedUsers && sortedUsers.length > 0 ? (
          <ol className={style.user__list}>
            {sortedUsers.map((user, index) => (
              <li key={index}>
                <div className={style.user__info}>
                  <span>
                    {user.lastName} {user.firstName} {user.middleName}
                  </span>
                  <span>
                    {user.phone} | {user.email}
                  </span>
                </div>
                <div className={style.created__at}>
                  Дата регистрации: {user.createdAt}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p>Нет волонтеров для отображения.</p>
        )}
      </div>

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={style.button__top}
      >
        ↑
      </button>
    </div>
  );
};
export default CharityAdminPage;
