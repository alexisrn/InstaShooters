import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position:fixed;
  z-index:999;

  main {
    width: 100%;
    padding: 20px;
  }
  .sidebar {
    background: #000919;
    color: red;
    height: 100vh;
    width: 230px;
    border-right: 1px outset #0be0d0;
  }

  .top_section {
    display: flex;
    padding: 20px 15px;
  }

  .logo {
    font-size: 30px;
    margin-left: 15px;
    font-family: "Lobster Two", cursive;
    color:white;
  }
  .bars {
    display: flex;
    font-size: 25px;
    margin-left: 60px;
  }

  .link {
    display: flex;
    color: #fff;
    padding: 20px 30px;
    gap: 15px;
    transition: all 0.5s;
    text-decoration: none;
  }
  .link:hover {
    color: #0be0d0;
    transition: all 0.5s;
  }
  .active {
    -webkit-text-stroke-width: 1px ;
-webkit-text-stroke-color: #0be0d0;
    color: ;
  }

  .icon {
    color: #0be0d0;
    font-size: 22px;
  }

  .icon .link_text {
    font-size: 20px;
  }

  span{ 
     color: #0be0d0; 
  
  }
`;
