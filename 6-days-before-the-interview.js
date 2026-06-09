// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript


// function solution(str){
//   return str.split("").reduce((acc, curr) => {
//       return curr + acc ;
//   }, "")
//
// }


// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// function solution(str){
//   return str.split("").reduce((acc, curr) => {
//       return curr + acc ;
//   }, "")
//
// }
//
//
// function spinWords(string){
//
//   const array =  string.split(" ").reduce((acc, curr) => {
//     if (curr.length >= 5) {
//       curr = solution(curr)
//     }
//     acc.push(curr)
//     return acc
//   }, [])
//     return array.join("")
// }


// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// function alphabetPosition(text) {
//     return  text.toLowerCase().replace(/[^a-z]/g, "").split("").map(curr => {
//         return curr.charCodeAt(0) - 96
//     }).join(" ")
//
// }

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// function persistence(num) {
//
//     function recursiveFunc(num, counter) {
//         const array = num.toString().split("").map(n => +n)
//         if (array.length === 1) {
//             return counter
//         }
//
//         return recursiveFunc(array.reduce((acc, cur) => {
//             return acc * cur
//         }), counter + 1)
//     }
//     return recursiveFunc(num, 0)
// }

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b)
{
   if (a === b){
     return a
   }
  if (a > b) {
    [a, b] = [b, a]
  }

  function getInteral(a, b){
    const arr = []
    for (let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
  }
    console.log(getInteral(a, b))
  return getInteral(a, b).reduce((acc, cur) => {
    return acc + cur
  }, 0)

}


console.log(getSum(-4, -1))