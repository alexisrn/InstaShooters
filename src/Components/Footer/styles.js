import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
height: 120px;
background-color: #00050F;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Footer = styled.div`
margin-top:20px;
display:flex;
justify-content: space-between;
align-items: center;
gap:500px;
width: 70%;

ul{
    display:flex;
    gap: 30px;
}

li{
    list-style:none;
    font-size:25px;
    cursor:pointer;
}

button{
    border: none;
    border-radius:30px;
    width: 60px;
    height:60px;
}
`