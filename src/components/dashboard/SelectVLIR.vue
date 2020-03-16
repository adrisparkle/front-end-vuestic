<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
             :is-full-page="true"></loading>
    <va-card>
      <div class="mb-4" align="center">
        <p class="display-2">Generación de reportes</p><br>
        <p class="display-4">Gastos del Proyecto VLIR</p>
        <p>Seleccionar el proyecto a continuación:</p>
      </div>
      <form>
        <div class="flex md6 offset--md3" >
          <div class="row">
            <div class="flex xs4 md9">
              <va-select
                :label="$t('Regional')"
                v-model="regionalSelectModel"
                textBy="description"
                keyBy="id"
                :options="regionalOptions"
                placeholder="Seleccione aqui"
                :value="regionalOptions.description"
                :onclick="print(regionalSelectModel.description)"
              :error = "err">
              </va-select>
            </div>
            <div class="flex xs8 md3">
              <va-button color="info"
                         @click.prevent="dis=false;
                         filtrarRegional(regionalSelectModel.description)">
                {{ $t('Elegir') }}
              </va-button>
            </div>
          </div>
          <div class="row">
            <div class="flex xs12 md12">
              <va-select
                :label="$t('Proyecto')"
                v-model="projectSelectModel"
                textBy="nombre"
                searchable
                keyBy="codigo_proyecto"
                :options="projectOptions"
                placeholder="Seleccione aqui"
                formData = 1000
                :value="codigo_proyecto"
                :error="errore"
                :disabled="dis">
              </va-select>
            </div>
          </div>
          <div class="row">
            <div class="flex xs3 md4">
              <va-input
              :label="$t('Fecha inicio de proyecto')"
              v-model="date1"
              disabled
            />
            </div>
            <div class="flex xs6 md4"><va-input
              :label="$t('Fecha fin de proyecto')"
              v-model="date2"
              disabled
            /></div>
            <div class="flex xs3 md4"><va-input
              :label="$t('Regional del proyecto')"
              v-model="regional"
              disabled
            /></div>
          </div>
          <div class="row">
            <div class="flex xs6 md6"><va-date-picker
              :label="$t('Fecha desde')"
              v-model="fechaInicio"
              :error="erro"
              v-validate="{date_format: 'dd-mm-yyyy', date_between:[date1,date2]}"
            /></div>
            <div class="flex xs6 md6"><va-date-picker
              :label="$t('Fecha Hasta')"
              v-model="fechaFin"
              :error="erro"
              v-validate="{date_format: 'dd-mm-yyyy', date_between:[date1,date2]}"
            /></div>
          </div>
        <div align="center">
          <va-button color="success" :disabled="dis" @click.prevent="check(projectSelectModel.codigo_proyecto,fechaInicio,fechaFin, regionalSelectModel.description)"> {{ $t('Generar reporte') }}</va-button>
        </div>
        </div>
      </form>
      <div align="center" hidden>
        asadasd {{regionalSelectModel.description}}
        jkah{{date1 = projectSelectModel.valido_desde}} <br>
        shdkj{{date2 = projectSelectModel.valido_hasta}} <br>
        kashj{{regional = projectSelectModel.regional}} <br>
      </div>
    </va-card>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../../router/index'
import Loading from 'vue-loading-overlay'
import VaInput from 'vuestic-ui/src/components/vuestic-components/va-input/VaInput'
import VaButton from 'vuestic-ui/src/components/vuestic-components/va-button/VaButton'
export default {
  components: { VaButton, VaInput, Loading },
  data () {
    return {
      checkbox: {
        unselected: false,
        selected: true,
        disabled: true,
      },
      dis: true,
      fechaInicio: '',
      fechaFin: '',
      simple: '',
      date1: '',
      date2: '',
      simpleSelectModel: '',
      simpleOptions: [],
      projectSelectModel: '',
      projectOptions: [],
      regionalSelectModel: '',
      regionalOptions: [{
        id: 1,
        description: 'Todos',
      },
      {
        id: 2,
        description: 'UCE',
      },
      {
        id: 3,
        description: 'LPZ',
      },
      {
        id: 4,
        description: 'CBB',
      },
      {
        id: 5,
        description: 'SCZ',
      },
      {
        id: 6,
        description: 'TJA',
      },
      ],
      term: null,
      dateSearch: null,
      perPage: '5',
      perPageOptions: ['5', '10', '15', '20'],
      formData: -1,
      codigo_proyecto: '',
      regional: '',
      isLoading: false,
      err: false,
      erro: false,
      errore: false,
      toastText: 'No existen movimientos para este proyecto en estas fechas.',
      toastDuration: 3000,
      toastPosition: 'top-center',
      isToastFullWidth: true,
    }
  },
  created () {
    this.init()
  },
  methods: {
    init: function () {
      this.isLoading = true
      axios.get('/ProjectVLIR/')
        .then(response => {
          this.simpleOptions = response.data
          this.isLoading = false
        }).catch()
    },
    print: function (id) {
      console.log('Holi' + id)
    },
    filtrarRegional: function (id) {
      if (id === undefined) {
        this.err = true
        this.dis = true
      } else {
        this.err = false
        this.dis = false
        this.isLoading = true
        axios.get('/FiltroRegionales/' + id)
          .then(response => {
            this.projectOptions = response.data
            this.isLoading = false
          }).catch()
      }
    },
    reporte: function (id, initDate, endDate, regional) {
      router.push('/admin/mostrarvlir/' + id + '/' + initDate + '/' + endDate + '/' + regional)
    },
    check: function (id, initDate, endDate, regional) {
      if (id !== undefined) {
        if (initDate !== undefined || endDate !== undefined) {
          this.isLoading = true
          console.log('/ProjectVLIRInfo/' + id + '/' + initDate + '/' + endDate + '/' + regional)
          axios.get('/ProjectVLIRInfo/' + id + '/' + initDate + '/' + endDate + '/' + regional)
            .then(response => {
              this.formData = response.data
              console.log('existe: ' + response.data.length)
              if (response.data.length === 0) {
                this.launchToast()
              } else {
                this.reporte(id, initDate, endDate, regional)
              }
            })
          setTimeout(() => {
            this.isLoading = false
          }, 10000)
        } else {
          this.erro = true
        }
      } else {
        this.errore = true
      }
    },
    launchToast () {
      this.showToast(
        this.toastText,
        {
          position: this.toastPosition,
          duration: this.toastDuration,
          fullWidth: this.isToastFullWidth,
        },
      )
    },
  },
}
</script>
