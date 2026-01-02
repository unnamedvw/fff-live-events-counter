// import something here
import vue from "vue";
import { date } from "quasar";

var lineCharts_interval;

var items = {
  liveCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Live события",
    description: "Общее количество live событий по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  liveCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Live события в течение минуты",
    description: "Общее количество live событий в течение одной минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


  footballCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Футбол",
    description: "Общее количество футбольных событий по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  footballCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Футбол в течение минуты",
    description: "Общее количество футбольных событий в течение одной минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


  hockeyCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Хоккей",
    description: "Общее количество хоккейных событий по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  hockeyCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Хоккей в течение минуты",
    description: "Общее количество хоккейных событий в течение одной минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


  basketballCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Баскетбол",
    description: "Общее количество баскетбольных событий по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  basketballCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Баскетбол в течение минуты",
    description: "Общее количество баскетбольных событий в течение одной минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


  volleyballCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Волейбол",
    description: "Общее количество волейбольных событий по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  volleyballCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Волейбол в течение минуты",
    description: "Общее количество волейбольных событий в течение одной минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


  tennisCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Теннис",
    description: "Общее количество теннисных событий по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  tennisCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Теннис в течение минуты",
    description: "Общее количество теннисных событий в течение одной минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


  tableTennisCount: {
    enabled: true,
    type: "doughnut",
    expanded: true,
    title: "Настольный Теннис",
    description: "Общее количество событий в настольном теннисе по источникам",
    data: {
      labels: [],
      datasets: []
    }
  },
  tableTennisCount_line: {
    enabled: true,
    type: "line",
    expanded: true,
    title: "Настольный Теннис в течение минуты",
    description: "Общее количество событий в настольном теннисе в течение одного минуты",
    data: {
      labels: [],
      datasets: []
    }
  },


};

function update() {
  //liveCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.live);
    }
  });
  items.liveCount.data.labels = labels;
  items.liveCount.data.datasets = [dataset];

  //footballCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.football);
    }
  });
  items.footballCount.data.labels = labels;
  items.footballCount.data.datasets = [dataset];

  //hockeyCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.hockey);
    }
  });
  items.hockeyCount.data.labels = labels;
  items.hockeyCount.data.datasets = [dataset];

  //basketballCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.basketball);
    }
  });
  items.basketballCount.data.labels = labels;
  items.basketballCount.data.datasets = [dataset];

  //volleyballCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.volleyball);
    }
  });
  items.volleyballCount.data.labels = labels;
  items.volleyballCount.data.datasets = [dataset];

  //tennisCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.tennis);
    }
  });
  items.tennisCount.data.labels = labels;
  items.tennisCount.data.datasets = [dataset];

  //tableTennisCount
  var labels = [],
    dataset = { backgroundColor: [], data: [] };
  vue.prototype.$sources.items.forEach(source => {
    if (source.enabled) {
      labels.push(source.visual.title);
      dataset.backgroundColor.push(source.visual.color);
      dataset.data.push(source.result.count.tableTennis);
    }
  });
  items.tableTennisCount.data.labels = labels;
  items.tableTennisCount.data.datasets = [dataset];
}

export default ({ Vue }) => {
  ///// charts initialization

  Vue.prototype.$charts = new Vue.observable({
    items,
    update,
    lineCharts_update
  });

  function lineChart_insertRecord(chart, newData) {
    chart.data.datasets.forEach(ds => {
      if (newData.values.hasOwnProperty(ds.id))
        ds.data.push(newData.values[ds.id]);
      else ds.data.push(0);

      if (ds.data.length > 60) ds.data.shift();
    });

    chart.data.labels.push(newData.label);
    if (chart.data.labels.length > 60) chart.data.labels.shift();
  }

  function lineCharts_update() {
    //liveCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.live;
    });
    lineChart_insertRecord(items.liveCount_line, newData);
    
    //footballCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.football;
    });
    lineChart_insertRecord(items.footballCount_line, newData);
    
    //hockeyCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.hockey;
    });
    lineChart_insertRecord(items.hockeyCount_line, newData);
    
    //basketballCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.basketball;
    });
    lineChart_insertRecord(items.basketballCount_line, newData);
    
    //volleyballCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.volleyball;
    });
    lineChart_insertRecord(items.volleyballCount_line, newData);
    
    //tennisCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.tennis;
    });
    lineChart_insertRecord(items.tennisCount_line, newData);
    
    //tableTennisCount_line
    var newData = {
      label: date.formatDate(Date.now(), "HH:mm:ss"),
      values: {}
    };
    Vue.prototype.$sources.items.forEach(source => {
      if (source.enabled) newData.values[source.id] = source.result.count.tableTennis;
    });
    lineChart_insertRecord(items.tableTennisCount_line, newData);


  }

  function lineCharts_init() {
    //liveCOunt_line
    Object.values(items).forEach(chart => {
      if (chart.enabled && chart.type == "line") {
        Vue.prototype.$sources.items.forEach(source => {
          if (source.enabled) {
            chart.data.datasets.push({
              id: source.id,
              label: source.visual.title,
              borderColor: source.visual.color,
              data: []
            });
          }
        });
      }
    });
  }

  lineCharts_init();

  lineCharts_interval = setInterval(lineCharts_update, 1000);
};
