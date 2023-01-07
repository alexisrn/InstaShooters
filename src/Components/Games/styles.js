import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
width: 70%;
gap:60px;


`

export const Games = styled.div`
 cursor:pointer;
    width: 400px;
    height: 230px;
    border: none;
    border-radius: 10px;
img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 70%;
    box-shadow: 1px 1px 1px black;

    :hover{
        opacity:100%;
        transition: all .5s;
    transform: scale(1.1) rotate(0.1deg)
    }
}
`