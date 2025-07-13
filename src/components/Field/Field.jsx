import React from 'react'
import { connect } from 'react-redux'

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

class Field extends React.Component {
    checkWinner = (field, player) => {
        return WIN_PATTERNS.some(pattern =>
            pattern.every(index => field[index] === player)
        )
    }

    handleClick = (index) => {
        const {field, currentPlayer, isGameEnded, dispatch} = this.props

        if (field[index] !== '' || isGameEnded) return

        const newField = [...field]
        newField[index] = currentPlayer

        const hasWinner = this.checkWinner(newField, currentPlayer)
        const isDraw = newField.every(cell => cell !== '')

        dispatch({type: 'SET_FIELD', payload: newField})

        if (hasWinner) {
            dispatch({type: 'SET_GAME_ENDED', payload: true})
            return
        }

        if (isDraw) {
            dispatch({type: 'SET_DRAW', payload: true})
            dispatch({type: 'SET_GAME_ENDED', payload: true})
            return
        }

        dispatch({
            type: 'SET_CURRENT_PLAYER',
            payload: currentPlayer === 'X' ? '0' : 'X'
        })
    }

    render() {
        const {field} = this.props

        return (
            <div
                className="grid grid-cols-[repeat(3,_90px)] gap-[10px] justify-center items-center justify-items-center my-[100px]">
                {field.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => this.handleClick(index)}
                        className="w-[90px] h-[90px] text-[40px]  text-white bg-pink-500 bg-opacity-80 rounded-full border-none cursor-pointer hover:shadow-[var(--cell)]"
                    >
                        {value}
                    </button>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    field: state.field,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded
})

export default connect(mapStateToProps)(Field)
