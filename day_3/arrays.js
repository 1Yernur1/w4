console.log(getSecondLargest([2, 3, 6, 6, 5]));
function getSecondLargest(nums) {
  // Complete the function
  const max = Math.max(...nums);
  nums = nums.filter((num) => num !== max);
  
  return Math.max(...nums);
}
