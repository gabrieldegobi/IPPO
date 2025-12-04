import React, { useState } from "react";

import style from "./Login.module.css";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { loading, login, signup } = useAuth();
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //validations
    if (name.trim().length === 0) {
      setError("O nome é obrigatorio");
    }

    if (name.trim().length < 6) {
      setError("O nome precisa de pelo menos 6 Caracteres");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Formato de email inválido");
    }

    if (password.length < 6) {
      setError("A senha precisa de pelo menos 6 Caracteres");
    }

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
  console.log(loading);
  const [cadastrado, setCadastrado] = useState<boolean>(true);

  return (
    <div className={style.page}>
      <div className={style.form}>
        <form className={style.container_form} onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor="">
            Senha
            <input
              type="password"
              placeholder="Digite sua Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button className={style.button} type="submit">
            Enviar
          </button>
          {error && <p>{error}</p>}
          {cadastrado && (
            <button
              className={style.button}
              onClick={() => setCadastrado(false)}>
              Já possuo Cadastro
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
