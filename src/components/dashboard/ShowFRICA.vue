<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
             :is-full-page="true"></loading>
    <div class="lists">
      <va-card>
        <div align="center" v-for="data of formData" :key="'item' + data.PROYECTO_CODIGO">
          <va-button color="info" :to="{ name: 'reportefrica' }">
            {{ $t('Volver al Inicio') }}
          </va-button>
          <vue-excel-xlsx
            :data="items"
            :columns="columns"
            :filename="'FRICAProyecto'+data.PROYECTO_CODIGO"
            :sheetname="'hoja1'"
            :fields="fields"
            class="boton_personalizado"
          >
            {{ $t('Descargar Excel') }}
          </vue-excel-xlsx>
        </div>
        <div class="flex xs12 lg12">
          <va-card>
            <div align="left" v-for="data of formData" :key="'item' + data.PROYECTO_CODIGO">
              <div class="mb-4" style="padding-left: 25px">
                <p class="display-2">Reporte de gastos</p><br>
                <table>
                  <tr>
                    <td><p class="display-5" style="padding-right: 50px">{{'Nombre del proyecto: ' + data.proyecto_nombre}}</p></td>
                    <td><p class="display-5" style="padding-left: 50px">{{'Código del proyecto: ' + data.PROYECTO_CODIGO}}</p></td>
                  </tr>
                  <br>
                  <!--
                  <tr>
                    <td><p class="display-5" style="padding-right: 50px">{{'Valido desde: ' + data.valido_desde}}</p></td>
                    <td><p class="display-5" style="padding-left: 50px">{{'Valido hasta: ' + data.valido_hasta}}</p></td>
                  </tr>
                  <br>
                  <tr>
                    <td><p class="display-5" style="padding-right: 50px">{{'Unidad organizacional: ' + data.unidad_organizacional}}</p></td>
                    <td><p class="display-5" style="padding-left: 50px">{{'PEI/PO: ' + data.pei_po}}</p></td>
                  </tr>
                  -->
                </table>
              </div>
            </div>
            <div class="flex xs12 md2 offset--md10">
              <va-select
                v-model="perPage"
                :label="$t('tables.perPage')"
                :options="perPageOptions"></va-select>
            </div>
            <va-data-table
              :fields="fields"
              :data="items"
              :per-page="parseInt(perPage)"
              :loading="loading"
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
      return [
        {
          name: 'codigo_proyecto',
          title: this.$t('Proyecto'),
          width: '5%',
          sortField: 'codigo_proyecto',
        }, {
          name: 'cuenta',
          title: this.$t('cuenta'),
          width: '5%',
          sortField: 'cuenta',
        }, {
          name: 'nombre_cuenta',
          title: this.$t('nombre cuenta'),
          width: '10%',
        }, {
          name: 'fecha',
          title: this.$t('fecha comprobante'),
          width: '5%',
          sortField: 'fecha',
        }, {
          name: 'numero_comprobante',
          title: this.$t('# comprobante'),
          width: '10%',
        }, {
          name: 'numero_transaccion',
          title: this.$t('# transaccion'),
          width: '10%',
        }, {
          name: 'linea_transaccion',
          title: this.$t('# linea'),
          width: '5%',
        }, {
          name: 'descripcion',
          title: this.$t('descripcion'),
          width: '20%',
        }, {
          name: 'referencia',
          title: this.$t('referencia'),
          width: '20%',
        }, {
          name: 'monto_total',
          title: this.$t('monto total'),
          width: '10%',
        }]
    },
  },
  data () {
    return {
      region: '',
      isLoading: false,
      fullPage: true,
      page: 1,
      items: [],
      loading: false,
      perPage: '10',
      perPageOptions: ['5', '10', '15', '20', '50', '100'],
      formData: {
        id: null,
      },
      columns: [
        {
          label: 'NUMERO DE CUENTA CONTABLE',
          field: 'cuenta',
        },
        {
          label: 'NOMBRE DE LA CUENTA CONTABLE',
          field: 'nombre_cuenta',
        },
        {
          label: 'FECHA DE REGISTRO CONTABLE',
          field: 'fecha',
        },
        {
          label: 'N° COMPROBANTE CONTABLE',
          field: 'numero_comprobante',
        },
        {
          label: 'N° TRANSACCION',
          field: 'numero_transaccion',
        },
        {
          label: 'N° LINEA DE TRANSACCION',
          field: 'linea_transaccion',
        },
        {
          label: 'REGIONAL',
          field: 'sucursal',
        },
        {
          label: 'DESCRIPCION',
          field: 'descripcion',
        },
        {
          label: 'REFERENCIA',
          field: 'referencia',
        },
        {
          label: 'MONTO BS',
          field: 'monto_total',
        },
        {
          label: 'CODIGO DE PROYECTO',
          field: 'codigo_proyecto',
        },
      ],
    }
  },
  methods: {
    readItems: function () {
      this.isLoading = true
      this.items = this.$route.params
      console.log('/ProjectFRICAInfo/' + this.items.id + '/' + this.items.initDate + '/' + this.items.endDate + '/' + this.items.regional)
      axios.get('/ProjectFRICAInfo/' + this.items.id + '/' + this.items.initDate + '/' + this.items.endDate + '/' + this.items.regional)
        .then(response => {
          this.items = response.data
        })
        .catch()
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    init: function () {
      this.isLoading = true
      this.formData = this.$route.params
      this.region = this.formData.regional
      axios.get('/NameFRICA/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
  created () {
    this.readItems()
    this.init()
  },
}
</script>
<style lang="scss">
  .bla{
    padding: 10px !important;
  }
  .boton_personalizado{
    font-size: 18px;
    color: #ffffff;
    background-color: rgba(135, 229, 10, 0.63);
    border: 2px solid rgba(135, 229, 10, 0.63);
    border-radius: 20px;
    padding: 7.5px 25px;
  }
  .boton_personalizado:hover{
    color: #ffffff;
    background-color: rgba(64, 229, 131, 0.55);
  }
</style>
