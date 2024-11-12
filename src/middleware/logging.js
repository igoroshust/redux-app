/* ES6 */
export const logging = store => next => action =>  {
    console.log(`Done ${action.type}`)
    return next(action)
}

/* ES5 */
//export function logging(store) {
//    return function(next) { // двигайся к следующему действию
//        return function(action) {
//            console.log('text inside middleware')
//            return next(action) // продолжение действия без прерывания цепочки
//        }
//    }
//}