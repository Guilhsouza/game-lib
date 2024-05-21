import Game from './components/RenderGame';
import NewFormGame from './components/NewFormGame';
import useGameCOlletion from './hooks/useGameCollection.tsx';

export default function App() {
  const { games, addGame, removeGame } = useGameCOlletion()

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