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

var liElements = document.querySelector('.sports-menu-main-full__inner')
var items = liElements ? liElements.querySelectorAll('.sports-menu-group.sports-menu-main-full__section') : []
var sports = []

Array.from(items).filter(item => Array.from(item.querySelectorAll('li')).map(el => sports.push({ text: el.textContent.trim().toLowerCase().replace(/\d+/, ''), count: parseInt(el ? el.textContent.trim().toLowerCase().match(/\d+/)[0] : 0) })))

var fb = []
var tn = []
var bb = []
var hk = []
var tt = []
var vb = []
if (liElements) {
    var live = document.querySelector('.ui-caption--size-xs.ui-caption--weight-700.ui-caption--uppercase.ui-caption')

    var liveCount = live ? parseInt(live.innerText.match(/\d+/)) : 0

    if (live && !isNaN(liveCount)) {
        result.count.live = liveCount;
    }
    sports.forEach(item => {

        if (item) {
            var sportTitle = item.text.trim().toLowerCase();
            if (sportTitle == "футбол") {
                result.count.football += item.count 
            } else if (sportTitle == "теннис") {
                result.count.tennis += item.count 
            } else if (sportTitle == "баскетбол") {
                result.count.basketball += item.count 
            } else if (sportTitle == "хоккей") {
                result.count.hockey += item.count 
            } else if (sportTitle == "настольный теннис") {
                result.count.tableTennis += item.count 
                
            } else if (sportTitle == "волейбол") {
                result.count.volleyball += item.count 
            }
        }
    })
} else {
    result.message = "Событие не найдено"
}



function returnData() {
    return result;
}

returnData()