import { useState } from 'react'

interface Game {
    id: number;
    title: string;
    cover: string;
}

interface useGameCollectionReturn {
    games: Game[];
    addGame: (title: string, cover: string) => void;
    removeGame: (id: number) => void;

}

export default function useGameCOlletion(): useGameCollectionReturn {
    const [games, setGames] = useState<Game[]>(() => {
        const storagedGames = localStorage.getItem('game-lib')

        if (!storagedGames) return []

        return JSON.parse(storagedGames)
    })

    const addGame = (title: string, cover: string) => {
        const id = Math.floor(Math.random() * 1000000)
        const game = { id, title, cover }
        setGames((state) => {
            const newState = [...state, game]
            localStorage.setItem('game-lib', JSON.stringify(newState))
            return newState
        })
    }

    const removeGame = (id: number) => {
        setGames(state => {
            const updtState = state.filter(game => game.id !== id)
            localStorage.setItem('game-lib', JSON.stringify(updtState))
            return updtState
        })
    }

    return { games, addGame, removeGame }
}