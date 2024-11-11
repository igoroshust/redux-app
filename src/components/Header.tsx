import * as React from "react";
import "../styles/Header.css";

function Header(props) {
    // let count = 0;

    /* setNewCount отвечает за изменение Count */
    let [count, setNewCount] = React.useState(0); /* 0 - значение по умолчанию переменной count */

    const handleClick = () => {
        setNewCount(count + 1);
        console.log('Вы кликнули по кнопке!', count++);
    }

    return (
            <header>webpack-react
                <button className={"some-button"} onClick={handleClick}>
                {props.buttonName} clicked {count} times</button>
            </header>
        )
}

export default Header;

/* Вариант синтаксиса (устаревший) */
//const handleClick = () => {
//    console.log('Вы кликнули по кнопке!');
//}
//
//class Header extends Component {
//    render() {
//        return (
//            <header>This is header
//                <button className={"some-button"} onClick={handleClick}>{buttonName}</button>
//            </header>
//        )
//    }
//}
