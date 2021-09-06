import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  background: #ccc;
  overflow-x: hidden;
  height: 100vh;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const StyleCadastrados = styled.div`
  .cadastrados {
    height: 100%;
  }
  .barraPesquisa {
    color: purple;
    font-size: 20px;
  }
  .opcaoPesquisa {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    width: 90%;
    margin: 10px auto;
  }

  .opcaoPesquisa span {
    padding-left: 10px;
  }
  .opcaoPesquisa label {
    display: inline-block;
  }
  .fundo {
    background-color: rgb(30, 30, 30);
    padding: 10px;
    width: 90%;
    margin: 5px auto;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

export const StyleCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  .erropesquisa {
    font-size: 20px;
    margin-top: 10px;
  }
  button {
    border: 1px solid black;
  }
  .cardTitlee {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid white;
    padding: 5px;
  }
  .cardHeader {
    border: 1px solid black;
    color: black;
    background-color: #ccc;
  }
  .edicao .cardBody{
    border:1px solid white;
    margin: 2px;
  }
  .card {
    /* background: linear-gradient(#0f2027, #203a43, #2c5364); */
    padding: 10px;
    background-color: transparent;
    border: transparent; 
    margin-bottom: 10px;
    
  }
  .edicao{
    background: linear-gradient(#0f2027, #203a43, #2c5364);
    height: 230px;
    
  }
  .semedicao{
    background: linear-gradient(#0f2027, #203a43, #2c5364);
    height: auto;
  }
  .salvar {
    margin: 10px 0 0 185px;
  }
  .alterando {
    margin: 10px 0 0 140px;
  }
  .alterar label{
    display: block;
    
  }
  .alterar input{
    width: 100%;
    margin-bottom: 4px;
  }
  .alterar p{
    text-align: center;
  }
`;

export const StyleTodoForm = styled.div`
  margin: 30px auto;
  font-family: sans-serif;
  color: purple;
  height: 100%;
  .processar {
    padding: 15px;
    color: white;
    font-weight: bold;
    margin: 10px 0;
  }
  .processar.cadastrou {
    background: green;
  }
  .processar.errocadastro {
    background: red;
  }

  @media screen and (min-width: 320px) and (max-width: 766px) {
    max-width: 300px;
    .processando {
      margin: 5px 0 0 55%;
    }
    .cadastrar {
      margin: 5px 0 0 68%;
    }

    input {
      width: 100%;
      margin: auto;
      border-radius: 10px;
    }
    label {
      padding: -5px;
      color: purple;
      font-size: 20px;
      margin: -10px 10% 0 0;
    }

    .processar {
      font-size: 15px;
    }
  }
  @media screen and (min-width: 767px) {
    max-width: 500px;
    .processando {
      margin: 5px 0 0 73%;
    }
    .cadastrar {
      margin: 5px 0 0 80%;
    }
    input {
      width: 100%;
      margin: auto;
      border-radius: 10px;
      font-size: 22px;
    }
    label {
      padding: -5px;
      color: purple;
      font-weight: bold;
      font-size: 25px;
      margin: -10px 10% 0 0;
    }

    .processar {
      padding: 15px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0;
    }
  }
`;
