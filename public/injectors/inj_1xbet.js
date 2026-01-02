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
var items = liElements ? liElements.querySelectorAll('.sports-menu-group.sports-menu-main-full__section'): []
var sports = []

 Array.from(items).filter(item => Array.from(item.querySelectorAll('li')).map(el => sports.push({text:el.textContent.trim().toLowerCase().replace(/\d+/, ''),count:parseInt(el.textContent.trim().toLowerCase().match(/\d+/)[0])})))

 var fb = []
 var tn = []
 var bb = []
 var hk = []
 var tt = []
 var vb = []
if (liElements) {
    var live = document.querySelector('.ui-caption--size-xs.ui-caption--weight-700.ui-caption--uppercase.ui-caption')
    
    var liveCount = live? parseInt(live.innerText.match(/\d+/)):0
    
    if(live && !isNaN(liveCount)){
        result.count.live = liveCount;
    }
    sports.forEach(item =>{
    
        if (item) {
            if(item.text.trim().toLowerCase() === "футбол"){
                fb.push(item);
                result.count.football = fb.length > 1 ? fb.reduce((acc, el)=>acc.count + el.count): item.count
            }
            
            
            if(item.text.trim().toLowerCase() === "теннис"){
                tn.push(item);
                result.count.tennis = tn.length > 1 ? tn.reduce((acc, el)=>acc.count + el.count): item.count
            }
            
            
            if(item.text.trim().toLowerCase() === "баскетбол"){
                bb.push(item);
                result.count.basketball = bb.length > 1 ? bb.reduce((acc, el)=>acc.count + el.count): item.count
            }
            
            
            if(item.text.trim().toLowerCase() === "хоккей"){
                hk.push(item);
                result.count.hockey = hk.length > 1 ? hk.reduce((acc, el)=>acc.count + el.count): item.count
            }
            
            
            if(item.text.trim().toLowerCase() === "баскетбол"){
                tt.push(item);
                result.count.tableTennis = tt.length > 1 ? tt.reduce((acc, el)=>acc.count + el.count): item.count
            }
            
            if(item.text.trim().toLowerCase() === "волейбол"){
                vb.push(item);
                result.count.volleyball = vb.length > 1 ? vb.reduce((acc, el)=>acc.count + el.count):item.count
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