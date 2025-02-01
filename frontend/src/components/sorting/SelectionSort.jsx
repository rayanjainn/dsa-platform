import React, { useState } from "react";
import BarGraph from "./BarGraph";

const SelectionSort = ({ array, setArray }) => {
  const [highlighted, setHighlighted] = useState([]);

  const selectionSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        setHighlighted([minIdx, j]);
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Slower transition
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
    }
    setHighlighted([]);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <BarGraph array={array} highlighted={highlighted} />
      <button
        onClick={selectionSort}
        className="mt-4 rounded p-2 bg-green-500 text-white"
      >
        Start Selection Sort
      </button>
    </div>
  );
};

export default SelectionSort;
