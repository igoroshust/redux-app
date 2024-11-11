/* Все компоненты собраны в App.js
App - это верхний уровень и внутри него подгружаются другие компоненты */

import * as React from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App () {
    const buttonName = "Some button updated";

        return (
            <>
                <Header buttonName={buttonName}/>
                <Main />
            </>
        );
}

export default App;

