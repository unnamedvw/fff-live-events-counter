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



var headers = document.querySelectorAll('th[align="left"]'),
acceptableSports = ['футбол', 'хоккей', 'баскетбол', 'волейбол', 'теннис']

if (headers.length) {
    headers.forEach(h => {
        result.count.live++
        var ht = h.innerText.trim().toLowerCase()
        for (var i = 0; i < acceptableSports.length; i++) {
            if (ht.indexOf(acceptableSports[i]) > -1) {
                if (ht.indexOf('кибер') == -1) {
                    // football
                    if (ht.indexOf(acceptableSports[i]) > -1 && acceptableSports[i] == 'футбол') {
                        if (ht.indexOf('пляж') == -1) result.count.football++   
                    }
                    // hockey
                    if (ht.indexOf(acceptableSports[i]) > -1 && acceptableSports[i] == 'хоккей') {
                        if (ht.indexOf('шорт') == -1) result.count.hockey++   
                    }
                    // basketball
                    if (ht.indexOf(acceptableSports[i]) > -1 && acceptableSports[i] == 'баскетбол') {
                        if (ht.indexOf('шорт') == -1) result.count.basketball++   
                    }
                    // volleyball
                    if (ht.indexOf(acceptableSports[i]) > -1 && acceptableSports[i] == 'волейбол') {
                        if (ht.indexOf('шорт') == -1) result.count.volleyball++   
                    }
                    // tennis
                    if (ht.indexOf(acceptableSports[i]) > -1 && acceptableSports[i] == 'теннис') {
                        if (ht.indexOf('настольный') > -1) result.count.tableTennis++
                        else result.count.tennis++
                    }

                }



            }
        }
    })

} else {
    result.message = 'События не найдены'
}

function returnData() {
    return result;
}

returnData()