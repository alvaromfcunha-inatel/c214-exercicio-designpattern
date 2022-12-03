import { ISort } from "./ISort";

export class QuickSort implements ISort {
  private quickSort(array: number[], start: number, end: number) {
    if(start >= end)
      return

    const index = (() => {
      const pivotValue = array[end]
      let pivotIndex = start

      for(let i = start; i < end; i++) {
        if(array[i] < pivotValue) {
          [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
          pivotIndex++
        }
      }

      [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]
      return pivotIndex
    })()

    this.quickSort(array, start, index - 1)
    this.quickSort(array, index + 1, end)
  }

  execSort(array: number[]): number[] {
    const _array = [...array]
    this.quickSort(_array, 0, array.length)
    return _array.slice(1)
  }
}