import { ISort } from "./ISort";

export class ArrayOrganizer {
  private sorter: ISort

  constructor(sorter: ISort) {
    this.sorter = sorter
  }

  setSorter(sorter: ISort) {
    this.sorter = sorter
  }

  sort(array: number[]): number[] {
    return this.sorter.execSort(array)
  }
}