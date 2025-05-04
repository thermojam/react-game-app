import PropTypes from 'prop-types'
import styles from './information.module.css'


function InformationLayout({currentPlayer, isGameEnded, isDraw}) {
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


export default function Information(props) {
    return <InformationLayout {...props} />
}

InformationLayout.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired
}
