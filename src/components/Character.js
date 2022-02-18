// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Character({ info, action }) {
    return(
        <div className='character'>
            {info.name}
        </div>
    )
}