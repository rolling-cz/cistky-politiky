import * as React from "react";
import Button from "react-bootstrap/Button";

export default class Category extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            currentState: props.state,
            previousState: props.previousState
        }
    }

    componentWillReceiveProps(props) {
        this.setState({currentState: props.state, previousState: props.previousState})
    }

    render() {
        let changeState
        const def = this.state.data
        if (def.default !== this.state.currentState
            && this.state.currentState !== this.state.previousState) {
            changeState = "změna"
        } else if (def.default === this.state.currentState
            && this.state.currentState !== this.state.previousState
            && this.state.previousState) {
            changeState = "návrat k neutrálnímu postoji"
        }

        const changeStateToPrint = changeState ? "!!!" : ""

        return (
            <div className="row">
                <div className="col-md-4 font-weight-bold">
                    {this.state.data.name}
                </div>
                <div className="col-md-4">
                    {this.state.currentState}
                </div>
                <div className="col-md-2">
                    <span className="no-print">{changeState}</span>{changeStateToPrint}
                </div>
                <div className="col-md-2 no-print">
                    {def.button === true && !this.props.positiveShiftApplied && (
                        <Button variant="success" onClick={() => this.props.handleCategoryShift(this.state.data.name, 1)}
                                className="mr-2">
                            +1
                        </Button>
                    )}
                    {def.button === true && !this.props.negativeShiftApplied && (
                        <Button variant="danger" onClick={() => this.props.handleCategoryShift(this.state.data.name, -1)}
                                className="mr-2">
                            -1
                        </Button>
                    )}
                </div>

            </div>
        )
    }
}
