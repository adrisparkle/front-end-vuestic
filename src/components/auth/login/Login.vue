<template>
<form v-on:submit.prevent="onSubmit" >
  <va-input
    v-model="email"
    type="email"
    :label="$t('auth.email')"
    :error="!!emailErrors.length"
    :error-messages="emailErrors"></va-input>

  <va-input
    v-model="password"
    type="password"
    :label="$t('auth.password')"
    :error="!!passwordErrors.length"
    :error-messages="passwordErrors"></va-input>

  <div class="d-flex justify--center mt-3">
    <va-button type="submit" class="my-0">{{ $t('auth.submit') }}</va-button>
  </div>
  <template v-if="youShallNoPass">
    <small id="error">*Usuario o contraseña invalidos.</small>
  </template>
</form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      emailErrors: [],
      passwordErrors: [],
    }
  },
  computed: {
    formReady () {
      return !this.emailErrors.length && !this.passwordErrors.length
    },
    youShallNoPass: {
      get () {
        return localStorage.getItem('token') === '401'
      },
    },
  },
  /* fijarse como va el login en el front porque el del back teoricamente ya esta */
  methods: {
    onSubmit () {
      const formData = {
        username: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/login', formData)
    },
    /*
    onsubmit () {
      this.emailErrors = this.email ? [] : ['Ingrese su usuario']
      this.passwordErrors = this.password ? [] : ['Ingrese su contraseña']
      if (!this.formReady) {
        return
      }
      const formData = {
        username: this.email,
        password: this.password,
      }
      this.$store.dispatch('auth/login', formData)
      /* this.$router.push({ name: 'dashboard' }) */
    /* }, */
  },
}
</script>

<style lang="scss">
</style>
