<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
             :is-full-page="true"></loading>
    <div class="flex xs12">
      <va-card>
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs8">
                <va-chip class="flex xs6" color="primary">Reporte proyectos VLIR</va-chip>
              </div>
            </div>
        </div>
    </va-card>
    </div>
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
      regionalOptions: [],
      term: null,
      dateSearch: null,
      perPage: '5',
      perPageOptions: ['5', '10', '15', '20'],
      formData: -1,
      codigo_proyecto: '',
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
    this.regionOption()
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
    regionOption: function () {
      this.isLoading = true
      axios.get('/Regionales/')
        .then(response => {
          this.regionalOptions = response.data
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
