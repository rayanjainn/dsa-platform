import React, { useState } from "react";
import SelectionSort from "./SelectionSort";
import QuickSort from "./QuickSort";
import MergeSort from "./MergeSort";

const generateArray = () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 10);

const SortingVisualizer = () => {
  const [array, setArray] = useState(generateArray());

  return (
    <div className="text-center">
      <button
        onClick={() => setArray(generateArray())}
        className="mb-4 p-2 bg-blue-500 text-white"
      >
        Reset Array
      </button>
      <SelectionSort array={array} setArray={setArray} />
      <QuickSort array={array} setArray={setArray} />
      <MergeSort array={array} setArray={setArray} />
    </div>
  );
};

export default SortingVisualizer;
