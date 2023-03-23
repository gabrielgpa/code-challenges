/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const indexes = new Array(nums.length)

    for (let index = 0; index < indexes.length; index++) {
        nums[index] *= nums[index]
    }

    let sortedNums = nums?.sort((a, b) => {
        return a < b ? -1 : 1
    })

    return sortedNums;
};

const nums = [-7,-3,2,3,11]

sortedSquares(nums)