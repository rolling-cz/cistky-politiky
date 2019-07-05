import * as React from "react";

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
        if (def.style === "TEMPORARY" && def.default !== this.state.currentState) {
            changeState = "dočasná změna"
        } else if (def.style === "TEMPORARY"
            && def.default === this.state.currentState
            && this.state.currentState !== this.state.previousState
            && this.state.previousState) {
            changeState = "skončení dočasné politiky"
        } else if (def.style === "STABLE"
            && def.default !== this.state.currentState
            && this.state.currentState !== this.state.previousState) {
            changeState = "změna"
        } else if (def.style === "STABLE"
            && def.default === this.state.currentState
            && this.state.currentState !== this.state.previousState
            && this.state.previousState) {
            changeState = "návrat k neutrálnímu postoji"
        }

        return (
            <div className="row">
                <div className="col-md-4 font-weight-bold">
                    {this.state.data.name}
                </div>
                <div className="col-md-4">
                    {this.state.currentState}
                </div>
                <div className="col-md-4">
                    {changeState}
                </div>
            </div>
        )
    }
}