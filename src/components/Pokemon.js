import React from 'react'

const Pokemon = ({name, pokemon}) => {
    return (
        <div>
            <p>You selected {name}</p>
            {pokemon &&
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={name}/>
            }
        </div>
    ) 
}

export default Pokemon