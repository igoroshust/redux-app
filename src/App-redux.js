import * as React from "react";
import { connect } from "react-redux";

class ReduxApp extends React.Component {

addLibrary() {
    console.log('action done', this.inputValue.value)
    this.props.addElement(this.inputValue.value)
    this.inputValue.value = '' // очищаем инпут
}

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Use DevTools (F12) to view full details </h3>
                <input type="type" ref={(input) => {this.inputValue = input}}/>
                <button onClick={this.addLibrary.bind(this)}>Click me</button>
                <ul>
                    {this.props.libraries.map(item =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
/* ReduxApp обёрнут в connect для доступа к Store через Props */

    // mapStateToProps - перебирает стейт и передает его в пропсы компонента, чтобы дальше с ним работать
    state => ({
        libraries: state.libraries,
        frameworks: state.frameworks
    }),

    // mapDispatchToProps - возвращает объект методов
    dispatch => ({
        addElement: (elem) => {
            dispatch({type: "ADD_LIBRARY", payload: elem})
        }
    })
)(ReduxApp);