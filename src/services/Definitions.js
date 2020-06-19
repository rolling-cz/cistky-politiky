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
            "name": "Zahraniční politika",
            "categories": [{
                "name": "Přístup k národnostem",
                "default": "Národnostní pluralismus",
                "style": "TEMPORARY",
                "policies": ["Národnostní pluralismus", "Poláci jsou nepřátelé", "Kazaši jsou nepřátelé", "Židé jsou nepřátelé", "Ukrajinci jsou nepřátelé"]
            },{
                "name": "Vztah k Japonsku",
                "default": "Nepřítel",
                "style": "STABLE",
                "policies": ["Nepřítel", "Neutrální", "Spojenec"]
            },{
                "name": "Vztah k Německu",
                "default": "Nepřítel",
                "style": "STABLE",
                "policies": ["Nepřítel", "Neutrální", "Spojenec"]
            },{
                "name": "Vztah k Číně",
                "default": "Nepřítel",
                "style": "STABLE",
                "policies": ["Nepřítel", "Neutrální", "Spojenec"]
            },{
                "name": "Armáda",
                "default": "Vyvážená politika",
                "style": "TEMPORARY",
                "policies": ["Vyvážená politika", "Defenzivní politika", "Ofenzivní politika", "Izolacionismus"]
            },{
                "name": "Internacionála",
                "default": "Žádné preference",
                "style": "TEMPORARY",
                "policies": ["Žádné preference", "Německo", "Itálie", "Polsko", "Francie", "Jugoslávie", "Československo"]
            }]
        },{
            "name": "Hospodářství",
            "categories": [{
                "name": "Ekonomický plán",
                "default": "Vyvážené hospodářství",
                "style": "STABLE",
                "policies": ["Vyvážené hospodářství", "Zaměření na pšenici", "Zaměření na ocel", "Zaměření na palivo", "Výstavba nových zařízení"]
            }]
        },{
            "name": "Vnitřní politika",
            "categories": [{
                "name": "Bezpečnostní hrozby",
                "default": "Reakcionáři",
                "style": "STABLE",
                "policies": ["Reakcionáři", "Cizí agenti", "Trockisti"]
            }]
        },{
            "name": "Socioekonomické ukazatele",
            "categories": [{
                "name": "Třídní původ",
                "default": "Na původu nezáleží",
                "style": "TEMPORARY",
                "policies": ["Na původu nezáleží", "Dělnický důvod je důležitý", "Bolševiská šlechta"]
            },{
                "name": "Soukromý majetek",
                "default": "Je možný",
                "style": "TEMPORARY",
                "policies": ["Je možný", "Bohatsví ukazuje míru schopností", "Peníze korumpují"]
            },{
                "name": "Vzdělání",
                "default": "Není důležité",
                "style": "TEMPORARY",
                "policies": ["Není důležité", "Pracující inteligence je předvoj dělnictva", "Vysoká škola života je nejlepší příprava"]
            },{
                "name": "Postoj k náboženství",
                "default": "Je to opium lidstva",
                "style": "TEMPORARY",
                "policies": ["Je to opium lidstva", "Církve jsou utlačovatelé dělnictva", "Víra pomůže vybudovat socialismus"]
            },{
                "name": "Postoj k ženám",
                "default": "Neutrální",
                "style": "TEMPORARY",
                "policies": ["Neutrální", "Ženy vpřed!", "Ženy jsou slabší pohlaví"]
            },{
                "name": "Věk",
                "default": "Neutrální",
                "style": "TEMPORARY",
                "policies": ["Neutrální", "Mládí vpřed", "Zkušenost a rozvaha"]
            }]
        },{
            "name": "Sociální poměry ",
            "categories": [{
                "name": "Životní styl",
                "default": "Přiměřený",
                "style": "TEMPORARY",
                "policies": ["Přiměřený", "Skromnost je ctnost", "Dekadence"]
            },{
                "name": "Rodinné poměry",
                "default": "Liberální přístup",
                "style": "STABLE",
                "policies": ["Liberální přístup", "Rodina je základ státu", "Monogamie je buržoazní přežitek"]
            },{
                "name": "Práce a kolektiv",
                "default": "Zdravá konkurence",
                "style": "STABLE",
                "policies": ["Zdravá konkurence", "Boj proti oportunismu", "Volíme nejoblíbenějšího soudruha", "Krysí závod je dobrý závod"]
            }]
        },{
            "name": "Umělecké směry",
            "categories": [{
                "name": "Preferované umění",
                "default": "Volný režim",
                "style": "STABLE",
                "policies": ["Volný režim", "Socialistický realismus", "Futurismus", "Abstraktní umění"]
            },{
                "name": "Objekt umění",
                "default": "Volný režim",
                "style": "STABLE",
                "policies": ["Volný režim", "Glorifikace soudruhů", "Glorifikace pouze vůdce", "Glorifikace průmyslu a výdobytků soucialismu"]
            }]
        }
        ]
    }
}