// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;

  background-color: black;
  color: gold;

  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: gold;
    color: black;
  }


  button {
    background-color: #54ad7a;
    &:hover {
      transform: scale(1.1);
    }
  }

  transform: scale(2);
  opacity: 0;
  animation: ${kf} 0.3s ease-in-out forwards;
`
export default function Character({ info, action }) {
    
    return(
        <StyledFriend className='character'>
            <h2>{info.name}</h2>
            <button onClick={() => action(info)}>Character Info</button>
        </StyledFriend>
    )
}