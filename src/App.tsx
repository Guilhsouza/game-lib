import React, { useState } from 'react'

export default function App() {
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    console.log({ title, cover })
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
    </div>
  )
}