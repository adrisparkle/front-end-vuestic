<template>
  <va-card :title="$t('Búsqueda de solicitudes de compra')">
    <form>
      <div class="flex md6 sm6 xs6s">
        <va-input
          v-model="simple"
          placeholder="Regional"
          readonly
        />
        <va-date-picker
          :label="$t('Fecha desde')"
          v-model="datepicker.simple"
        />
        <va-date-picker
          :label="$t('Fecha Hasta')"
          v-model="datepicker.simple"
        />
        <va-select
          :label="$t('Proyecto')"
          v-model="simpleSelectModel"
          textBy="nombre"
          :options="simpleOptions"
          placeholder="Seleccione aqui"></va-select>
      </div>
      <div align="center">
        <va-button color="success" @click="readItems(codigo)"> {{ $t('buttons.success') }}</va-button>
      </div>
    </form>
    <div align="center">
      <div v-for="data of formData" :key="'item' + data.id">
        {{data.codigo_proyecto}}
      </div>
    </div>
  </va-card>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      regional: '',
      codigo: 'L5789',
      simpleSelectModel: '',
      simpleOptions: [],
      term: null,
      dateSearch: null,
      perPage: '5',
      perPageOptions: ['5', '10', '15', '20'],
      items: [],
      loading: false,
      date: '2019-05-09',
      datepicker: {
        simple: '2019-11-27',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
        customFirstDay: '2018-05-09',
        customDate: '2017-Dec-06',
      },
    }
  },
  created () {
    this.readItems()
    this.init()
  },
  methods: {
    init: function () {
      this.loading = true
      axios.get('/ProjectList/')
        .then(response => {
          this.simpleOptions = response.data
          this.loading = false
        })
    },
    readItems: function (code) {
      this.isLoading = true
      this.items = this.$route.params
      axios.get('/ProjectGeneral/' + code)
        .then(response => {
          this.items = response.data
        })
        .catch()
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
}
</script>
