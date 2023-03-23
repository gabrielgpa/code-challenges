/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
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

moveZeroes([0,1,0,3,12])