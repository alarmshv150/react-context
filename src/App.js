import UseCounter from "./hooks/UseCounter";
import { Context } from "./context/index";
import Decreaser from "./components/Decreaser";
import Increaser from "./components/Increaser";

function App() {
  const { counter, add1, add5, sub1, sub5 } = UseCounter();
  return (
    <Context.Provider value={{ counter, add1, add5, sub1, sub5 }}>
      <Decreaser />
      {counter}
      <Increaser />
    </Context.Provider>
  );
}

export default App;
