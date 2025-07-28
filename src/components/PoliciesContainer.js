import * as React from "react";
import {getPolicyList, getStartPolicies} from "../services/Definitions";
import Cluster from "./Cluster";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {generateNewPolicies, relationshipShift} from "../services/Generator";

export default class PoliciesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentState: getStartPolicies(),
            history: [],
            showResetModal: false,
            positiveShiftApplied: false,
            negativeShiftApplied: false,
        }
    }

    nextAct() {
        this.state.history.push(this.state.currentState);
        const newState = generateNewPolicies(getPolicyList(), this.state.currentState);
        this.setState({currentState: newState, positiveShiftApplied: false, negativeShiftApplied: false});
    }

    rerunAct() {
        const previousState = this.getPreviousState();
        const newState = generateNewPolicies(getPolicyList(), previousState);
        this.setState({currentState: newState, positiveShiftApplied: false, negativeShiftApplied: false});
    }

    completeReset() {
        this.setState({currentState: getStartPolicies(), history: [], showResetModal: false, positiveShiftApplied: false, negativeShiftApplied: false});
    }

    getPreviousState() {
        return this.state.history.length > 0 ? this.state.history[this.state.history.length - 1] : [];
    }

    handleCategoryShift(key, shift) {
        let newState = JSON.parse(JSON.stringify(this.state.currentState));
        relationshipShift(getPolicyList(), newState, key, shift);
        this.setState({
            currentState: newState,
            positiveShiftApplied: this.state.positiveShiftApplied || shift === 1,
            negativeShiftApplied: this.state.negativeShiftApplied || shift === -1,
        });
    }

    renderResetConfirm() {
        return (
            <Modal show={this.state.showResetModal} onHide={() => this.setState({showResetModal: false})}>
                <Modal.Header closeButton>
                    <Modal.Title>Kompletní reset</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Opravdu chcete resetovat politiky a začít ze startovních? Historie se také promaže.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={this.completeReset.bind(this)}>Reset</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        const list = getPolicyList();
        const previousState = this.getPreviousState();
        const mainTitle = this.state.history.length > 0 ? `Státní politiky pro ${this.state.history.length}.dějství` : "Startovní státní politiky"

        return (
            <div className="container mt-3">
                {this.renderResetConfirm()}
                <h2 id="main-title">{mainTitle}</h2>
                {
                    list.clusters.map((cluster, i) => {
                        return <Cluster data={cluster}
                                        state={this.state.currentState[cluster.name]}
                                        previousState={previousState[cluster.name] || {}}
                                        handleCategoryShift={(key, shift) => this.handleCategoryShift(key, shift)}
                                        positiveShiftApplied={this.state.positiveShiftApplied}
                                        negativeShiftApplied={this.state.negativeShiftApplied}
                                        key={i}/>
                    })
                }
                <div className="mt-3 no-print">
                    <Button variant="primary" onClick={this.nextAct.bind(this)} className="mr-2">
                        Další dějství
                    </Button>
                    <Button variant="secondary" onClick={this.rerunAct.bind(this)} className="mr-2">
                        Přehodit dějství
                    </Button>
                    <Button variant="danger" onClick={() => this.setState({showResetModal: true})} className="mr-2">
                        Kompletně resetovat
                    </Button>
                </div>
            </div>
        )
    }
}
