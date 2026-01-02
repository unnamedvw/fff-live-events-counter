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


var panel = document.querySelectorAll(".sportsbook-filter-content")
if (panel.length) {
    var sports = panel[0].querySelectorAll(".sportsbook-filter-list-item-container")
    var items = []
    if (sports.length) {

        sports.forEach(element => {
            var obj = {
                elem: "",
                sport: "",
                text: "",
            }
            if (element.querySelector(".sport-filter-option-counter")) {
                obj.text = element.querySelector(".sport-filter-option-counter").textContent
                obj.sport = element.querySelector(".sport-filter-option-name").textContent.trim().toLowerCase()
                obj.elem = element
                items.push(obj)
            }
        })
    }

    if (items.length) {
        items.forEach(el => {
            if (el.sport.includes("футбол")) { result.count.football = el.text }
            else if (el.sport == "хоккей") { result.count.hockey = el.text }
            else if (el.sport == "баскетбол") { result.count.basketball = el.text }
            else if (el.sport == "теннис") { result.count.tennis = el.text }
            else if (el.sport == "настольный теннис") { result.count.tableTennis = el.text }
            else if (el.sport == "волейбол") { result.count.volleyball = el.text }
        })

        result.count.live = items.reduce((acc, curr) => acc + parseInt(curr.text), 0);
    } else {
        result.message = 'События не найдены'
    }

}


function returnData() {
    return result;
}

returnData()