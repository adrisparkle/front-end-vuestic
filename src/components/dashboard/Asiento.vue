<template>
    <div class="vld-parent">
      <loading :active.sync="isLoading"
               :is-full-page="true"></loading>
  <div class="lists">
    <va-card class="flex xs12 lg12">
      <div class="row" v-for="data of formData" :key="'item' + data.id">
        <div class="flex xs6 lg6">
          <div align="center" class="buttons">
            <va-button color="info" :to="{ name: 'dashboard' }">
              {{ $t('Volver al Inicio') }}
            </va-button>
            <va-button color="warning" @click="volver(data.numero_solicitud)">
              {{ $t('Volver al mapa de relaciones') }}
            </va-button>
          </div>
          <va-list fit class="mb-2">
            <va-list-label>
              {{ $t('Asiento contable') }}
            </va-list-label>
            <template>
              <table  width="100%" class="bla">
                <tr>
                  <td align="right" class="bla">
                    <b># Proveedor: </b>
                  </td>
                  <td class="bla">
                    {{ data.codigo_proveedor }}
                  </td>
                  <td class="bla" align="right">
                    <b>Regional: </b>
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
                    <b>Fecha de contabilización: </b>
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
                    {{ data.numero_documento }}
                  </td>
                  <td class="bla" align="right">
                    <b>Fecha de documento:</b>
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
                    <b># Factura:</b>
                  </td>
                  <td class="bla">
                    {{ data.numero_factura }}
                  </td>
                </tr>
              </table>
            </template>
          </va-list>
        </div>
        <div class="flex xs6 lg6">
          <template>
            <div>
              <va-list fit class="mb-2" v-if="data.espicificaciones_tecnicas==null && data.informe_proyecto==null && data.informe_circunstanciado==null && data.pago_directo==null && data.propuesta==null && data.cuadro_comparativo==null && data.acta_evaluacion==null && data.informe_legal==null && data.pliego==null && data.contrato==null">
                <va-list-label>
                  {{ $t('Documentos Anexos') }}
                </va-list-label>
                <va-item>
                  <va-item-section>
                    <va-item-label align="center">
                      No existen documentos anexos para este proceso.
                    </va-item-label>
                  </va-item-section>
                </va-item>
              </va-list>
              <va-list fit class="mb-2" v-else>
                <va-list-label>
                  {{ $t('Documentos Anexos') }}
                </va-list-label>
                <va-item v-if="data.espicificaciones_tecnicas!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Especificaciones técnicas
                    </va-item-label>
                    <va-item-label caption>
                      {{data.espicificaciones_tecnicas}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.informe_proyecto!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Informe del Proyecto
                    </va-item-label>
                    <va-item-label caption>
                      {{data.informe_proyecto}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.informe_circunstanciado!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Informe circunstanciado
                    </va-item-label>
                    <va-item-label caption>
                      {{data.informe_circunstanciado}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.pago_directo!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Pago directo
                    </va-item-label>
                    <va-item-label caption>
                      {{data.pago_directo}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.propuesta!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Propuesta
                    </va-item-label>
                    <va-item-label caption>
                      {{data.propuesta}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.cuadro_comparativo!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Cuadro comparativo
                    </va-item-label>
                    <va-item-label caption>
                      {{data.cuadro_comparativo}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.acta_evaluacion!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Acta de Evaluación
                    </va-item-label>
                    <va-item-label caption>
                      {{data.acta_evaluacion}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.informe_proceso!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Informe del proceso
                    </va-item-label>
                    <va-item-label caption>
                      {{informe_proceso}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.informe_legal!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Informe legal
                    </va-item-label>
                    <va-item-label caption>
                      {{informe_legal}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.pliego!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Pliego
                    </va-item-label>
                    <va-item-label caption>
                      {{data.pliego}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
                <va-item v-if="data.contrato!=null" clickable>
                  <va-item-section>
                    <va-item-label>
                      Contrato
                    </va-item-label>
                    <va-item-label caption>
                      {{data.contrato}}
                    </va-item-label>
                  </va-item-section>
                  <va-item-section side>
                    <va-icon name="fa fa-eye" color="gray" />
                  </va-item-section>
                </va-item>
              </va-list>
            </div>
          </template>
        </div>
      </div>
      <div class="flex xs12 lg12">
        <va-card>
          <va-list-label>
            {{ $t('Detalle de la factura') }}
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
    </div>
</template>
<script>
import axios from 'axios'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
import router from '../../router/index'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: { VaCard, Loading },
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
        name: 'precio_unitario',
        title: this.$t('tables.headings.precio_unitario'),
        width: '20%',
      }, {
        name: 'impuesto',
        title: this.$t('tables.headings.impuesto'),
        width: '20%',
      }, {
        name: 'sujeto_a_retencion',
        title: this.$t('tables.headings.sujeto_a_retencion'),
        width: '20%',
      }, {
        name: 'retencion_a_aplicar',
        title: this.$t('tables.headings.retencion_a_aplicar'),
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
    doAjax () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    },
    init: function () {
      this.formData = this.$route.params
      axios.get('/PurchaseCheck/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
    },
    readItems: function () {
      this.items = this.$route.params
      axios.get('/PurchaseCheckDetail/' + this.items.id)
        .then(response => {
          this.items = response.data
        })
        .catch()
    },
    volver: function (id) {
      router.push('../relaciones/' + id)
    },
  },
  created () {
    this.doAjax()
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
