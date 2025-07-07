import PropTypes from 'prop-types'
import styles from './information.module.css'
import { useSelector } from 'react-redux'

function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
    let message
    if (isDraw) {
        message = 'Draw'
    } else if (isGameEnded) {
        message = `Winner: ${currentPlayer}`
    } else {
        message = `User: ${currentPlayer}`
    }

    return <div className={styles.info}>{message}</div>
}

InformationLayout.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired
}

export default function Information() {
    const currentPlayer = useSelector(state => state.currentPlayer)
    const isGameEnded = useSelector(state => state.isGameEnded)
    const isDraw = useSelector(state => state.isDraw)

    return (
        <InformationLayout
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
        />
    )
}
