/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

// var reduce = function(nums, fn, init) {
//     if(!nums.length) return init
//     let val = fn(init, nums[0])
//     for (let i = 1; i < nums.length; i++) {
//         val = fn(val, nums[i])
//     }
//     return val
// };




// мое решение
 `
 характеристики: 
 Время выполнения 55 РС Битс 58,47 %
 Память 56.38 МБ Битс 20.10 %
 `
/**
 * @param {Function[]} functions
 * @return {Function}
 */
//
// const compose = function (functions) {
//
//     return function (x) {
//         if (functions.length === 0) return x
//         return functions.slice().reverse().reduce((akk, fn) => {
//             akk = fn(akk)
//             return akk
//         }, x)
//     }
// };

// решение с интернета
/**
 * @param {Function[]} functions
 * @return {Function}
 */

`
    характеристики:
    Время выполнения 51 РС Битс 92.31 %
    Память 56.36 МБ Битс 20.10 %
`
// const compose = function (functions) {
//     // Валидация (опционально, но robust)
//     if (!Array.isArray(functions)) {
//         throw new Error('functions must be an array of functions');
//     }
//
//     // Edge: пустой массив — identity функция
//     if (functions.length === 0) {
//         return function (x) {
//             return x;
//         };
//     }
//
//     // reduceRight: строит композицию справа налево, O(n) время
//     // acc — текущая композиция (начинает как identity)
//     return functions.reduceRight(function (acc, fn) {
//         return function (x) {
//             return fn(acc(x));
//         };
//     }, function (x) {
//         return x;
//     });
// };
// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4))
