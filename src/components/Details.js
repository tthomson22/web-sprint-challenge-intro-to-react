//Displays details about characters when onClick
import React from 'react'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: scale(2) rotateX(180deg);
    animation: ${kf} 0.5s ease-in-out forwards;

    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;

    background-color: #443e3e;
    p{
        color: gold;
        margin: 2%;
    }
    h3{

        color: gold;
        text-shadow: 1px 1px 5px black;
    }
    
    button{
        background-color: #54ad7a;
        &:hover {
          transform: scale(0.99);
        }
    }
`

export default function Details({charId, close}) {
    return (
        <StyledDetails className='details'>
            <h3>{charId.name}`s info</h3>
            <p>Gender: {charId.gender}</p>
            <p>Height: {charId.height}</p>
            <p>Mass: {charId.mass}</p>
            <p>Birth Year: {charId.birth_year}</p>
            <p>Eye Color: {charId.eye_color}</p>
            <p>Hair Color: {charId.hair_color}</p>
            <p>Skin Color: {charId.skin_color}</p>
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}