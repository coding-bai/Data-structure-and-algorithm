/**
 * 二分查找
 * @param {*} data 
 * @param {array} arr 
 * @param {number} start 
 * @param {number} end 
 */
function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((end + start) / 2);
  if (data === arr[mid]) {
    return mid
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1)
  } else if (data > arr[mid]) {
    return binarySearch(data, arr, mid + 1, end)
  }
}
var arr = [0, 1, 1, 1, 1, 1, 4, 6, 7, 8, 10]
console.log(binarySearch(8, arr, 0, arr.length - 1));