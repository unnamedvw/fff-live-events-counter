<template>
  <div id="q-app" class="app-window">
    <div class="app-window-bar">
      <q-bar dark class="full-width q-px-xs">
        <!-- <q-btn :ripple="false" dense flat icon="mdi-cog" @click="ui.settings.show = true" /> -->
        <q-btn :ripple="false" dense flat icon="mdi-theme-light-dark" @click="$q.dark.toggle" />
        <div class="col text-center text-weight-bold q-electron-drag">Live Events Counter</div>
        <q-btn :ripple="false" dense flat icon="mdi-window-minimize" @click="window_minimize" />
        <q-btn :ripple="false" dense flat icon="mdi-window-restore" @click="window_restore" />
        <q-btn :ripple="false" color="negative" dense flat icon="mdi-window-close" @click="window_close" />
      </q-bar>
    </div>

    <q-separator />

    <div class="app-window-content column no-wrap overflow">
      <!-- content view -->
      <q-splitter v-model="ui.splitter.value" class="fit" unit="px" :limits="[300, 500]" separator-style="background: none !important">
        <template v-slot:before>
          <!-- left view -->

          <q-scroll-area class="fit">
            <div class="q-pt-lg q-pl-lg">
              <template v-for="(source, sourcei) in sortedSources">
                <q-card :key="`source_${source.id}`" v-if="source.enabled" bordered flat class="q-mr-lg q-mb-lg soft-shadow1">
                  <q-card-section class="q-pa-none">
                    <q-item>
                      <q-item-section avatar>
                        <q-btn round class="q-pa-sm" :style="`background: ${source.visual.bgColor}`">
                          <q-img :src="`sources/${source.visual.logo}`" spinner-color="primary" spinner-size="82px" />
                          <q-menu>
                            <q-list style="min-width: 100px">
                              <q-item clickable v-close-popup @click="openExternal(source.url.website)">
                                <q-item-section side>
                                  <q-icon name="mdi-open-in-new" />
                                </q-item-section>
                                <q-item-section>Перейти</q-item-section>
                              </q-item>
                              <q-item clickable v-close-popup :disable="source.state.isLoading" @click="webview_reload(source)">
                                <q-item-section side>
                                  <q-icon name="mdi-reload" />
                                </q-item-section>
                                <q-item-section>Обновить страницу</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-btn>
                        <span class="absolute-left q-pa-xs text-grey">{{ sourcei + 1 }}</span>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label style="text-overflow: ellipsis; overflow: hidden;" class="text-h6">{{ source.visual.title }}</q-item-label>
                        <q-item-label v-if="source.result.message" caption lines="2" :class="[source.state.status == 'fail' ? 'text-negative' : '']">{{ source.result.message }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <span class="text-h3 text-weight-bold text-auto">{{ source.result.count.live }}</span>
                      </q-item-section>
                    </q-item>
                  </q-card-section>

                  <q-linear-progress :indeterminate="source.state.isLoading" rounded track-color="bg-auto" class="q-mt-sm" size="xs" />
                  <q-card-section class="q-pa-sm row justify-center">
                    <q-chip icon="mdi-soccer" :label="source.result.count.football" color="green" text-color="white">
                      <q-tooltip content-class="tooltip1"> ФУТБОЛ </q-tooltip>
                    </q-chip>

                    <q-chip icon="mdi-hockey-puck" :label="source.result.count.hockey" color="blue" text-color="white">
                      <q-tooltip content-class="tooltip1"> ХОККЕЙ </q-tooltip>
                    </q-chip>

                    <q-chip icon="mdi-basketball" :label="source.result.count.basketball" color="orange-9" text-color="white">
                      <q-tooltip content-class="tooltip1"> БАСКЕТБОЛ </q-tooltip>
                    </q-chip>

                    <q-chip icon="mdi-volleyball" :label="source.result.count.volleyball" color="cyan" text-color="white">
                      <q-tooltip content-class="tooltip1"> ВОЛЕЙБОЛ </q-tooltip>
                    </q-chip>

                    <q-chip icon="mdi-tennis-ball" :label="source.result.count.tennis" color="green-5" text-color="white">
                      <q-tooltip content-class="tooltip1"> ТЕННИС </q-tooltip>
                    </q-chip>

                    <q-chip icon="mdi-table-tennis" :label="source.result.count.tableTennis" color="red-5" text-color="white">
                      <q-tooltip content-class="tooltip1"> НАСТОЛЬНЫЙ ТЕННИС </q-tooltip>
                    </q-chip>
                  </q-card-section>

                  <!-- webview -->
                  <!-- <webview class="webview" :partition="`wv__${source.id}`" :src="source.url.injectUrl" :id="`wv__${source.id}`"  v-on:dom-ready="(e) => webview_addListeners(e, source)"> </webview> -->

                  <!-- <q-spinner class="float-left" color="primary" size="sm" :thickness="5" /> -->
                </q-card>
              </template>
            </div>
          </q-scroll-area>
        </template>

        <!-- webviews -->
        <template>
          <webview v-for="source in $sources.items" :key="`wv__${source.id}`" class="webview" :partition="`wv__${source.id}`" :src="source.url.injectUrl" :id="`wv__${source.id}`"  v-on:dom-ready="(e) => webview_addListeners(e, source)"> </webview>
        </template>

        <!-- splitter separator -->
        <template v-slot:separator>
          <q-avatar color="white" text-color="grey" size="40px" class="shadow-1" icon="mdi-drag-vertical" />
        </template>

        <!-- right view -->
        <template v-slot:after>
          <div class="column no-wrap fit">
            <q-scroll-area class="fit bg-empty" :style="`box-shadow: inset 0px 0px 12px ${!$q.dark.isActive ? '#00000020' : '#000000'}`">
              <q-toolbar class="q-pl-none q-pr-sm sticky-top toolbar">
                <!-- <q-separator vertical class="q-mr-sm" /> -->
                <!-- <q-toolbar-title>  </q-toolbar-title> -->
                <q-btn flat dense color="primary" icon="mdi-download" class="q-ml-sm" label="Загрузить" @click="webview_injectAll" />
                <q-btn flat dense class="q-ml-auto" icon="mdi-magnify-plus-cursor">
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup @click="window_setZoom(0.5)">
                        <q-item-section>50%</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="window_setZoom(0.75)">
                        <q-item-section>75%</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="window_setZoom(1)">
                        <q-item-section>100%</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="window_setZoom(1.25)">
                        <q-item-section>125%</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="window_setZoom(1.5)">
                        <q-item-section>150%</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="window_setZoom(1.75)">
                        <q-item-section>175%</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="window_setZoom(2)">
                        <q-item-section>200%</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-toolbar>

              <div class="fit row wrap q-pt-lg q-pl-lg justify-around items-end content-around">
                <!-- chart -->
                <template v-for="(chart, charti) in $charts.items">
                  <q-card :key="`chart${charti}`" v-if="chart.enabled" flat class="col-xs-12 col-sm-4 col-md-2 q-mr-lg q-mb-lg soft-shadow1">
                    <q-card-section>
                      <q-btn :icon="chart.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" flat class="float-right" round size="sm" @click="chart.expanded = !chart.expanded" />
                      <div class="text-weight-bold">{{ chart.title }}</div>
                      <div class="text-caption text-grey">{{ chart.description }}</div>
                    </q-card-section>
                    <q-slide-transition>
                      <div v-show="chart.expanded">
                        <q-separator inset />
                        <q-card-section>
                          <doughnut-chart v-if="chart.type == 'doughnut'" :chartData="chart.data"></doughnut-chart>
                          <line-chart v-if="chart.type == 'line'" :chartData="chart.data"></line-chart>
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                  </q-card>
                </template>
              </div>
            </q-scroll-area>
          </div>
        </template>
      </q-splitter>
    </div>
    <q-dialog v-model="ui.settings.show">
      <q-card>
        <q-bar class="bg-auto">
          <div class="col text-center text-weight-bold">
            Настройки
          </div>
          <q-btn dense flat v-close-popup icon="mdi-close" />
        </q-bar>
        <q-separator />
        <q-card-section class="q-pa-none">
          <q-list>
            <q-item clickable v-ripple tag="label">
              <q-item-section avatar> <q-icon name="mdi-theme-light-dark" /> </q-item-section>
              <q-item-section>Темный режим</q-item-section>
              <q-item-section side><q-toggle @input="$q.dark.toggle" :value="$q.dark.isActive" /></q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-sort-descending" />
              </q-item-section>
              <q-item-section>
                <q-select v-model="ui.sorting.type" :options="options.sorting" map-options emit-value label="Тип сортировки" borderless />
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="ui.sorting.ascending" label="По возрастанию" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Закрыть" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

import { ipcRenderer, shell } from 'electron'

import DoughnutChart from "components/DoughnutChart.vue"
import LineChart from "components/LineChart.vue"

const options_sorting = [
  { value: 'totalEvents', label: 'По количеству событий' },
  { value: 'totalFootballs', label: 'По количеству футбольных матчей' },
  { value: 'totalHockeys', label: 'По количеству хоккейных матчей' },
  { value: 'totalBasketballs', label: 'По количеству баскетбольных матчей' },
  { value: 'totalVolleyballs', label: 'По количеству волейбольных матчей' },
  { value: 'totalTennises', label: 'По количеству теннисных матчей' },
  { value: 'totalTableTennises', label: 'По количеству матчей настольного тенниса' }
];



export default {
  name: "App",
  components: {
    DoughnutChart,
    LineChart,
  },
  data() {
    return {
      options: {
        sorting: options_sorting
      },
      ui: {
        settings: {
          show: false
        },
        splitter: {
          value: 30,
        },
        sorting: {
          type: 'totalEvents',
          ascending: false
        }
      },
    }
  },
  methods: {
    webview_injectAll() {
      this.$sources.items.forEach((source) => {
        this.webview_inject(source)
        
      })
    },
    webview_inject(_source) {
      if (_source) {
        var wv = document.getElementById(`wv__${_source.id}`)
        if (wv) {
          wv.executeJavaScript(_source.injector.code, true).then((result) => {
            if (result) {
              this.webview_handleData(_source, result)
            } else {
              _source.state.status = "fail"
              _source.result.message = "Нет данных из источника"
            }
          }).catch(e => {
            
          })
        }
      }
    },
    webview_handleData(_source, _data) {
      if (_source && _data) {
        if (_data.count) {
          _source.state.status = "success"
          _source.result = _data
          if (_data.message) {
            _source.result.message = _data.message
          }
        } else {
          _source.state.status = "fail"

          if (_data.message) {
            _source.result.message = _data.message
          } else {
            _source.result.message = "Неправильные данные"
          }
        }
      }
      this.$charts.update()
    },
    webview_reload(_source) {
      if (_source) {
        var wv = document.getElementById(`wv__${_source.id}`)
        if (wv) wv.reload()
      }
    },
    webview_addListeners(_event, _source) {
      if (_event && _source) {
        _event.target.addEventListener("did-start-loading", () => {
          if (_event.target.isLoading) _source.state.isLoading = _event.target.isLoading()
        })
        _event.target.addEventListener("did-stop-loading", () => {
          if (_event.target.isLoading) _source.state.isLoading = _event.target.isLoading()
        })
        _event.target.addEventListener("did-finish-loading", () => {
          if (_event.target.isLoading) _source.state.isLoading = _event.target.isLoading()
        })
        _event.target.addEventListener("did-finish-load", () => {
          if (_event.target.isLoading) _source.state.isLoading = _event.target.isLoading()
        })
        _event.target.addEventListener("will-navigate", () => {
          if (_event.target.isLoading) _source.state.isLoading = _event.target.isLoading()
        })
      }
    },
    window_minimize() {
      ipcRenderer.send('window:minimize')
    },
    window_restore() {
      ipcRenderer.send('window:restore')
    },
    window_close() {
      ipcRenderer.send('window:close')
    },
    window_setZoom(_zoom) {
      ipcRenderer.send('window:zoom', _zoom)
    },
    openExternal(_link) {
      shell.openExternal(_link)
    }
    

  },
  computed: {
    sortedSources() {
      // return this.$sources.items.sort((a, b) => b.result.count.live - a.result.count.live)
      return this.$sources.items
    }
  },
  mounted() {
    setInterval(this.webview_injectAll, 3000)
  },
}
</script>