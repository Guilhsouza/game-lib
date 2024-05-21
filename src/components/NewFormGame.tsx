import { useState } from 'react'
import TextInput from './TextInput.tsx';

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
                <TextInput label='Titulo do Jogo: ' value={title} setValue={setTitle} />
                <TextInput label='Capa do jogo: ' value={cover} setValue={setCover} />
                <div>
                    <button type='submit'>Adicionar jogo</button>
                </div>
            </form>
        </>
    )
}