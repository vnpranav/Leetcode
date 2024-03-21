let nums = [1,2,4,5,6];
let target = Number(prompt("Enter target number: "))


function TwoSum(numbers, target) {
    let indices = [];
    let sum;

    for (let num in nums) {
        sum = target - nums[num];
        for (let second in nums) {
            if (second != num) {
                if (sum - nums[second] == 0) {
                    indices.push(num);
                    indices.push(second)
                    break;
                }
            }
        }
        if (indices.length > 0) {
            break;
        };
    }

    return indices;
}


console.log(indices);