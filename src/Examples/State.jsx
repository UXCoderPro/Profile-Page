import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1 className="bg-red-500 w-full py-4 text-center font-semibold text-white">
        Products in Cart : {count}
      </h1>
      <div className="flex w-full justify-center items-center py-20 gap-14">
        <button
          onClick={handleIncrease}
          className="py-4 px-6 flex justify-center items-center rounded-xl cursor-pointer bg-green-400 font-semibold"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="py-4 px-6 flex justify-center items-center rounded-xl cursor-pointer bg-red-300 font-semibold"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="py-4 px-6 flex justify-center items-center rounded-xl cursor-pointer bg-gray-500 text-white font-semibold"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default State;
