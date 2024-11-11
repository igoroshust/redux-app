import * as React from "react";
import Countries from "./Countries";
import Alerts from "./Alerts";
import Alert from "react-bootstrap/Alert";
import "../styles/Main.css";

function Main () {

let alertText = "This is a alert-check it out!";

    return (
        <main>
            <Alerts>
                <Alert variant={"success"}>
                    <strong>{ alertText }</strong>
                </Alert>
            </Alerts>
          <Countries />
        </main>
    )
}

export default Main;