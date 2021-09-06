import React, { useState, useEffect } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { StyleCard } from "./styles";
import { StyleCadastrados } from "./styles";
const Cadastrados = (props) => {
  const [tipo, setTipo] = useState("nome");
  function enviar(param) {
    props.fun.setTexto(param);
    props.fun.puxardados(param.toUpperCase(), tipo);
  }
  useEffect(() => {
    enviar(props.fun.texto);
  }, [tipo]);
  return (
    <StyleCadastrados className="cadastrados">
      <div className="fundo">
        <FloatingLabel
          controlId="floatingInput"
          label={
            tipo === "nome"
              ? "Pesquisar por nome..."
              : "Pesquisar por descrição..."
          }
          className="mb-3 barraPesquisa"
          onChange={(e) => enviar(e.target.value)}
        >
          <Form.Control
            type="text"
            placeholder={
              tipo === "nome"
                ? "Pesquisar por nome..."
                : "Pesquisar por descrição..."
            }
          />
        </FloatingLabel>
        <div className="opcaoPesquisa">
          <label htmlFor="opcaonome">
            <input
              id="opcaonome"
              type="checkbox"
              name="tipo"
              readOnly
              onClick={() => setTipo("nome")}
              checked={tipo === "nome" ? true : false}
            />
            <span>Nome</span>
          </label>

          <label htmlFor="opcaodescricao">
            <input
              id="opcaodescricao"
              type="checkbox"
              name="tipo"
              readOnly
              onClick={() => setTipo("description")}
              checked={tipo === "description" ? true : false}
            />
            <span>Descrição</span>
          </label>
        </div>
      </div>
      <StyleCard>
        {props.fun.dados.length === 0 ? (
          <span className="erropesquisa">Nenhum resultado encontrado....</span>
        ) : (
          props.fun.dados
        )}
      </StyleCard>
    </StyleCadastrados>
  );
};

export default Cadastrados;
