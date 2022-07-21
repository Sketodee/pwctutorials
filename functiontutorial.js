const addNum = (a,b) =>  a+b;

const divideNum = (a,b) => a/b;

const subtractNum = (a,b) => a-b;

const squareNum = (n) => n*n

const numMod=(a) => a%2


let someWord = "Adamu"
console.log(someWord.split())

let someArray = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(someArray.reverse())

function stringToArray(s) {
    return (s.split("").reverse().join(""))
}

console.log(stringToArray("fantasma"))

function isPalindrome(str) {
    let newStr = str.split("").reverse().join("")
    if(str === newStr) {
        return true
    }else{
        return false
    }
}

// console.log(isPalindrome("fire"))

function intPalindrome(int) {
    let newInt = int.toString()
    let newIntString = newInt.split('').reverse().join('')
    let backToInt = parseInt(newIntString)
    if(int === backToInt) {
        return true
    }else{
        return false
    }
}

console.log(intPalindrome(3003))