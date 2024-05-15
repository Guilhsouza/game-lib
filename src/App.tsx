interface Game {
  id: number;
  title: string;
  cover: string;
}

import React, { useState } from 'react'

export default function App() {
  const [games, setGames] = useState<Game[]>(() => {
    const storagedGames = localStorage.getItem('game-lib')

    if (!storagedGames) return []

    return JSON.parse(storagedGames)
  })
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

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

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()

    addGame(title, cover)

    setTitle('')
    setCover('')
  }


  return (
    <div id='app'>
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Titulo do jogo: </label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(ev.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor='cover'>Capa: </label>
          <input
            type='text'
            name='cover'
            id='cover'
            value={cover}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              setCover(ev.target.value)
            }}
          />
        </div>
        <div>
          <button type='submit'>Adicionar jogo</button>
        </div>
      </form>
      <div className='games'>
        {
          games.map((game) => (
            <div className='game' key={game.id}>
              <img src={game.cover} alt='cover Image' />
              <div className='gameContent'>
                <h2>{game.title}</h2>
                <button onClick={() => removeGame(game.id)}>Remover</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}