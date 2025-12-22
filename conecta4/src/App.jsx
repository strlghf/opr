import { useState } from 'react'
import './App.css'
import { TURNS } from './constants';
import { checkEndGame, checkWinner } from './board/board';
import { Square } from './components/Square';
import { WinnerModal } from './components/WinnerModal';
import { GameModal } from './components/GameModal';

function App() {
  const [board, setBoard] = useState(Array(25).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  function resetGame() {
    setBoard(Array(25).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  function updateBoard(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }
 
  return (
    <main className='board'>
      <h1>Conecta 4</h1>
      <button onClick={resetGame}>Reset Game</button>
      <GameModal board={board} updateBoard={updateBoard}/>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
