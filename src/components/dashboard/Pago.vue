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
              {{ $t('Pagos efectuados') }}
            </va-list-label>
            <template v-for="data of formData">
              <table :key="'item' + data.id" width="100%" class="bla">
                <tr>
                  <td align="right" class="bla">
                    <b># Proveedor: </b>
                  </td>
                  <td class="bla">
                    {{ data.codigo_proveedor }}
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
                    <b>Nombre del proveedor: </b>
                  </td>
                  <td class="bla">
                    {{ data.proveedor }}
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
                    <b>Fecha de vencimiento:</b>
                  </td>
                  <td class="bla">
                    {{ data.fecha_vencimiento }}
                  </td>
                </tr>
                <tr>
                  <td class="bla" align="right">
                    <b># Documento:</b>
                  </td>
                  <td class="bla">
                    {{ data.numero_documento }}
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
                    <b>Numero de operación:</b>
                  </td>
                  <td class="bla">
                    {{ data.numero_operacion }}
                  </td>
                </tr>
              </table>
            </template>
          </va-list>
        </div>
      </div>
      <div class="flex xs12 lg12">
        <va-card>
          <div align="center" class="buttons">
            <va-button color="success" :to="{ name: 'dashboard' }">
              {{ $t('Ver asiento contable') }}
            </va-button>
          </div>
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
      }, {
        name: 'saldo_presupuestado',
        title: this.$t('tables.headings.pei_po'),
        width: '20%',
      }, {
        name: 'motivo_salida',
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
      axios.get('http://192.168.137.112:8008/api/PurchasePayment/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
    },
    readItems: function () {
      this.items = this.$route.params
      axios.get('http://192.168.137.112:8008/api/PurchasePaymentDetail/' + this.items.id)
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
