<template>
  <va-card :title="$t('Detalles')">
    <va-data-table
      :fields="fields"
      :data="filteredData"
      :loading="loading"
      hoverable
    >
      <template slot="icon" slot-scope="props">
        <va-icon name="fa fa-user" color="secondary" />
      </template>
    </va-data-table>
    <div id="prueba">
      aqui debe aparecer :
      {{ info }}
    </div>
    <div class="lists">
      <div class="row">
        <div class="flex xs12 lg4">
          <va-list fit class="mb-2">
            <va-list-label>
              {{ $t('lists.docs') }}
            </va-list-label>
            <va-item>
              <va-item-section>
                <va-item-label><b>Informe circunstanciado</b>
                </va-item-label>

                <va-item-label>
                  <a href="file:///\\18.221.90.154\Docs\INFORME CIRCUNSTANCIADO DRONES corregido.pdf">Inserte link aquiwis</a>
                </va-item-label>
              </va-item-section>
            </va-item>
            <va-item>
              <va-item-section>
                <va-item-label><b>Contrato</b>
                </va-item-label>

                <va-item-label>
                  <a href="http://google.com" target="_blank">Inserte link aquiwis</a>
                </va-item-label>
              </va-item-section>
            </va-item>
            <va-item>
              <va-item-section>
                <va-item-label><b>Cotizaciones</b>
                </va-item-label>

                <va-item-label>
                  <a href="http://google.com" target="_blank">Inserte link aquiwis</a>
                </va-item-label>
              </va-item-section>
            </va-item>
            <va-item>
              <va-item-section>
                <va-item-label><b>Especificaciones tecnicas</b>
                </va-item-label>

                <va-item-label>
                  <a href="http://google.com" target="_blank">Inserte link aquiwis</a>
                </va-item-label>
              </va-item-section>
            </va-item>
          </va-list>
        </div>
        <div class="flex xs12 lg8">
          <va-list fit class="mb-2">
            <va-list-label>
              {{ $t('lists.procesos') }}
            </va-list-label>
            <va-timeline vertical centered style="min-width: 300px;">
              <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Solicitud de Compra
              </span>
                <va-card
                  slot="after"
                  stripe="info"
                  class="mb-0"
                >
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>N° doc.</b>
                      </va-item-label>
                      <va-item-label>
                       Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Fecha</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Costo</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--danger va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Oferta de Compra
              </span>
                <va-card
                  slot="after"
                  stripe="info"
                >
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>N° doc.</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Fecha</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Costo</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Pedido
              </span>
                <va-card
                  slot="after"
                  stripe="info"
                  class="mb-0"
                >
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>N° doc.</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Fecha</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Costo</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Factura de Proveedores
              </span>
                <va-card
                  slot="after"
                  stripe="info"
                  class="mb-0"
                >
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>N° doc.</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Fecha</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Costo</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                </va-card>
              </va-timeline-item>
              <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Pagos efectuados
              </span>
                <va-card
                  slot="after"
                  stripe="info"
                  class="mb-0"
                >
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>N° doc.</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Fecha</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                  <va-item>
                    <va-item-section>
                      <va-item-label><b>Costo</b>
                      </va-item-label>
                      <va-item-label>
                        Inserte data
                      </va-item-label>
                    </va-item-section>
                  </va-item>
                </va-card>
              </va-timeline-item>
            </va-timeline>
          </va-list>
        </div>
      </div>
    </div>
  </va-card>
</template>
<script>
import { debounce } from 'lodash'
import data from '../markup-tables/data.json'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
import VaItem from 'vuestic-ui/src/components/vuestic-components/va-list/VaItem'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  components: { VaItem, VaCard },
  el: '#prueba',
  data () {
    return {
      info: null,
      users: data.slice(),
      loading: false,
      term: null,
      mode: 0,
      dateFirst: '',
      titleFirst: 'Make design',
      titleSecond: 'Develop an app',
      titleThird: 'Submit an app',
      horizontalSimpleContentFirst: 'Pre-sail rate: 50%',
      dateSecond: 'May 22 10:00',
      horizontalSimpleContentSecond: 'Pre-sail rate: 40%',
      dateThird: 'July 19 17:45',
      horizontalSimpleContentThird: 'Pre-sail rate: 20%',
      contentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
      contentSecond: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
      contentThird: 'However, various anthropogenic factors have had a severe impact on zebra populations',

    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  },
  computed: {
    fields () {
      return [{
        name: 'num',
        title: this.$t('tables.headings.num'),
        width: '10%',
      }, {
        name: 'item',
        title: this.$t('tables.headings.item'),
        width: '15%',
      }, {
        name: 'descripcion',
        title: this.$t('tables.headings.descripcion'),
        width: '25%',
      }, {
        name: 'cantidad',
        title: this.$t('tables.headings.cantidad'),
        width: '10%',
      }, {
        name: 'precio',
        title: this.$t('tables.headings.precio'),
        width: '10%',
      }, {
        name: 'comentario',
        title: this.$t('tables.headings.comentario'),
        width: '30%',
      }]
    },
    modeOptions () {
      return [{
        value: 0,
        label: this.$t('dashboard.table.brief'),
      }, {
        value: 1,
        label: this.$t('dashboard.table.detailed'),
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }
      /* aqui se busca solo por nombre de solicitante */
      return this.users.filter(item => {
        return item.solicitante.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }
      if (status === 'processing') {
        return 'info'
      }
      return 'danger'
    },
    resolveUser (user) {
      this.loading = true
      setTimeout(() => {
        const idx = this.users.findIndex(u => u.id === user.id)
        this.users.splice(idx, 1)
        this.loading = false
        this.showToast(this.$t('dashboard.table.resolved'), {
          icon: 'fa-check',
          position: 'bottom-right',
          duration: 1500,
        })
      }, 500)
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style lang="scss">
</style>
