function bubbleSort(array) {
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

function quickSort(array, start, end) {
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

  quickSort(array, start, index - 1)
  quickSort(array, index + 1, end)
}

(() => {
  const unsorted = [23, 53, 100, 1, 124, 3, 20, 50]
  bubbleSort(unsorted)
  console.log(unsorted)
})()