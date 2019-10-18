<template>
  <va-card :title="$t('Mapa de relaciones')">
    <div class="row">
      <div class="flex xs12 lg12">
        <div align="center" class="buttons">
          <va-button color="info" :to="{ name: 'dashboard' }">
            {{ $t('Volver al Inicio') }}
          </va-button>
        </div>
        <va-list fit class="mb-2">
          <va-card
            no-padding-h
            style="overflow-x: auto"
            class="timelines__horizontal-long"
          >
            <va-timeline align-top style="min-width: 100px;" class="timelines__horizontal-long__timeline" v-for="data of formData" :key="'item' + data.numero_solicitud">
              <va-timeline-item active align="center" v-if="data.numero_solicitud != null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.info}"
                  >
                    Solicitud de compra
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="warning"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  <b>N° Doc: </b>{{ data.numero_solicitud }}<br>
                  <b>Fecha: </b>{{ data.fecha_solicitud }}<br>
                  <va-button flat small color="blue" icon="fa fa-plus" @click="solicitud(data.numero_solicitud)">
                    {{ $t('Ver detalle') }}
                  </va-button>
                </va-card>
              </va-timeline-item>
              <va-timeline-item align="center" v-else-if="data.numero_solicitud == null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.dark}"
                  >
                    Solicitud de compra
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="gray"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  Aún no hay información.
                </va-card>
              </va-timeline-item>
              <va-timeline-item active align="center" v-if="data.numero_oferta != null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.info}"
                  >
                    Oferta de compra
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="warning"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  <b>N° Doc: </b>{{ data.numero_oferta }}<br>
                  <b>Fecha: </b>{{ data.fecha_oferta }}<br>
                  <va-button flat small color="blue" icon="fa fa-plus" @click="oferta(data.numero_solicitud)">
                    {{ $t('Ver detalle') }}
                  </va-button>
                </va-card>
              </va-timeline-item>
              <va-timeline-item align="center" v-else-if="data.numero_oferta == null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.dark}"
                  >
                    Oferta de compra
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="gray"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  Aún no hay información.
                </va-card>
              </va-timeline-item>
              <va-timeline-item active align="center" v-if="data.numero_pedido != null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.info}"
                  >
                    Pedido
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="warning"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  <b>N° Doc: </b>{{ data.numero_pedido }}<br>
                  <b>Fecha: </b>{{ data.fecha_pedido }}<br>
                  <va-button flat small color="blue" icon="fa fa-plus" @click="pedido(data.numero_solicitud)">
                    {{ $t('Ver detalle') }}
                  </va-button>
                </va-card>
              </va-timeline-item>
              <va-timeline-item align="center" v-else-if="data.numero_pedido == null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.dark}"
                  >
                    Pedido
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="gray"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  Aún no hay información.
                </va-card>
              </va-timeline-item>
              <va-timeline-item active align="center" v-if="data.numero_factura != null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.info}"
                  >
                    Factura de proveedores
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="warning"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  <b>N° Doc: </b>{{ data.numero_factura }}<br>
                  <b>Fecha: </b>{{ data.fecha_factura }}<br>
                  <va-button flat small color="blue" icon="fa fa-plus" @click="factura(data.numero_solicitud)">
                    {{ $t('Ver detalle') }}
                  </va-button>
                </va-card>
              </va-timeline-item>
              <va-timeline-item align="center" v-else-if="data.numero_factura == null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.dark}"
                  >
                    Facturas de proveedores
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="gray"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  Aún no hay información.
                </va-card>
              </va-timeline-item>
              <va-timeline-item active align="center" v-if="data.numero_pago != null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.info}"
                  >
                    Pagos efectuados
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="warning"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  <b>N° Doc: </b>{{ data.numero_pago }}<br>
                  <b>Fecha: </b>{{ data.fecha_pago }}<br>
                  <va-button flat small color="blue" icon="fa fa-plus" @click="pago(data.numero_solicitud)">
                    {{ $t('Ver detalle') }}
                  </va-button>
                </va-card>
              </va-timeline-item>
              <va-timeline-item align="center" v-else-if="data.numero_pago == null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.dark}"
                  >
                    Pagos efectuados
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="gray"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  Aún no hay información.
                </va-card>
              </va-timeline-item>
            </va-timeline>
          </va-card>
        </va-list>
      </div>
    </div>
  </va-card>
</template>
<script>
import axios from 'axios'
import router from '../../router/index'
export default {
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
      axios.get('http://192.168.137.112:8008/api/PurchaseRelations/' + this.formData.id)
        .then(response => {
          this.formData = response.data
        })
        .catch()
    },
    solicitud: function (id) {
      router.push('../solicitud/' + id)
    },
    oferta: function (id) {
      router.push('../oferta/' + id)
    },
    pedido: function (id) {
      router.push('../pedido/' + id)
    },
    factura: function (id) {
      router.push('../factura/' + id)
    },
    pago: function (id) {
      router.push('../pago/' + id)
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
