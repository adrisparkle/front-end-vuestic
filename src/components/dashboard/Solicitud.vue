<template>
  <div class="lists">
    <va-card class="flex xs12 lg12">
      <div class="row">
        <div class="flex xs12 lg12">
          <div align="center" class="buttons">
            <va-button color="info" :to="{ name: 'dashboard' }">
              {{ $t('Volver al Inicio') }}
            </va-button>
            <va-button color="warning" :to="{ name: 'relaciones' }">
              {{ $t('Volver al mapa de relaciones') }}
            </va-button>
          </div>
          <va-list fit class="mb-2">
            <va-list-label>
              {{ $t('Solicitud de compras') }}
            </va-list-label>
            <template v-for="data of formData">
              <table :key="'item' + data.id" width="100%" class="bla">
                <tr>
                  <td align="right" class="bla">
                    <b># Solicitante: </b>
                  </td>
                  <td class="bla">
                    {{ data.codigo_solicitante }}
                  </td>
                  <td class="bla" align="right">
                    <b>Regional</b>
                  </td>
                  <td class="bla">
                    {{ data.regional }}
                  </td>
                </tr>
                <tr>
                  <td class="bla" align="right">
                    <b>Nombre del solicitante:</b>
                  </td>
                  <td class="bla">
                    {{ data.solicitante }}
                  </td>
                  <td class="bla" align="right">
                    <b>Fecha de contabilización</b>
                  </td>
                  <td class="bla">
                    {{ data.fecha_contabilizacion }}
                  </td>
                </tr>
                <tr>
                  <td class="bla" align="right">
                    <b>Serie:</b>
                  </td>
                  <td class="bla">
                    {{ data.serie }}
                  </td>
                  <td class="bla" align="right">
                    <b>Valido hasta:</b>
                  </td>
                  <td class="bla">
                    {{ data.fecha_valida }}
                  </td>
                </tr>
                <tr>
                  <td class="bla" align="right">
                    <b># Documento:</b>
                  </td>
                  <td class="bla">
                    {{ data.id }}
                  </td>
                  <td class="bla" align="right">
                    <b>Fecha de documento</b>
                  </td>
                  <td class="bla">
                    {{ data.fecha_documento }}
                  </td>
                </tr>
                <tr>
                  <td class="bla" align="right">
                    <b>Unidad Organizacional:</b>
                  </td>
                  <td class="bla">
                    {{ data.unidad_organizacional }}
                  </td>
                  <td class="bla" align="right">
                    <b>Fecha requerida</b>
                  </td>
                  <td class="bla">
                    {{ data.fecha_requerida }}
                  </td>
                </tr>
              </table>
            </template>
          </va-list>
        </div>
      </div>
      <div class="flex xs12 lg12">
        <va-card>
          <va-list-label>
            {{ $t('Detalle de la solicitud') }}
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
            <template slot="actions" slot-scope="props">
              <va-button flat small color="blue" icon="fa fa-plus"
                         @click="see(props.rowData.id)">
                {{ $t('icons.mas_info') }}
              </va-button>
            </template>
            <template slot="prueba" slot-scope="props">
              <va-button flat small color="orange" icon="fa fa-plus"
                         @click="select(props.rowData)">
                {{ $t('icons.mas_info') }}
              </va-button>
            </template>
          </va-data-table>
        </va-card>
      </div>
    </va-card>
  </div>
</template>
<script>
import axios from 'axios'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
export default {
  components: { VaCard },
  computed: {
    fields () {
      return [{
        name: 'codigo',
        title: this.$t('tables.headings.codigo'),
        width: '15%',
      }, {
        name: 'descripcion',
        title: this.$t('tables.headings.descripcion'),
        width: '30%',
      }, {
        name: 'observaciones',
        title: this.$t('tables.headings.observaciones'),
        width: '20%',
      }, {
        name: 'proveedor',
        title: this.$t('tables.headings.proveedor'),
        width: '15%',
      }, {
        name: 'fecha_necesaria',
        title: this.$t('tables.headings.fecha_necesaria'),
        width: '20%',
      }, {
        name: 'cantidad',
        title: this.$t('tables.headings.cantidad'),
        width: '20%',
      }, {
        name: 'proyecto',
        title: this.$t('tables.headings.proyecto'),
        width: '20%',
      }, {
        name: 'almacen',
        title: this.$t('tables.headings.almacen'),
        width: '20%',
      }, {
        name: 'impuesto',
        title: this.$t('tables.headings.impuesto'),
        width: '20%',
      }, {
        name: 'precio_unitario',
        title: this.$t('tables.headings.precio_unitario'),
        width: '20%',
      }, {
        name: 'total',
        title: this.$t('tables.headings.total'),
        width: '20%',
      }, {
        name: 'unidad_organizacional',
        title: this.$t('tables.headings.unidad_organizacional'),
        width: '20%',
      }, {
        name: 'pei_po',
        title: this.$t('tables.headings.pei_po'),
        width: '20%',
      }]
    },
  },
  data () {
    return {
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
    init: function () {
      this.formData = this.$route.params
      axios.get('http://192.168.137.112:8008/api/PurchaseRequest/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
    },
    readItems: function () {
      this.items = this.$route.params
      axios.get('http://192.168.137.112:8008/api/PurchaseRequestDetail/' + this.items.id)
        .then(response => {
          this.items = response.data
        })
        .catch()
    },
  },
  created () {
    this.init()
    this.readItems()
  },
}
</script>
<style lang="scss">
  .bla{
    padding: 10px !important;
  }
</style>
