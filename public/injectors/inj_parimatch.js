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



var spanElements = document.querySelectorAll('li[data-testid="modulor-list-cell-li"]')
var spanLength = spanElem()
function spanElem() {
    var items = []
    spanElements.forEach(element => {
        var obj = {
            elem: "",
            sport: "",
            text: "",
        }
        var sports = element.querySelector('div[data-testid="modulor-content-text"]').textContent.trim().toLowerCase()
        if (sports == "футбол" || sports == "баскетбол" || sports == "теннис" || sports == "настольный теннис" || sports == "киберспорт" || sports == "волейбол" || sports == "хоккей" || sports == "бадминтон" || sports == "бейсбол" || sports == "крикет" || sports == "кабадди" || sports == "снукер"){
            obj.text = sports.length
             element.querySelector('span[data-id="expand-collapse-icon-text-title"]') ? element.querySelector('span[data-id="expand-collapse-icon-text-title"]').textContent:0
        obj.sport = sports
        obj.elem = element 
        items.push(obj) 
    }
    })
    return (items)
}
if(spanLength.length){
spanLength.forEach(el => {
    if(el.sport == "футбол"){result.count.football = el.text}
    else if (el.sport == "хоккей"){result.count.hockey = el.text}
    else if (el.sport == "баскетбол"){result.count.basketball = el.text}
    else if (el.sport == "теннис"){result.count.tennis = el.text}
    else if (el.sport == "настольный теннис"){result.count.tableTennis = el.text}
    else if (el.sport == "волейбол"){result.count.volleyball = el.text}
})

result.count.live = spanLength.reduce((acc, curr) => acc + parseInt(curr.text), 0);
} else {
    result.message = 'События не найдены'
}

function returnData() {
    return result;
}

returnData()