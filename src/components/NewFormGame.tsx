import { useState } from 'react'

interface addGameFunc {
    addGame: (title: string, cover: string) => void;
}

export default function NewFormGame({ addGame }: addGameFunc) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()

        addGame(title, cover)

        setTitle('')
        setCover('')
    }

    return (
        <>
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
        </>
    )
}