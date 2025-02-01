import React, { useState } from "react";
import BarGraph from "./BarGraph";
import { generateArray } from "../TopicTutorialPage";

const MergeSort = ({ array, setArray }) => {
  const [highlighted, setHighlighted] = useState([]);

  const mergeSort = async (arr, l, r) => {
    if (l < r) {
      let m = Math.floor((l + r) / 2);
      await mergeSort(arr, l, m);
      await mergeSort(arr, m + 1, r);
      await merge(arr, l, m, r);
    }
  };

  const merge = async (arr, l, m, r) => {
    let left = arr.slice(l, m + 1);
    let right = arr.slice(m + 1, r + 1);
    let i = 0,
      j = 0,
      k = l;

    while (i < left.length && j < right.length) {
      setHighlighted([k]);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Slower transition
      if (left[i] < right[j]) {
        arr[k] = left[i++];
      } else {
        arr[k] = right[j++];
      }
      setArray([...arr]);
      k++;
    }

    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];

    setArray([...arr]);
  };

  const startMergeSort = async () => {
    let arr = [...array];
    await mergeSort(arr, 0, arr.length - 1);
    setHighlighted([]);
  };
  const stopMergeSort = () => {
    setHighlighted([]);
    setArray(generateArray());
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <BarGraph array={array} highlighted={highlighted} />
      <button
        onClick={startMergeSort}
        className="mt-4 rounded p-2 bg-green-500 text-white"
      >
        Start Merge Sort
      </button>
      {/* {isSorted && (
        <button
          onClick={stopMergeSort}
          className="mt-4 p-2 bg-red-500 text-white"
        >
          Reset
        </button>
      )} */}
    </div>
  );
};

export default MergeSort;
