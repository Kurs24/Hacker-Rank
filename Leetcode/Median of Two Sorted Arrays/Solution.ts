function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  var mergedArr = nums1.concat(nums2).sort((a, b) => a - b);
  const mergedArrLen = mergedArr.length;
  var result = 0;

  if (mergedArrLen % 2 == 0) {
    result = (mergedArr[mergedArrLen / 2 - 1] + mergedArr[mergedArrLen / 2]) / 2;
  } else {
    result = mergedArr[(mergedArrLen + 1) / 2 - 1];
  }
  return result;
}
