import { ISort } from "./ISort";

export class StandardSort implements ISort {
  execSort(array: number[]): number[] {
    // TimSort
    return array.sort((a, b) => a - b)
  }
}