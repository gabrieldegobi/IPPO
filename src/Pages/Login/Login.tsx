import React, { useEffect, useState } from "react";

import style from "./Login.module.css";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const {loading, login, signup, user } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (cadastrado === true) {
      try {
        
        await signup(email, password, name); // ← AQUI você envia os dados
        console.log("cadastrado com sucesso!");
        navigate("/");
      } catch (err) {
        console.error("Erro ao cadastrar:", err);
      }
    } else {
      try {
        await login(email, password); // ← AQUI você envia os dados
        console.log("Logado com sucesso!");
        navigate("/");
      } catch (err) {
        console.error("Erro ao logar:", err);
      }
    }
  }
console.log(loading)
  const [cadastrado, setCadastrado] = useState<boolean>(true);

  return (
    <div className={style.container}>
      {cadastrado && <h2>Cadastre-se!</h2>}
      {!cadastrado && <h2>Faça seu Login!</h2>}
      <form className={style.form} onSubmit={handleSubmit}>
        {cadastrado && (
          <label htmlFor="">
           Nome de Usuário
            <input
              type="text"
              placeholder="Digite Seu Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        )}
        <label htmlFor="">
          E-mail
          <input
            type="text"
            placeholder="Digite Seu email"
            onChange={(e) => setUser(e.target.value)}
            value={email}
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

        {cadastrado && (
          <button onClick={() => setCadastrado(false)}>
            Já possuo Cadastro
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
