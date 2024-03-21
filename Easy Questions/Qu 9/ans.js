let number = -121;

function isPalindrome(number){
    let num = String(number);
    let start = 0;
    let end = num.length - 1;
    
    while (start < end) {
        if (num[start] != num[end]) {
            return false;
        }    
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome(number));