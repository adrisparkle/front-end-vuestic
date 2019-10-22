<template>
  <va-card :title="$t('Mapa de relaciones')">
    <div v-if="formData!=null">
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
              <va-timeline-item active align="center" v-if="data.numero_mercancia != null">
                <template slot="before">
                  <div
                    class="title text--center"
                    :style="{color: $themes.info}"
                  >
                    Ingreso de mercancia
                  </div>
                </template>
                <va-card
                  slot="after"
                  stripe="warning"
                  class="mb-0"
                >
                  <template slot="title"></template>
                  <b>N° Doc: </b>{{ data.numero_mercancia }}<br>
                  <b>Fecha: </b>{{ data.fecha_mercancia }}<br>
                  <va-button flat small color="blue" icon="fa fa-plus" @click="pedido(data.numero_solicitud)">
                    {{ $t('Ver detalle') }}
                  </va-button>
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
import * as spinners from 'epic-spinners'
import { mapGetters } from 'vuex'
import VaIconFaster
  from 'vuestic-ui/src/components/vuestic-components/va-icon/va-iconset/VaIconFaster'
import VaIconSlower
  from 'vuestic-ui/src/components/vuestic-components/va-icon/va-iconset/VaIconSlower'
export default {
  components: {
    ...spinners,
    VaIconFaster,
    VaIconSlower,
  },
  data () {
    return {
      formData: {
        id: null,
      },
      config: {
        size: 100,
        group: 1,
        duration: 1500,
      },
      spinnersColor: this.$themes.primary,
      currentDuration: 1500,
      sliderSize: {
        formatter: v => `${v}px`,
        min: 40,
        max: 100,
      },
      sliderDuration: {
        min: 1000,
        max: 2000,
      },
    }
  },
  computed: {
    ...mapGetters(['palette']),
    speed () {
      return this.sliderDuration.min + this.sliderDuration.max - this.currentDuration
    },
    groups () {
      return this.groupItems(Object.keys(spinners), this.config.group)
    },
  },
  filters: {
    displayName (name) {
      return name.replace('Spinner', '').match(/[A-Z][a-z]+/g).join(' ')
    },
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
    groupItems (items, groupSize) {
      let grouped = []

      for (let i = 1; i < 2; i += groupSize) {
        grouped.push(items.slice(i, i + groupSize))
      }

      return grouped
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
  .spinners {
    &__size {
      &-smaller, &-bigger {
        width: 40px;
        text-align: center;
        font-weight: 600;
      }

      &-smaller {
        font-size: 1rem;
      }

      &-bigger {
        font-size: 1.3rem;
      }
    }

    &__duration {
      &-slower, &-faster {
        transform: translateY(-1px);
      }
    }

    .spinner-box {
      height: 140px
    }
    .bla{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
