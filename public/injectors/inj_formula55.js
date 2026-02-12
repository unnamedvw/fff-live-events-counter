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
    football = liveGames.filter(game => game.innerText.toLowerCase().includes('футобол') && !game.innerText.toLowerCase().includes('киберфутобол')),
    basketball = liveGames.filter(game => game.innerText.toLowerCase().includes('баскетбол')),
    tennis = liveGames.filter(game => game.innerText.toLowerCase().includes('теннис')),
    tableTennis = liveGames.filter(game => game.innerText.toLowerCase().includes('настольный теннис')),
    volleyball = liveGames.filter(game => game.innerText.toLowerCase().includes('волейбол')),
    hockey = liveGames.filter(game => game.innerText.toLowerCase().includes('хоккей'))

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