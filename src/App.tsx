import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './Components/BoardComponent'
import LostFigures from './Components/LostFigures'
import Timer from './Components/Timer'
import { Board } from './Models/Board'
import { Colors } from './Models/Color'
import { Player } from './Models/Player'

function App() {
	const [board, setBoard] = useState(new Board())
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

	useEffect(() => {
		restart()
		setCurrentPlayer(whitePlayer)
	}, [])

	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	function switchPlayer() {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		)
	}

	return (
		<div className='app'>
			<Timer currentPlayer={currentPlayer} restart={restart} />
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				switchPlayer={switchPlayer}
			/>
			<div>
				<LostFigures title='Черные фигуры' figures={board.lostBlackFigures} />
				<LostFigures title='Белые фигуры' figures={board.lostWhiteFigures} />
			</div>
		</div>
	)
}

export default App
