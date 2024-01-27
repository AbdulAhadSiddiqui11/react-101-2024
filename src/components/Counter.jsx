import { useContext } from "react";
import { counterContext } from "../App";

const Counter = () => {
  const { count, setCount } = useContext(counterContext);
  return (
    <>
      <div className="flex justify-center">
        <button
          className="m-1 px-2 py-2 bg-purple-600 rounded border-black text-white hover:bg-purple-800"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
        <span className="m-1 p-2 font-bold">{String(count)}</span>
        <button
          className="m-1 px-2 py-2 bg-purple-600 rounded border-black text-white hover:bg-purple-800"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
