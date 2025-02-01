import React, { useState } from "react";
import BarGraph from "./BarGraph";

const QuickSort = ({ array, setArray }) => {
  const [highlighted, setHighlighted] = useState([]);

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      let pivotIdx = await partition(arr, low, high);
      await quickSort(arr, low, pivotIdx - 1);
      await quickSort(arr, pivotIdx + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      setHighlighted([j, high]);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Slower transition
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };

  const startQuickSort = async () => {
    let arr = [...array];
    await quickSort(arr, 0, arr.length - 1);
    setHighlighted([]);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <BarGraph array={array} highlighted={highlighted} />
      <button
        onClick={startQuickSort}
        className="mt-4 rounded p-2 bg-green-500 text-white"
      >
        Start Quick Sort
      </button>
    </div>
  );
};

export default QuickSort;
