/* Index.js берёт начальный компонент App и подвяжет его к id=root */

import * as React from "react";
import * as ReactDOM from "react-dom"; /* для рендеринга компонента */
import 'bootstrap/dist/css/bootstrap.min.css'; /* стили для таблицы */
// import App from "./components/App"; /* импорт компонента */
import ReduxApp from "./App-redux";
import { Provider } from "react-redux";
import { createStore } from "redux"; /* импорт функции для создания Store */


const initialState = ["redux", "react"];
const store = createStore(changeStore);


/* Пишем функцию-редьюсер (изменяющую состояние) */
function changeStore (state = initialState, action) {
    switch(action.type) {
        case 'WRITE': {
            return [
                ...state,
                action.payload
            ]
        }
        break;
        default:
            return state;
    }
}

ReactDOM.render(
<Provider store={store}>
    <ReduxApp />
</Provider>, document.getElementById('root'));

// /* Привязка к элементам */
// const testButton = document.querySelector(".testButton");
// const items = document.querySelector(".testUl")

// /* Через subscribe подписываемся на изменения в Store */
// store.subscribe(() => {
// //     console.log('subscribe', store.getState())
//
// //     очищаем массив элементов при выводе
//     items.innerHTML = ''
//     const show = (document.querySelector(".testInput") as HTMLInputElement).value = ''
//
// //     выводим имеющиемся данные
//     store.getState().map(item => {
//         const li = document.createElement("li");
//         li.textContent = item;
//         items.appendChild(li)
//     })
// })
//
// /* Метод dispatch изменяет события у store. Тип действия "запиши"
// Через dispatch инициируем действие и передаём action (write) -->
// В reducer'e рассмотрели тип "action"*/
// // store.dispatch({type: 'WRITE', payload: 'new message'})
//
//
// testButton.addEventListener('click', () => {
//     const inputValue = (document.querySelector(".testInput") as HTMLInputElement).value;
//     console.log('INPUT', inputValue)
//     store.dispatch({type: 'WRITE', payload: inputValue})
// });