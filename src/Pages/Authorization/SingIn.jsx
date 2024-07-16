import React from "react";

const SignIn = () => {
    return(
        <div>
            <form>
            <h2>Авторизация</h2>
            <div>
                <input type="text"
                placeholder="Имя"/>
                <input type="text"
                placeholder="Фамилия"/>
                <input type="email"
                placeholder="E-mail"/>
                <input type="password"
                placeholder="Пароль"/>
                <input type="password" 
                placeholder="Повторите пароль"/>
            </div>
            </form>
        </div>
    )
    
}

export default SignIn;