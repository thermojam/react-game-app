import styles from "./information.module.css";
import { useReduxState } from "../../hooks/useRedux";

function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
    let message;
    if (isDraw) {
        message = "Draw";
    } else if (isGameEnded) {
        message = `Winner: ${currentPlayer}`;
    } else {
        message = `User: ${currentPlayer}`;
    }

    return <div className={styles.info}>{message}</div>;
}

export default function Information() {
    const { currentPlayer, isGameEnded, isDraw } = useReduxState();
    return <InformationLayout {...{ currentPlayer, isGameEnded, isDraw }} />;
}
