module.exports.generateNewPolicies = (list, oldState) => {
    const newState = JSON.parse(JSON.stringify(oldState));

    // Internal politics
    // Change 2 random to ANY state
    let firstIndex = Math.floor(Math.random() * 4)
    let secondIndex;
    do {
        secondIndex = Math.floor(Math.random() * 4)
    } while (secondIndex === firstIndex);

    let firstIndexCurrent = newState[list.clusters[0].name][list.clusters[0].categories[firstIndex].name];
    let firstIndexNewValue = list.clusters[0].categories[firstIndex].policies[Math.floor(Math.random() * 4)];
    while (firstIndexCurrent === firstIndexNewValue) {
        firstIndexNewValue = list.clusters[0].categories[firstIndex].policies[Math.floor(Math.random() * 4)];
    }
    newState[list.clusters[0].name][list.clusters[0].categories[firstIndex].name] = firstIndexNewValue;

    let secondIndexCurrent = newState[list.clusters[0].name][list.clusters[0].categories[secondIndex].name];
    let secondIndexNewValue = list.clusters[0].categories[secondIndex].policies[Math.floor(Math.random() * 4)];
    while (secondIndexCurrent === secondIndexNewValue) {
        secondIndexNewValue = list.clusters[0].categories[secondIndex].policies[Math.floor(Math.random() * 4)];
    }
    newState[list.clusters[0].name][list.clusters[0].categories[secondIndex].name] = secondIndexNewValue;

    // Leader dials
    // Change 1 random to ANY state
    let dialIndex = Math.floor(Math.random() * 2);
    let dialIndexCurrent = newState[list.clusters[1].name][list.clusters[1].categories[dialIndex].name];
    let dialIndexNewValue = list.clusters[1].categories[dialIndex].policies[Math.floor(Math.random() * 3)];
    while (dialIndexCurrent === dialIndexNewValue) {
        dialIndexNewValue = list.clusters[1].categories[dialIndex].policies[Math.floor(Math.random() * 3)];
    }
    newState[list.clusters[1].name][list.clusters[1].categories[dialIndex].name] = dialIndexNewValue;

    // International relationships
    const numberOfPositiveShifts = 1;
    const numberOfNegativeShifts = 3;

    for (let i = 0; i < numberOfPositiveShifts; i++) {
        const country = list.clusters[2].categories[Math.floor(Math.random() * 6)].name;
        relationshipShift(list, newState, country, 1);
    }

    for (let i = 0; i < numberOfNegativeShifts; i++) {
        const country = list.clusters[2].categories[Math.floor(Math.random() * 6)].name;
        relationshipShift(list, newState, country, -1);
    }

    return newState
}

function relationshipShift(list, newState, key, shift) {
    let policies = list.clusters[2].categories[0].policies;
    let currentState = newState[list.clusters[2].name][key];
    let index = policies.indexOf(currentState);
    index += shift;
    if (index < 0) {
        index = 0;
    }
    if (index >= 5) {
        index = 4;
    }

    newState[list.clusters[2].name][key] = policies[index];
}

module.exports.relationshipShift = relationshipShift;
