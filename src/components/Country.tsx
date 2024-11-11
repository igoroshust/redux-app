import * as React from "react";
import Button from "react-bootstrap/Button";
import "../styles/Country.css";
import PropTypes from "prop-types";


function Country({name, capital}) {
    const [selected, changeSelected] = React.useState(false);

    return (
        <tr className={ selected ? "selected-country": ""}>
            <td>{name}</td>
            <td>{capital}</td>
            <td>
                { selected ?
                    <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                    <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                }
            </td>
        </tr>
    );
}

Country.defaultProps = {
    capital: "Not Available"
};

//Country.propTypes = {
//    country: PropTypes.object,
//    count: PropTypes.number
//};

export default Country;