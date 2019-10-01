<template>
  <va-card :title="$t('dashboard.table.title')">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          :placeholder="$t('tables.searchByName')"
          @input="search"
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :loading="loading"
      hoverable
    >
      <template slot="icon" slot-scope="props">
        <va-icon name="fa fa-user" color="secondary" />
      </template>

      <template slot="status" slot-scope="props">
        <va-badge :color="getStatusColor(props.rowData.status)">
          {{ props.rowData.status }}
        </va-badge>
      </template>

      <template slot="actions" slot-scope="props">
        <va-button flat small color="blue" icon="fa fa-plus" outline :to="{ name: 'masinfo' }">
          {{ $t('icons.mas_info') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import { debounce } from 'lodash'
import data from '../markup-tables/data.json'
export default {
  data () {
    return {
      users: data.slice(),
      loading: false,
      term: null,
      mode: 0,
    }
  },
  computed: {
    fields () {
      return [{
        name: 'n_documento',
        title: this.$t('tables.headings.n_documento'),
        width: '15%',
      }, {
        name: 'solicitante',
        title: this.$t('tables.headings.solicitante'),
        width: '30%',
      }, {
        name: 'fecha_documento',
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
    modeOptions () {
      return [{
        value: 0,
        label: this.$t('dashboard.table.brief'),
      }, {
        value: 1,
        label: this.$t('dashboard.table.detailed'),
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }
      /* aqui se busca solo por nombre de solicitante */
      return this.users.filter(item => {
        return item.solicitante.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }
      if (status === 'processing') {
        return 'info'
      }
      return 'danger'
    },
    resolveUser (user) {
      this.loading = true
      setTimeout(() => {
        const idx = this.users.findIndex(u => u.id === user.id)
        this.users.splice(idx, 1)
        this.loading = false
        this.showToast(this.$t('dashboard.table.resolved'), {
          icon: 'fa-check',
          position: 'bottom-right',
          duration: 1500,
        })
      }, 500)
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style lang="scss">
</style>
