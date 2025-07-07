import PropTypes from 'prop-types'
import styles from './information.module.css'
import { useReduxState } from '../../hooks/useRedux'

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
    const { currentPlayer, isGameEnded, isDraw } = useReduxState()
    return (
        <InformationLayout
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
        />
    )
}
