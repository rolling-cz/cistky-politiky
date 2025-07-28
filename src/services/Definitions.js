module.exports.getStartPolicies = () => {
    const clustersDto = {}

    getPolicyList().clusters.forEach(cluster => {
        clustersDto[cluster.name] = {}
        cluster.categories.forEach(category => {
            clustersDto[cluster.name][category.name] = category.default
        })
    })

    return clustersDto
}


module.exports.getPolicyList = getPolicyList
function getPolicyList() {
    return {
        "clusters": [{
            "name": "Vnitřní politika",
            "categories": [{
                "name": "Rodinné poměry",
                "default": "Normální",
                "button": false,
                "policies": ["Velmi konzervativní (nukleární rodina)", "Dekadence", "Rodina by neměla existovat", "Normální"]
            },{
                "name": "Národnostní politika",
                "default": "Národnosti nejsou tak důležité",
                "button": false,
                "policies": ["Ruský šovinismus", "Absolutní internacionalismus (kvóty pro menšiny)", "Oblíbený národ (neruský) + Nenáviděný národ zrádců", "Národnosti nejsou tak důležité"]
            },{
                "name": "Náboženství",
                "default": "Omezená náboženská tolerance",
                "button": false,
                "policies": ["Militantní atheismus", "Hardcore ortodoxní křesťanství", "Mysticismus", "Omezená náboženská tolerance"]
            },{
                "name": "Ekonomika",
                "default": "Normální",
                "button": false,
                "policies": ["Bohatství je nutnost pro to být členem politbyra", "Být bohatý je nežádoucí", "Střední třída je nejlepší", "Normální"]
            }]
        },{
            "name": "Názory Vůdce",
            "categories": [{
                "name": "Gender",
                "default": "Nezáleží",
                "button": false,
                "policies": ["Nezáleží", "Moc patří mužům", "Moc patří ženám"]
            },{
                "name": "Filosofie",
                "default": "Vyvážená",
                "button": false,
                "policies": ["Vyvážená", "Futurismus", "Tradicionalismus"]
            }]
        },{
            "name": "Vztahy s mocnostmi",
            "categories": [{
                "name": "Německo",
                "default": "Neutrální",
                "button": true,
                "policies": ["Válka", "Rivalita", "Neutrální", "Inspirativní", "Spojenec"]
            },{
                "name": "Japonsko",
                "default": "Neutrální",
                "button": true,
                "policies": ["Válka", "Rivalita", "Neutrální", "Inspirativní", "Spojenec"]
            },{
                "name": "Velká Británie",
                "default": "Neutrální",
                "button": true,
                "policies": ["Válka", "Rivalita", "Neutrální", "Inspirativní", "Spojenec"]
            },{
                "name": "Spojené státy americké",
                "default": "Neutrální",
                "button": true,
                "policies": ["Válka", "Rivalita", "Neutrální", "Inspirativní", "Spojenec"]
            },{
                "name": "Čína",
                "default": "Neutrální",
                "button": true,
                "policies": ["Válka", "Rivalita", "Neutrální", "Inspirativní", "Spojenec"]
            },{
                "name": "Turecko",
                "default": "Neutrální",
                "button": true,
                "policies": ["Válka", "Rivalita", "Neutrální", "Inspirativní", "Spojenec"]
            }]
        }
        ]
    }
}
