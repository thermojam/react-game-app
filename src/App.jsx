import { useDispatch, useReduxState } from "./hooks/useRedux";
import Field from "./components/Field/Field.jsx";
import Information from "./components/Information/Information.jsx";
import styles from "./App.module.css";

const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const App = () => {
    const dispatch = useDispatch();
    const { field, currentPlayer, isGameEnded } = useReduxState();

    const handleClick = (index) => {
        if (field[index] !== "" || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;
        dispatch({ type: "SET_FIELD", payload: newField });

        if (checkWinner(newField, currentPlayer)) {
            dispatch({ type: "SET_GAME_ENDED", payload: true });
            return;
        }

        if (newField.every((cell) => cell !== "")) {
            dispatch({ type: "SET_DRAW", payload: true });
            dispatch({ type: "SET_GAME_ENDED", payload: true });
            return;
        }

        dispatch({
            type: "SET_CURRENT_PLAYER",
            payload: currentPlayer === "X" ? "0" : "X",
        });
    };

    const checkWinner = (field, player) => {
        return WIN_PATTERNS.some((pattern) =>
            pattern.every((index) => field[index] === player)
        );
    };

    const resetGame = () => {
        dispatch({ type: "RESTART_GAME" });
    };

    return (
        <div className={styles.app}>
            <div className={styles.appWrapper}>
                <Information />
                <Field onCellClick={handleClick} />
                <button className={styles.resetGame} onClick={resetGame}>
                    Start new game
                </button>
            </div>
        </div>
    );
};
