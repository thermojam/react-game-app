import { useDispatch } from './hooks/useRedux'
import Field from './components/Field/Field.jsx'
import Information from './components/Information/Information.jsx'
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
