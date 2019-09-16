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

      <div class="flex xs12 sm6">
        <div class="d-flex justify--end">
        </div>
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
        <va-button
          small
          outline
          color="success"
          icon="fa fa-check"
          class="ma-0"
          @click="resolveUser(props.rowData)"
        >
          {{ $t('dashboard.table.resolve') }}
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
  //Aqui es donde se añaden columnas a las tablas
  computed: {
    fields () {
      return [{
        name: 'name',
        title: this.$t('tables.headings.solicitante'),
        width: '30%',
      }, {
        name: 'name',
        title: this.$t('tables.headings.autorizador'),
        width: '30%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: '__slot:status',
        title: this.$t('tables.headings.status'),
        width: '20%',
        sortField: 'status',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
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

      return this.users.filter(item => {
        return item.name.toLowerCase().startsWith(this.term.toLowerCase())
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
