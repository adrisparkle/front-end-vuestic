<template>
                <form @submit.prevent="onSubmit">
                  <div class="card-login" data-background="color" data-color="green">
                    <div class="card-header">
                      <h3 class="header-text"><b>Inicio de sesión</b></h3>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <label class="normal-text">Usuario:</label>
                        <input type="email" placeholder="n.apellido.m@ucb.bo" class="form-control input-no-border" id="email" v-model="email">
                      </div>
                      <div class="form-group">
                        <label class="normal-text">Contraseña:</label>
                        <input type="password" placeholder="Ingrese contraseña" class="form-control input-no-border" id="password" v-model="password">
                      </div>
                      <template v-if="youShallNoPass">
                        <small id="error" class="form-text text-muted text-danger">*Usuario o contraseña invalidos.</small>
                      </template>
                    </div>
                    <div class="card-footer text-center">
                      <button type="submit" class="btn btn-fill btn-wd btn-success ">Ingresar</button>
                      <!--div class="forgot">
                        <router-link to="/register">
                          Forgot your password?
                        </router-link>
                      </div-->
                    </div>
                  </div>
                </form>
</template>
<script>
import Loading from 'vue-loading-overlay'
export default {
  components: {
    Loading,
  },
  props: {
    logo: {
      type: String,
      default: 'static/img/colores-horizontal-LP.jpg',
    },
    logoSis: {
      type: String,
      default: 'static/img/logo2.png',
    },
  },
  data () {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    youShallNoPass: {
      get () {
        return localStorage.getItem('token') === '401'
      },
    },
  },
  methods: {
    onSubmit () {
      const formData = {
        username: this.email,
        password: this.password,
      }
      this.$store.dispatch('auth/login', formData)
    },
  },
  created () {
  },
}
</script>
<style scoped>
  .logo-ucb{
    width: 400px;
    alignment: center;
    align-content: center;
    align-items: center;
    align-self: center;
  }
  .logo-sis{
    width: 300px;
    margin-bottom: 10px;
  }
  .full-page:after {
    background: #ffffff;
    z-index: 3;
    opacity: 1;
  }
  .header-text {
    text-align: center;
    color: #fdfdfd;
  }
  .normal-text {
    text-align: center;
    color: #fdfdfd;
  }
  .margin {
    margin-bottom: 10px;
  }
</style>
