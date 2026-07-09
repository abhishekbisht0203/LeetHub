/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const array= [1,2,3,4,5,6,7,8,9]
const target = 15

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
             return target = [i, j]
            }
        }
    }
};

twoSum(array, target)