import { ISort } from "./ISort";

export class BubbleSort implements ISort {
  private bubbleSort(array: number[]) {
    let flag = false
    for(var i = 0; i <= array.length-1; i++) {
      flag = false
      for(var j = 0; j < ( array.length - i -1); j++){
        if(array[j] > array[j+1]) {
          var temp = array[j]
          array[j] = array[j + 1]
          array[j+1] = temp
          flag = true
        }
      }
      if(!flag){
        return
      }
    }
  }

  execSort(array: number[]): number[] {
    const _array = [...array]
    this.bubbleSort(_array)
    return _array
  }
}