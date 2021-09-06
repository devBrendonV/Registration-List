import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

const CardComponent = (param) => {
  const props = param.dados;
  const func = param.fun;
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState();
  const [descricao, setDescricao] = useState();
  useEffect(() => {
    setEmail("");
    setIdade("");
    setDescricao("");
  }, [props.alterando]);
  return (
    <div className="card" key={props._id}>
      <Card
        key={props._id}
        style={{ width: "18rem" }}
        className={`${!props.edit ? "edicao" : "semedicao"}`}
      >
        <Card.Header className="cardHeader">{props.nome}</Card.Header>

        <Card.Body className="cardBody">
          <Card.Title className="cardTitlee">
            <Button
              variant="info"
              onClick={() => func.concluido(props._id, props.done)}
            >
              {props.done ? (
                <i
                  style={{ color: "rgb(20, 4, 250)" }}
                  className="fas fa-thumbs-up"
                ></i>
              ) : (
                <i className="far fa-thumbs-up"></i>
              )}
            </Button>
            <Button
              variant="warning"
              onClick={() => func.editar(props._id, props.edit)}
            >
              <i className="fas fa-user-edit"></i>
            </Button>
            <Button variant="danger" onClick={() => func.deletar(props._id)}>
              <i className="fas fa-trash"></i>
            </Button>
          </Card.Title>
          <span>
            Cadastro:{" "}
            {props.done ? (
              <span style={{ color: "green" }}>Aprovado</span>
            ) : (
              "Em analise..."
            )}{" "}
          </span>
          <Card.Text>
            {props.edit ? (
              ""
            ) : (
              <span>Descrição: {props.description.toLowerCase()} </span>
            )}
          </Card.Text>
        </Card.Body>

        <div className="alterar">
          <div hidden={!props.edit}>
            <div>
              <p>Para alterar, preencha os campos e clique em alterar.</p>
              <label> Email:</label>
              <input
                placeholder={props.email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="idade"> Idade:</label>
              <input
                placeholder={props.idade}
                type="text"
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="descricao"> Descrição:</label>
              <input
                placeholder={props.description.toLowerCase()}
                type="text"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <Button
              variant="info"
              className={!props.alterando ? "salvar" : "alterando"}
              disabled={props.alterando}
              onClick={() =>
                func.alterarDados(
                  props._id,
                  `${email ? email : props.email}`,
                  `${idade ? idade : props.idade}`,
                  `${descricao ? descricao : props.description}`
                )
              }
            >
              {props.alterando ? "Alterando...." : "Alterar"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
