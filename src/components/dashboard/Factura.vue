<template>
  <div class="lists">
    <div class="row">
      <div class="flex xs12 lg8">
        <va-list fit class="mb-2">
          <va-list-label>
            {{ $t('Solicitud de compras') }}
          </va-list-label>
          <template v-for="data of formData">
            <table :key="'item' + data.id" width="100%" class="bla">
              <tr>
                <td align="right" class="bla">
                  <b># Solicitante: </b>
                </td>
                <td class="bla">
                  {{ data.codigo_solicitante }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Nombre del solicitante:</b>
                </td>
                <td class="bla">
                  {{ data.solicitante }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Serie:</b>
                </td>
                <td class="bla">
                  {{ data.serie }}
                </td>
              </tr>
              <tr>
              <td class="bla" align="right">
                <b># Documento:</b>
              </td>
              <td class="bla">
                {{ data.id }}
              </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Unidad Organizacional:</b>
                </td>
                <td class="bla">
                  {{ data.unidad_organizacional }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Regional</b>
                </td>
                <td class="bla">
                  {{ data.regional }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Fecha de contabilización</b>
                </td>
                <td class="bla">
                  {{ data.fecha_contabilizacion }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Valido hasta:</b>
                </td>
                <td class="bla">
                  {{ data.fecha_valida }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Fecha de documento</b>
                </td>
                <td class="bla">
                  {{ data.fecha_documento }}
                </td>
              </tr>
              <tr>
                <td class="bla" align="right">
                  <b>Fecha requerida</b>
                </td>
                <td class="bla">
                  {{ data.fecha_requerida }}
                </td>
              </tr></table>
          </template>
        </va-list>
      </div>
    </div>
    <div class="flex xs12 lg8">
      <va-card :title="$t('tables.basic')" class="mb-2">
        <table class="va-table">
          <thead>
          <tr>
            <th>{{ $t('tables.headings.name') }}</th>
            <th>{{ $t('tables.headings.email') }}</th>
            <th>{{ $t('tables.headings.country') }}</th>
            <th>{{ $t('tables.headings.status') }}</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.country }}</td>
            <td>
              <va-badge :color="getStatusColor(user.status)">
                {{ user.status }}
              </va-badge>
            </td>
          </tr>
          </tbody>
        </table>
      </va-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  computed: {
  },
  data () {
    return {
      formData: {
        id: null,
      },
    }
  },
  methods: {
    init: function () {
      this.formData = this.$route.params
      axios.get('http://192.168.137.112:8008/api/PurchaseRequest/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
    },
  },
  created () {
    this.init()
  },
}
</script>
<style lang="scss">
  .bla{
    padding: 10px !important;
  }
</style>
