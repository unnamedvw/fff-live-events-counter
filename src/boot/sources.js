import fs from 'fs'
import path from 'path'
console.log('path', __dirname)
export default ({ Vue }) => {
  // something to do

  var items = [
    {
      id: "formula55",
      enabled: true,
      visual: {
        title: "Формула55",
        logo: "logo_formula55.webp",
        bgColor: "#264b22",
        color: "#328b42"
      },
      state: {
        status: "", // loading | success | fail
        isLoading: true
      },
      url: {
        injectUrl: "https://formula55.tj/live",
        website: "https://formula55.tj/"
      },
      injector: {
        file: "inj_formula55.js",
        code: ""
      },
      result: {
        message: "",
        count: {
          live: 0,
          football: 0,
          hockey: 0,
          basketball: 0,
          tennis: 0,
          tableTennis: 0,
          volleyball: 0
        }
      }
    },
    {
      id: "irsol",
      enabled: true,
      visual: {
        title: "Ирсол",
        logo: "logo_irsol.png",
        bgColor: "#B21A2E",
        color: "#B21A2E"
      },
      state: {
        status: "", // loading | success | fail
        isLoading: true
      },
      url: {
        injectUrl:
          "http://tennisi.tj/mtg2/cgi/!free.CategoryInfo?categoryid=29010669&gameid=15&more=today&lang=rus",
        website: "http://tennisi.tj/"
      },
      injector: {
        file: "inj_irsol.js",
        code: ""
      },
      result: {
        message: "",
        count: {
          live: 0,
          football: 0,
          hockey: 0,
          basketball: 0,
          tennis: 0,
          tableTennis: 0,
          volleyball: 0
        }
      }
    },
    {
      id: "parimatch",
      enabled: true,
      visual: {
        title: "Пари Матч",
        logo: "logo_parimatch.png",
        bgColor: "#313131",
        color: "#df8600"
      },
      state: {
        status: "", // loading | success | fail
        isLoading: true
      },
      url: {
        injectUrl: "https://parimatch.tj/ru/all-live",
        website: "https://parimatch.tj/ru/"
      },
      injector: {
        file: "inj_parimatch.js",
        code: "#313131"
      },
      result: {
        message: "",
        count: {
          live: 0,
          football: 0,
          hockey: 0,
          basketball: 0,
          tennis: 0,
          tableTennis: 0,
          volleyball: 0
        }
      }
    },
    {
      id: "rahsh",
      enabled: true,
      visual: {
        title: "Рахш",
        logo: "logo_rahsh.png",
        bgColor: "#000000",
        color: "#000000"
      },
      state: {
        status: "", // loading | success | fail
        isLoading: true
      },
      url: {
        injectUrl: "https://c121x.play-platform.com/live/Football",
        website: "https://raxsh.tj/"
      },
      injector: {
        file: "inj_rahsh.js",
        code: ""
      },
      result: {
        message: "",
        count: {
          live: 0,
          football: 0,
          hockey: 0,
          basketball: 0,
          tennis: 0,
          tableTennis: 0,
          volleyball: 0
        }
      }
    },
    {
      id: "1xbet",
      enabled: true,
      visual: {
        title: "1XBet",
        logo: "logo_1xbet.png",
        bgColor: "hsl(204, 100%, 90%)",
        color: "#14a0ff"
      },
      state: {
        status: "", // loading | success | fail
        isLoading: true
      },
      url: {
        injectUrl: "https://1xbet.tj/ru/",
        website: "https://1xbet.tj"
      },
      injector: {
        file: "inj_1xbet.js",
        code: ""
      },
      result: {
        message: "",
        count: {
          live: 0,
          football: 0,
          hockey: 0,
          basketball: 0,
          tennis: 0,
          tableTennis: 0,
          volleyball: 0
        }
      }
    }
  ];

  

  for (var i = 0; i < items.length; i++) {
    if (items[i].enabled) {
      items[i].injector.code = fs.readFileSync(path.join(process.env.STATICS, `/injectors/${items[i].injector.file}`), 'utf8')
      // console.log(items[i].injector.code);
      
    }
  }

  Vue.prototype.$sources = new Vue.observable({
    items
  });
  
};
