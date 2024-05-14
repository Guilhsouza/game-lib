interface Game {
  id: number;
  title: string;
  cover: string;
}

import React, { useState } from 'react'

export default function App() {
  const [games, setGames] = useState<Game[]>([])
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const addGame = (title: string, cover: string) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    setGames((state) => {
      return [...state, game]
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
            <div key={game.id}>
              <img src={game.cover} alt='cover Image' />
              <h2>{game.title}</h2>
              <button>Remover</button>
            </div>
          ))}
      </div>
    </div>
  )
}