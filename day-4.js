
/** мое решение
 * Время выполнения 394 РС Битс 5,03 %
 * Память 99.78 МБ Битс 5,45 %
 * **/

/**
 * @return string
 * @param obj
 */
// function getCashKey(obj) {
//     return Object.keys(obj).sort().map(key => `${key}:${obj[key]}`).join('|')
// }

/**
 * @param {Function} fn
 * @return {Function}
 */

// function memoize(fn) {
//     const cash = {};
//     return function(...args) {
//         const key = getCashKey(arguments)
//         if (cash.hasOwnProperty(key)) {
//             console.log('is from cash', key)
//             cash[key].count++
//             return cash[key].result
//         }
//         cash[key] = {
//             args: arguments,
//             result: fn(...args),
//             count: 1
//         }
//         return cash[key].result
//     }
// }

// /** пример из решения интернета */

// function getCashKey(args) {
//     return JSON.stringify(args);
// }
//
// function memoize(fn) {
//     const cache = new Map();  // Map для лучшей производительности на строковых ключах
//
//     return function(...args) {
//         const key = getCashKey(args);
//         if (cache.has(key)) {
//             const entry = cache.get(key);
//             entry.count++;
//             return entry.result;
//         }
//         const result = fn(...args);
//         cache.set(key, { result, count: 1 });  // Минимально: без args (экономия памяти)
//         return result;
//     };
// }

// const fn = function (a, b) { return a + b; }
// const memoizedFn = memoize(fn);
// console.log(memoizedFn(1, 2)) // 3; // вычисляется
// console.log(memoizedFn(1, 2)) // 3; // возвращается из кэша
// console.log(memoizedFn(2, 3)) // 5; // вычисляется
// console.log(memoizedFn(2, 3)) // 5; // возвращается из кэша
// console.log(getCashKey({ '0': 1, '1': 2 })) // 3; // возвращается из кэша