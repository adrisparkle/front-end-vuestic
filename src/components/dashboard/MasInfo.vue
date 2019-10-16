<template>
  <va-card :title="$t('Mapa de relaciones')">
    <div class="row">
      <div class="flex xs12 lg12">
        <va-list fit class="mb-2" :loading="loading">
          <va-list-label>
            {{ $t('Mapa de relaciones') }}
          </va-list-label>
          <va-timeline vertical centered style="min-width: 300px;" v-for="data of formData" :key="'item' + data.numero_solicitud">
            <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Solicitud de Compra
              </span>
              <va-card
                slot="after"
                stripe="info"
                class="mb-0"
              >
                <va-item>
                  <va-item-section>
                    <va-item-label><b>N° doc.</b>
                    </va-item-label>
                    <va-item-label>
                     {{data.numero_solicitud}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section>
                    <va-item-label><b>Fecha</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.fecha_solicitud}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section align="center">
                    <va-item-label>
                      <va-button flat small color="blue" icon="fa fa-plus" @click="see(data.numero_solicitud)">
                        {{ $t('Ver detalle') }}
                      </va-button>
                    </va-item-label>
                  </va-item-section>
                </va-item>
              </va-card>
            </va-timeline-item>
            <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--danger va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Oferta de Compra
              </span>
              <va-card
                slot="after"
                stripe="info"
              >
                <va-item>
                  <va-item-section>
                    <va-item-label><b>N° doc.</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.numero_oferta}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section>
                    <va-item-label><b>Fecha</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.fecha_oferta}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section align="center">
                    <va-item-label>
                      <va-button flat small color="blue" icon="fa fa-plus" @click="see(data.numero_oferta)">
                        {{ $t('Ver detalle') }}
                      </va-button>
                    </va-item-label>
                  </va-item-section>
                </va-item>
              </va-card>
            </va-timeline-item>
            <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Pedido
              </span>
              <va-card
                slot="after"
                stripe="info"
                class="mb-0"
              >
                <va-item>
                  <va-item-section>
                    <va-item-label><b>N° doc.</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.numero_pedido}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section>
                    <va-item-label><b>Fecha</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.fecha_pedido}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section align="center">
                    <va-item-label>
                      <va-button flat small color="blue" icon="fa fa-plus" @click="see(data.numero_pedido)">
                        {{ $t('Ver detalle') }}
                      </va-button>
                    </va-item-label>
                  </va-item-section>
                </va-item>
              </va-card>
            </va-timeline-item>
            <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Factura de Proveedores
              </span>
              <va-card
                slot="after"
                stripe="info"
                class="mb-0"
              >
                <va-item>
                  <va-item-section>
                    <va-item-label><b>N° doc.</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.numero_factura}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section>
                    <va-item-label><b>Fecha</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.fecha_factura}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section align="center">
                    <va-item-label>
                      <va-button flat small color="blue" icon="fa fa-plus" @click="see(data.numero_factura)">
                        {{ $t('Ver detalle') }}
                      </va-button>
                    </va-item-label>
                  </va-item-section>
                </va-item>
              </va-card>
            </va-timeline-item>
            <va-timeline-item color="info" active>
              <span
                slot="before"
                class="title title--info va-timeline-item__text"
                :style="{color: $themes.info}"
              >
                Pagos efectuados
              </span>
              <va-card
                slot="after"
                stripe="info"
                class="mb-0"
              >
                <va-item>
                  <va-item-section>
                    <va-item-label><b>N° doc.</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.numero_pago}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section>
                    <va-item-label><b>Fecha</b>
                    </va-item-label>
                    <va-item-label>
                      {{data.fecha_pago}}
                    </va-item-label>
                  </va-item-section>
                </va-item>
                <va-item>
                  <va-item-section align="center">
                    <va-item-label>
                      <va-button flat small color="blue" icon="fa fa-plus" @click="see(data.numero_pago)">
                        {{ $t('Ver detalle') }}
                      </va-button>
                    </va-item-label>
                  </va-item-section>
                </va-item>
              </va-card>
            </va-timeline-item>
          </va-timeline>
        </va-list>
      </div>
    </div>
  </va-card>
</template>
<script>
import axios from 'axios'
import router from '../../router/index'
export default {
  computed: {
  },
  data () {
    return {
      loading: false,
      formData: {
        id: null,
      },
    }
  },
  methods: {
    init: function () {
      this.loading = true
      this.formData = this.$route.params
      axios.get('http://192.168.137.112:8008/api/PurchaseRelations/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
    },
    see: function (id) {
      router.push('../solicitud/' + id)
    },
    select (id) {
      alert('Edit User: ' + JSON.stringify(id))
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
