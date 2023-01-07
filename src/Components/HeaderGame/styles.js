import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;
  position:fixed;
  background-color: #000919;


  margin: 0 120px;
  width: 100%;
  height: 90px;

  div {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }

  input {
    background-color: #2d3f60;
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 200px;
    color: white;
    outline: none;
  }

  p {
    font-size: 25px;
    cursor: pointer;
    margin-left: 300px;
  }
`;
