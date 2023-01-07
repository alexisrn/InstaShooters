import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://gamesport.com.br/wp-content/uploads/2017/10/textura-preta-edit.jpg");
`;

export const Input = styled.div`
  background-color: black;
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  box-shadow: 1px 1px 1px black;
  @media (max-width: 930px){
    width: 40%
  }
  @media (max-width: 620px){
    width: 60%
  }
  @media (max-width: 400px){
    width: 80%
  }
`;

export const CtnLogo = styled.div`

  h6 {
    font-size:10px;
    text-align: center;
    color: grey;
  }
  span {
    color: #0be0d0;
  }
`;

export const Logo = styled.div`

font-family: "Lobster Two", cursive;
  font-size: 40px;
  font-weight: 900;
  color: white;
  text-align: center;

    @media (max-width: 499px){
      font-size: 35px;
    }
`


export const CtnInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  input {
    margin-left: 10px;
    width: 120%;
    background-color: #181818;
    height: 35px;
    border: none;
    outline: none;
    color: white;
    border-radius: 5px;
    ::placeholder {
      color: grey;
      font-size: 10px;
    }
  }
`;

export const CtnBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 60%;
  h6 {
    font-size: 8px;
    color: grey;
  }

  button {
    cursor: pointer;
    width: 55%;
    border-radius: 5px;
    height: 35px;
    border: none;
    background-color: #0be0d0;
    color: white;
    &:hover {
      background-color: #0be0d0;
      color: white;
      font-weight: bold;
    }
  }
`;

