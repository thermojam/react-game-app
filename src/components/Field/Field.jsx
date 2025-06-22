import PropTypes from "prop-types";
import styles from "./field.module.css";
import { useReduxState } from "../../hooks/useRedux";

function FieldLayout({ field, onCellClick }) {
    return (
        <div className={styles.grid}>
            {field.map((value, index) => (
                <button
                    key={index}
                    className={styles.cell}
                    onClick={() => onCellClick(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
}

export default function Field({ onCellClick }) {
    const { field } = useReduxState();
    return <FieldLayout field={field} onCellClick={onCellClick} />;
}

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCellClick: PropTypes.func.isRequired,
};
