import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from '../../../App/feature/Counter/actions';  // Correct path

const Counter = () => {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '}<span>{ count }</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    );
}

export default Counter;
