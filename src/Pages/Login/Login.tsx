import React, { useState } from "react";


import style from './Login.module.css'

type Props = {};

const Login = (props: Props) => {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Usuário:", user);
    console.log("Senha:", password);
  };

  return (
    <div className={style.container}>

    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="">
        Usuário
        <input
          type="text"
          placeholder="Digite Seu Usuário"
          onChange={(e) => setUser(e.target.value)}
      value={user}

          />
      </label>
      <label htmlFor="">
        Senha
        <input
          type="passWord"
          placeholder="Digite sua Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
      </label>
      <input type="submit" />
    </form>
          </div>
  );
};

export default Login;
