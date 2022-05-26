const ngrokUrl = "http://98c8-194-199-64-11.ngrok.io"

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
            Pragma: 'no-cache',
            Expires: 0,
        }
    })
        .then((response) => response.json())
}

export function changePointToPers(character, stat, point){
    let url = ngrokUrl + "/characters/"+character.id;

    return fetch(url, {
        method : "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: '{'+ stat+"" +' : ' + point + '}',
    })
        .then((response) => response.json())
}

export function resetAllPoints(character){
    for(let aStat in listStats){
        changePointToHero(character, aStat, 0);
    }
}

export function saveChanges(character){
    for(let aStat in listStats){
        changePointToHero(character, aStat, character.stats[aStat]);
    }
}

export function getImageApi(route) {
    return ngrokUrl + route;

}
