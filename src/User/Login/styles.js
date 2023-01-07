import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://gamesport.com.br/wp-content/uploads/2017/10/textura-preta-edit.jpg");
  color: grey;
  @media (max-width: 550px) {
    width: 100%;

  }
`;

export const CtnLogin = styled.div`
  height: 80%;
  width: 30%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px black;

  @media (max-width: 850px) {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
  }
  @media (max-width: 550px) {
    width: 80%;
    height: 80%;
  }
 

`;

export const CtnInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  @media (max-width: 850px) {
    width: 60%;
  }
  
`;

export const Logo = styled.div`
  font-family: "Lobster Two", cursive;
  font-size: 40px;
  font-weight: 900;
  color: white;
  text-align: center;
  padding: 35px 0;
  margin-right: 10px;

  span {
    color: #0be0d0;
  }
  @media (max-width: 850px) {
    margin-top: 50px;
    font-size: 30px;
  }
  @media (max-width: 550px) {
    margin-top: 10px;
    font-size: 30px;
  }
  @media (max-width: 400px) {
    margin-top: 10px;
    font-size: 30px;
  }
`;

export const CtnImg = styled.div`
  height: 80%;
  width: 45%;
  background-color: grey;

  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const CtnInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  label{
    font-size:14px;
    position: absolute;
    left: 110px;
    bottom:40px;
    cursor: text;
    transition: 0.5s ease-in-out;
  }

`;

export const Input = styled.input`
    width: 50%;
    padding: 15px;
    background-color: #181818;
    color:white;
    border-radius: 5px;
    border: 0;
    outline: 0;
    margin-bottom: 25px;

    &:valid{
      border: 1px solid #0be0d0;
    }
    &:valid ~ label {
    transform: translateY(-35px);
    font-size:14px;
    color:#0be0d0;
  }


`;

export const ButtonLogin = styled.button`
cursor: pointer;
width: 57%;
padding: 15px;
border-radius: 5px;
border: none;
background-color:#0be0d0;
color: white;
font-weight: bold;

&:hover{
  background-color: #04AB9E ;
}
`

export const Line = styled.div`
display: flex;
justify-content: center;
align-items: center;
column-gap:10px;
padding: 10px;
margin-top: 15px;
hr{
  width: 105px;
  border-color: #181818;
}
`

export const ButtonRegister = styled.button`
cursor: pointer;
width: 57%;
padding: 14px;
margin-left:2px;
margin-top: 20px;
border: none;
border-radius: 5px;
background-color: #181818;
color:#0be0d0;
font-weight: bold;
&:hover{
  background-color: #0be0d0;
  color:white;
}
`