import React from "react";

interface gameData {
    title: string;
    cover: string;
    onRemove: React.MouseEventHandler;
}

export default function Game(gameData: gameData) {
    return (
        <div className='game'>
            <img src={gameData.cover} alt='cover Image' />
            <div className='gameContent'>
                <h2>{gameData.title}</h2>
                <button onClick={gameData.onRemove}>Remover</button>
            </div>
        </div >
    )
}