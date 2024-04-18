import React from 'react';
import { Provider } from "react-redux";
import store from '../../App/feature/store';  // Correct path
import Counter from "./Pembahasan/Counter";

const Redux = () => {
    return (
        <div>
            <Provider store = {store}>
                <Counter />
            </Provider>
        </div>
    );
}

export default Redux;
