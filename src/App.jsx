import { useDispatch } from 'react-redux'
import Field from './components/Field/Field'
import Information from './components/Information/Information'
import styles from './App.module.css'

export const App = () => {
    const dispatch = useDispatch()

    const resetGame = () => {
        dispatch({ type: 'RESTART_GAME' })
    }

    return (
        <div className={styles.app}>
            <div className={styles.appWrapper}>
                <Information />
                <Field />
                <button className={styles.resetGame} onClick={resetGame}>
                    Start new game
                </button>
            </div>
        </div>
    )
}
