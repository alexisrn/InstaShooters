import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("https://cutewallpaper.org/23/almost-black-wallpaper/305331226.jpg");
  //https://steamuserimages-a.akamaihd.net/ugc/776155680297661064/95033B6CF278BEB9C0B9988A0BC5302AA15CDE40/

  .menu{
     opacity: 0;
}
.menu.active{
    opacity: 1;
    visibility: visible;
}
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  input {
    margin-left: 30px;
    width: 220px;
    height: 30px;
    border: none;
    border-radius: 10px;
  }

  button {
    border: none;
    border-radius: 30px;
    width: 60px;
    height: 60px;
  }

 
`;

export const Plataforms = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  position: fixed;
  center: fixed;
  top: 20%;
  left: 25%;

  border: 0.1rem solid #0be0d0;
  border-radius: 10px;
  background-color: #00050f;
  opacity: 95%;

  width: 50%;
  height: 70%;

  display: flex;
  flex-direction: column;

`;
export const ButtonCloseModal = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonUser = styled.button`
border:none;
background-color: transparent;
font-size:35px;
color:white;
cursor: pointer;
padding:10px;

`


export const Nav = styled.nav`

`
export const CtnClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 5px;
`;

export const PainelUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:40px;
 

  img{
    width:30%;
    height: auto;
  }

  p{
    border-top: 3px solid #0be0d0;
    padding: 10px 0;
    text-align: center;
    font-size:13px;
    cursor: pointer;
    color:grey;
  }


`;


export const MenuButton = styled.button`
border:none;
background-color:transparent;
color:white;
font-size:35px;
cursor:pointer;

`

export const Link = styled.div`
cursor:pointer;
text-decoration:none;
color:white;
margin-left:10px;

:hover{
    color:grey;
}
`