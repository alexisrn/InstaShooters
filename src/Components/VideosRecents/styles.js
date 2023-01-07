import styled from "styled-components";

export const Container = styled.div`
  h4 {
    padding: 30px 150px;
  }
`;

export const CtnVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-bottom:50px;
  column-gap:100px;

  width: 80%;

  span{
    cursor: pointer;
    font-size:30px;
  }
  


  div{

    cursor: pointer;
    width: 40%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181818;
    border-radius: 10px;
  }
`;
