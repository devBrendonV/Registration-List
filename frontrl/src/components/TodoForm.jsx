import React from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { StyleTodoForm } from "../styles";
const TodoForm = (param) => {
  const props = param.fun;
  const estado = param.estado;

  return (
    <StyleTodoForm>
      <form action="">
        <FloatingLabel
          controlId="floatingInput"
          readOnly
          label="Nome:"
          className="mb-3"
          
        >
          <Form.Control value={estado.nome} type="text" placeholder="Nome:"  onChange={(e) => props.setNome(e.target.value)}/>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email:"
          className="mb-3"
        >
          <Form.Control
            value={estado.email}
            onChange={(e) => props.setEmail(e.target.value)}
            type="email"
            placeholder="Email:"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Idade:"
          className="mb-3"
          
        >
          <Form.Control
            value={estado.idade}
            onChange={(e) => props.setIdade(e.target.value)}
            type="number"
            placeholder="Idade:"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Descrição:"
          className="mb-3"
          
        >
          <Form.Control
            value={estado.descricao}
            onChange={(e) => props.setDescricao(e.target.value)}
            type="text"
            placeholder="Conhecimentos:"
          />
        </FloatingLabel>

        <Button
          type="submit"
          disabled={estado.carregando}
          className={`${estado.carregando ? "processando" : "cadastrar"}`}
          onClick={() => props.cadastrar()}
        >
          {estado.carregando ? "Processando..." : "Cadastrar"}
        </Button>

        <div
          className="cadastrou processar"
          hidden={estado.mensagem === "certo" ? false : true}
        >
          Cadastro realizado com sucesso !!!
        </div>
        <div
          className="errocadastro processar"
          hidden={estado.mensagem === "erro" ? false : true}
        >
          Preencha Todos os Campos !!!
        </div>
      </form>
    </StyleTodoForm>
  );
};

export default TodoForm;
