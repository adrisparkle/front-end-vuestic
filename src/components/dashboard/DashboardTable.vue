<template>
  <va-card :title="$t('tables.searchTrendsBadges')">
    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="$t('tables.searchByName')"
          @input="search"
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex xs12 md3 offset--md3">
        <va-select
          v-model="perPage"
          :label="$t('tables.perPage')"
          :options="perPageOptions"></va-select>
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="readItems"
      :per-page="parseInt(perPage)"
      @row-clicked="showUser"
      clickable
    >
    </va-data-table>
  </va-card>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      term: null,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      items: [],
    }
  },
  computed: {
    fields () {
      return [{
        name: 'numero_documento',
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
  methods: {
    readItems () {
      this.loading = true
      axios.get('http://192.168.137.112:8008/api/PurchaseSearch')
        .then(response => {
          this.items = response.data
          this.loading = false
          if (!this.term || this.term.length < 1) {
            return this.items
          }
          return this.items.filter(item => {
            return item.fullName.toLowerCase().startsWith(this.term.toLowerCase())
          })
        })
    },
  },
}
</script>
