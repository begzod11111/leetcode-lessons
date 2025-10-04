/**
 * @return {null|boolean|number|string|Array|Object}
 */
// Array.prototype.last = function() {
//     if (!this.length) return - 1
//     return this[this.length - 1]
// };

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


/**
 * @param {number} n
 * @return {Function} counter
 */
// const createCounter = function (n) {
//     return function () {
//         return n++
//     };
//
// };

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


/**
 * @param {string} val
 * @return {Object}
 */
// const expect = function (val) {
//
//     this.toBe = function (item) {
//         if (item === val) return true
//         throw new Error("Not Equal")
//     }
//
//     this.notToBe = function (item) {
//         return item !== val ? true : "Equal"
//     }
//
//     return this
// };
//


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// const createCounter = function (init) {
//     return {
//         init,
//         res: init,
//         increment: function () {
//             return ++this.res
//         },
//         decrement: function () {
//             return --this.res
//         },
//         reset: function () {
//             return this.res = init
//         }
//     }
// };


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {void}
 */
// const map = function (arr, fn) {
//     return arr.reduce((acc, item, index) => {
//         acc.push(fn(item, index))
//         return acc;
//     }, [])
// };
//
//
// const fn = function plusone(n) { return n + 1; }
// const arr = [1, 2, 3]
//
// console.log(map(arr, fn))  2 4 6 8
