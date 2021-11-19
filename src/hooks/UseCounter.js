import { useReducer } from "react";

const INCREASE = "increase";
const DECREASE = "decrease";

const UseCounter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case INCREASE:
        return { counter: state.counter + action.payload };
      case DECREASE:
        return { counter: state.counter - action.payload };
      default:
        return {
          ...state,
        };
    }
  }

  const increase = (payload) => ({
    type: INCREASE,
    payload,
  });
  const decrease = (payload) => ({
    type: DECREASE,
    payload,
  });

  return {
    counter: state.counter,
    add1: () => dispatch(increase(1)),
    add5: () => dispatch(increase(5)),
    sub1: () => dispatch(decrease(1)),
    sub5: () => dispatch(decrease(5)),
  };
};

export default UseCounter;
