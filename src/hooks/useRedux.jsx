import { useEffect, useState } from "react";
import { store } from "../../store";

export const useReduxState = (selector = (state) => state) => {
    const [selectedState, setSelectedState] = useState(
        selector(store.getState())
    );

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const newState = selector(store.getState());
            setSelectedState(newState);

        });

        return () => unsubscribe();
    }, []);

    return selectedState;
};

export const useDispatch = () => store.dispatch;
