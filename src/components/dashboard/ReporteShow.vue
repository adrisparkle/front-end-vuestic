<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
             :is-full-page="true"></loading>
    <div class="lists">
      <va-card>
        <div align="center">
          <va-button color="info" :to="{ name: 'reportes' }">
            {{ $t('Volver al Inicio') }}
          </va-button>
          <va-button color="success" :to="{ name: 'reportes' }">
            {{ $t('Descargar') }}
          </va-button>
        </div>
        <div class="flex xs12 lg12">
          <va-card>
            <va-list-label>
              {{ $t('Reporte') }}
            </va-list-label>
            <va-data-table
              :fields="fields"
              :data="items"
              :loading="loading"
              :totalPages="totalPages"
              :per-page="parseInt(perPage)"
              @page-selected="readItems"
              api-mode
            >
            </va-data-table>
          </va-card>
        </div>
      </va-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: { VaCard, Loading },
  computed: {
    fields () {
      return [{
        name: 'PROYECTO_CODIGO',
        title: this.$t('Código del proyecto'),
        width: '10%',
      }, {
        name: 'proyecto_nombre',
        title: this.$t('Nombre del proyecto'),
        width: '30%',
      }, {
        name: 'cuenta',
        title: this.$t('cuenta'),
        width: '20%',
      }, {
        name: 'codigo_cuenta',
        title: this.$t('código de cuenta'),
        width: '20%',
      }, {
        name: 'nombre_cuenta',
        title: this.$t('nombre de la cuenta'),
        width: '20%',
      }, {
        name: 'unidad_organizacional',
        title: this.$t('unidad organizacional'),
        width: '20%',
      }, {
        name: 'pei_po',
        title: this.$t('pei/po'),
        width: '20%',
      }, {
        name: 'total_cuenta',
        title: this.$t('total de la cuenta'),
        width: '20%',
      }, {
        name: 'ejecutado',
        title: this.$t('presupuesto ejecutado'),
        width: '20%',
      }]
    },
  },
  data () {
    return {
      isLoading: false,
      fullPage: true,
      page: 1,
      items: [],
      loading: false,
      perPage: '6',
      formData: {
        id: null,
      },
    }
  },
  methods: {
    readItems: function () {
      this.isLoading = true
      this.items = this.$route.params
      axios.get('/ProjectInfo/' + this.items.id)
        .then(response => {
          this.items = response.data
        })
        .catch()
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
  created () {
    this.readItems()
  },
}
</script>
<style lang="scss">
  .bla{
    padding: 10px !important;
  }
</style>
