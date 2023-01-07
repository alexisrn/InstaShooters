import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:100vh;
background-color:#000919 
 ;
`

export const ContainerImage = styled.div`
background-color:red;
height: 60vh;
width: 100%;

img{
    width: 100%;
    height: 100%;
    border-bottom:transparent;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

div{

    width: 100%;
    height: 200px;
    background-color:#101010;
    position: absolute;
    bottom:2px;
    opacity: 10%;

}
`

export const ChangeGame = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

h2{

    text-align: center;
    padding: 10px 0px;
    width: 70%;
    border-bottom:3px solid #0be0d0;
}
`
