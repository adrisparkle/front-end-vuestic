<template>
  <va-card :title="$t('Búsqueda de solicitudes de compra')">
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
</template>

<script>
/* eslint-disable camelcase */
import axios from 'axios'
import router from '../../router/index'

export default {
  data () {
    return {
      page: 1,
      items: [],
      loading: false,
      perPage: '6',
    }
  },
  computed: {
    fields () {
      return [{
        name: 'id',
        title: this.$t('tables.headings.n_documento'),
        width: '15%',
      }, {
        name: 'solicitante',
        title: this.$t('tables.headings.solicitante'),
        width: '30%',
      }, {
        name: 'fecha_contabilizacion',
        title: this.$t('tables.headings.fecha_documento'),
        width: '20%',
      }, {
        name: 'regional',
        title: this.$t('tables.headings.regional'),
        width: '15%',
      }, {
        name: 'unidad_organizacional',
        title: this.$t('tables.headings.unidad_organizacional'),
        width: '20%',
      }, {
        name: '__slot:actions',
        title: this.$t('tables.headings.acciones'),
        width: '10%',
        sortField: 'status',
      }]
    },
  },
  created () {
    this.readItems()
  },
  filteredData () {
    if (!this.term || this.term.length < 1) {
      return this.readItems()
    }
    /* aqui se busca solo por nombre de solicitante */
    return this.readItems().filter(item => {
      return item.solicitante.toLowerCase().startsWith(this.term.toLowerCase())
    })
  },
  methods: {
    readItems (page = 0) {
      this.loading = true

      const params = {
        per_page: this.per_page,
        page: page,
      }

      axios.get('http://192.168.137.112:8008/api/PurchaseSearch/', { params })
        .then(response => {
          this.items = response.data
          this.loading = false
        })
    },
    select (id) {
      alert('Edit User: ' + JSON.stringify(id))
    },
    see: function (id) {
      router.push('relaciones/' + id)
    },
  },
}
</script>
