const ngrokUrl = "https://caa4-46-193-17-6.ngrok.io"

const listStats = [
    "force",
    "intelligence",
    "agilite",
    "endurance"
]

export function getAllHeroesApi() {
    let url = ngrokUrl + "/characters";

    return fetch(url, {
        //headers pour ne pas récuperer un réponse 304 Not Modified de la part du serveur
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
            Pragma: 'no-cache',
            Expires: 0,
        }
    })
        .then((response) => response.json())
}

export function addPointToHero(character, stat, number) {
    let url = ngrokUrl + "/characters/" + character.id;

    const statName = stat == 'f' ? 'force' : (stat == 'i' ? 'intelligence' : (stat == 'a' ? 'agilite' : (stat == 'e' ? 'endurance' : null)));

    if(statName != null){
        return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
        },
        body: '{"stats" : {"' + statName + '" : ' + (character.stats[statName] + number) + '}}',
    })
        .then((response) => response.json())}
}

export function remPointToHero(character, stat, number) {
    let url = ngrokUrl + "/characters/" + character.id;

    const statName = stat == 'f' ? 'force' : (stat == 'i' ? 'intelligence' : (stat == 'a' ? 'agilite' : (stat == 'e' ? 'endurance' : null)));

    if(statName != null){
        return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
        },
        body: '{"stats" : {"' + statName + '" : ' + (character.stats[statName] - number) + '}}',
    })
        .then((response) => response.json())}
}

/*export function resetAllPoints(character) {
    for (let aStat in listStats) {
        changePointToHero(character, aStat, 0);
    }
}*/

export function getImageApi(route) {
    return ngrokUrl + '/assets/' + route + '.png';

}
