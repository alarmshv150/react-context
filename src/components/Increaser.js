import { GlobalContext } from "../context/index";

const Increaser = () => {
  const { add1, add5 } = GlobalContext();
  return (
    <>
      <button onClick={add1}>+1</button>
      <button onClick={add5}>+5</button>
    </>
  );
};

export default Increaser;
