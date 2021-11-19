import { GlobalContext } from "../context/index";

const Decreaser = () => {
  const { sub5, sub1 } = GlobalContext();
  return (
    <>
      <button onClick={sub5}>-5</button>
      <button onClick={sub1}>-1</button>
    </>
  );
};

export default Decreaser;
