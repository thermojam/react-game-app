import PropTypes from 'prop-types'
import styles from './information.module.css'
import {useSelector} from 'react-redux'

function InformationLayout({message}) {
    return <div className={styles.info}>{message}</div>
}

InformationLayout.propTypes = {
    message: PropTypes.string.isRequired
}

export default function Information() {
    const currentPlayer = useSelector(state => state.currentPlayer)
    const isGameEnded = useSelector(state => state.isGameEnded)
    const isDraw = useSelector(state => state.isDraw)

    let message = ''

    if (isDraw) {
        message = 'Draw'
    } else if (isGameEnded) {
        message = `Winner: ${currentPlayer}`
    } else {
        message = `User: ${currentPlayer}`
    }

    return <InformationLayout message={message}/>
}
