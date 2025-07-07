import styles from './field.module.css'
import { useSelector, useDispatch } from 'react-redux'

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export default function Field() {
    const field = useSelector(state => state.field)
    const currentPlayer = useSelector(state => state.currentPlayer)
    const isGameEnded = useSelector(state => state.isGameEnded)

    const dispatch = useDispatch()

    const checkWinner = (field, player) => {
        return WIN_PATTERNS.some(pattern =>
            pattern.every(index => field[index] === player)
        )
    }

    const handleClick = (index) => {
        if (field[index] !== '' || isGameEnded) return

        const newField = [...field]
        newField[index] = currentPlayer

        const hasWinner = checkWinner(newField, currentPlayer)
        const isDraw = newField.every(cell => cell !== '')

        dispatch({ type: 'SET_FIELD', payload: newField })

        if (hasWinner) {
            dispatch({ type: 'SET_GAME_ENDED', payload: true })
            return
        }

        if (isDraw) {
            dispatch({ type: 'SET_DRAW', payload: true })
            dispatch({ type: 'SET_GAME_ENDED', payload: true })
            return
        }

        dispatch({
            type: 'SET_CURRENT_PLAYER',
            payload: currentPlayer === 'X' ? '0' : 'X'
        })
    }

    return (
        <div className={styles.grid}>
            {field.map((value, index) => (
                <button
                    key={index}
                    className={styles.cell}
                    onClick={() => handleClick(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    )
}
