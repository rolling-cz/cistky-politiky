module.exports.generateNewPolicies = (list, oldState) => {
    const newState = JSON.parse(JSON.stringify(oldState));

    // turn back every temporary state
    list.clusters.forEach(cluster => {
        cluster.categories.forEach(category => {
            if (category.style === "TEMPORARY") {
                newState[cluster.name][category.name] = category.default
            }
        })
    });

    // change one stable in each cluster to off
    list.clusters.forEach(cluster => {
        const categoryNames = cluster.categories.map(category => category.name);

        let i = 0;
        while (++i < 100) {
            let catKey = categoryNames[Math.floor(Math.random() * categoryNames.length)];
            let cat = findCategory(cluster, catKey);
            if (newState[cluster.name][catKey] !== cat.default) {
                newState[cluster.name][catKey] = cat.default;
                break;
            }
        }
    });

    // change one random to a new state
    list.clusters.forEach(cluster => {
        const categoryNames = cluster.categories.map(category => category.name);

        const catKey = categoryNames[Math.floor(Math.random() * categoryNames.length)];
        const cat = findCategory(cluster, catKey);

        let i = 0;
        while (++i < 100) {
            let newPolicy = cat.policies[Math.floor(Math.random() * cat.policies.length)];
            if (newState[cluster.name][catKey] !== newPolicy && oldState[cluster.name][catKey] !== newPolicy) {
                newState[cluster.name][catKey] = newPolicy
            }
        }

    });

    return newState
}

function findCategory(cluster, catKey) {
    return cluster.categories.find(category => category.name === catKey)
}
