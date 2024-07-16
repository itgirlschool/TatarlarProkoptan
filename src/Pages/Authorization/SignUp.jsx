import React, { useState } from "react";
import { database } from "../../store";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";


const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Пароли не совпадают");
      return;
    }
    createUserWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          database.ref("users").child(user.uid).set({
            email: user.email,
            displayName: `${name} ${surname}`,
            password: user.password,
          })
        );

        database.ref("users").child(user.uid).push({
            name,
            surname,
            email,
            password,
        })
       .then(() => {
          dispatch(setUsers({[user.uid]: {name, surname, email, password} }));
       });

        console.log("Пользователь успешно зарегался:", user);

        setError("");
        setName("");
        setSurname("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
      })
      .catch((error) => {
        setError(error.message);
        console.error("Ошибка регистрации:", error);
      });
  };

  return (
    <div>
      <form onSubmit={register}>
        <h2>Регистрация</h2>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Фамилия"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          />
          <input
            type="password"
            value={copyPassword}
            onChange={(e) => setCopyPassword(e.target.value)}
            placeholder="Повторите пароль"
          />
          <button type="submit">Зарегистрироваться</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;

