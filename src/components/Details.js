//Displays details about characters when onClick
import React from 'react'
import styled, {keyframes} from 'styled-components'

export default function Details({charId, close}) {
    return (
        <div className='details'>
            <p>Gender: {charId.gender}</p>
            <p>Height: {charId.height}</p>
            <p>Mass: {charId.mass}</p>
            <p>Birth Year: {charId.birth_year}</p>
            <p>Eye Color: {charId.eye_color}</p>
            <p>Hair Color: {charId.hair_color}</p>
            <p>Skin Color: {charId.skin_color}</p>
            <button onClick={close}>Close</button>
        </div>
    )
}