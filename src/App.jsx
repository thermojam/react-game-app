import { useState } from 'react'
import Field from './components/Field/Field.jsx'
import Information from './components/Information/Information.jsx'
import styles from './App.module.css'


const initialField = Array(9).fill('')

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export const App = () => {
    const [field, setField] = useState(initialField);
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false)

    const handleClick = (index) => {
        if (field[index] !== '' || isGameEnded) return

        const newField = [...field]
        newField[index] = currentPlayer
        setField(newField)

        if (checkWinner(newField, currentPlayer)) {
            setIsGameEnded(true)
            return
        }

        if (newField.every(cell => cell !== '')) {
            setIsDraw(true)
            setIsGameEnded(true)
            return
        }

        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
    }

    const checkWinner = (field, player) => {
        return WIN_PATTERNS.some(pattern =>
            pattern.every(index => field[index] === player)
        )
    }

    const resetGame = () => {
        setField(initialField)
        setCurrentPlayer('X')
        setIsGameEnded(false)
        setIsDraw(false)
    }

    return (
        <div className={styles.app}>
            <div className={styles.appWrapper}>
                <Information
                    currentPlayer={currentPlayer}
                    isGameEnded={isGameEnded}
                    isDraw={isDraw}
                />
                <Field field={field} onCellClick={handleClick}/>
                <button className={styles.resetGame} onClick={resetGame}>Start new game</button>
            </div>
        </div>
    )
}


