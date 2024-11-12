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
                <input type="type" ref={(input) => {this.inputValue = input}}/>
                <button onClick={this.addLibrary.bind(this)}>Click me</button>
                <ul>
                    {this.props.testStore.map(item =>
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
        testStore: state
    }),

    // mapDispatchToProps - возвращает объект методов
    dispatch => ({
        addElement: (elem) => {
            dispatch({type: "WRITE", payload: elem})
        }
    })
)(ReduxApp);