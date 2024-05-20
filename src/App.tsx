interface Game {
  id: number;
  title: string;
  cover: string;
}

import { useState } from 'react'
import Game from './components/RenderGame';
import NewFormGame from './components/NewFormGame';

export default function App() {
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

  return (
    <div id='app'>
      <NewFormGame addGame={addGame} />

      <div className='games'>
        {
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => { removeGame(game.id) }}
            />
          ))}
      </div>

    </div >
  )
}