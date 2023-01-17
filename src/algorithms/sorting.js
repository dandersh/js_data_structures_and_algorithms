export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

// bubble sort
// We will walk through a list and compare adjacent items and reposition them until the list has been exhausted
// base condition

const BubbleSort = (array, compareFn) => {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}
// merge sort

// insert sort

// selection sort

module.exports = BubbleSort