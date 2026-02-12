var result = {
    message: '',
    count: {
        live: 0,
        football: 0,
        hockey: 0,
        basketball: 0,
        tennis: 0,
        tableTennis: 0,
        volleyball: 0 
    },
}



var liveGames = Array.from(document.querySelectorAll('header[data-sport-id]')),
    withoutKiber = liveGames.filter(games => !games.innerText.trim().toLowerCase().includes('кибер'))
    football = withoutKiber.filter(game => game.innerText.toLowerCase().includes('футбол') ),
    basketball = withoutKiber.filter(game => game.innerText.toLowerCase().includes('баскетбол') ),
    tennis = withoutKiber.filter(game => game.innerText.toLowerCase().includes('теннис') && !game.innerText.toLowerCase().includes('настольный теннис')),
    tableTennis = withoutKiber.filter(game => game.innerText.toLowerCase().includes('настольный теннис')),
    volleyball = withoutKiber.filter(game => game.innerText.toLowerCase().includes('волейбол') ),
    hockey = withoutKiber.filter(game => game.innerText.toLowerCase().includes('хоккей') )

if (liveGames.length) {
    result.count.live = liveGames.length

    result.count.football = football.length
    result.count.basketball = basketball.length
    result.count.volleyball = volleyball.length
    result.count.hockey = hockey.length
    result.count.tableTennis = tableTennis.length
    result.count.tennis = tennis.length

} else {
    result.message = 'События не найдены'

}

function returnData() {
    return result;
}

returnData()