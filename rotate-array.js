/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) return nums;

    let rotateFn = function(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    rotateFn(nums, 0, nums.length - 1);
    rotateFn(nums, 0, k - 1);
    rotateFn(nums, k, nums.length - 1);

    return nums;
};

const result = rotate([-1,-100,3,99], 2)

console.log(result);

// [5,6,7,1,2,3,4]