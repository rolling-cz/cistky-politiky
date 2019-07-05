import * as React from "react";
import Category from "./Category";

export default class Cluster extends React.Component {
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
        return (<div className="mt-3">
            <h5>Oblast {this.state.data.name}</h5>
            {
                this.state.data.categories.map((category, i) => {
                   return <Category data={category}
                                    state={this.state.currentState[category.name]}
                                    previousState={this.state.previousState[category.name]}
                                    key={i}/>
                })
            }
        </div>)
    }
}