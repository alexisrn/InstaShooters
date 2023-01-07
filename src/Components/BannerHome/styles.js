import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  height: 450px;
  border-radius: 30px;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/984/871/802/call-of-duty-call-of-duty-modern-warfare-2-video-game-characters-video-games-farah-hd-wallpaper-preview.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 130px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  p {
    text-align: center;
    width: 70%;
    margin-bottom: 70px;
    opacity: 100%;
  }

  button{
    cursor:pointer;
    border:none;
    background-color:#0be0d0;
    border-radius:15px;

    width:140px;
    height:35px;
    font-size:15px;
    font-weight:bold;
    color:white;

  }button:hover{
    background-color:#04B6A8;
    
  }
`;

