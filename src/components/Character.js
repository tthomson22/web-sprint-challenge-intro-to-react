// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Character({ info, action }) {
    
    return(
        <div className='character'>
            <h3>{info.name}</h3>
            <button onClick={() => action(info)}>Character Info</button>
        </div>
    )
}