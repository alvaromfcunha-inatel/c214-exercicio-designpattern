import { ArrayOrganizer } from "../ArrayOrganizer"
import { QuickSort } from "../QuickSort"
import { StandardSort } from "../StandardSort"


test('standard sort succesful', () => {
  const ss = new StandardSort()
  const ao = new ArrayOrganizer(ss)
  
  const unsorted = [23, 53, 100, 1, 124, 3, 20, 50]
  const expected = [1, 3, 20, 23, 50, 53, 100, 124]

  const sorted = ao.sort(unsorted)

  expect(sorted).toStrictEqual(expected)
})

test('quick sort succesful', () => {
  const qs = new QuickSort()
  const ao = new ArrayOrganizer(qs)

  const unsorted = [23, 53, 100, 1, 124, 3, 20, 50]
  const expected = [1, 3, 20, 23, 50, 53, 100, 124]

  const sorted = ao.sort(unsorted)

  expect(sorted).toStrictEqual(expected)
})

test('bubble sort succesful', () => {
  const bs = new QuickSort()
  const ao = new ArrayOrganizer(bs)

  const unsorted = [23, 53, 100, 1, 124, 3, 20, 50]
  const expected = [1, 3, 20, 23, 50, 53, 100, 124]

  const sorted = ao.sort(unsorted)

  expect(sorted).toStrictEqual(expected)
})