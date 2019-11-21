
import axios from 'axios'
import router from '../../router/index'
const state = {
  sidebar: {
    opened: false,
  },
  config: {
    palette: {
      primary: '#ff9e21',
      danger: '#e34a4a',
      info: '#4ab2e3',
      success: '#db76df',
      warning: '#f7cc36',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd',
    },
  },
  isLoading: true,
}

const mutations = {
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
}

const actions = {
}

const login = ({ commit, dispatch }, authData) => {
  // let token = ''
  commit('crud/loadSetter', true, { root: true })
  axios.post('/auth/GetToken', authData)
    .then(response => {
      localStorage.setItem('userId', response.data.Id)
      localStorage.setItem('token', response.data.Token)
      localStorage.setItem('refreshToken', response.data.RefreshToken)
      commit('authUser', {
        token: response.data.Token,
        refreshToken: response.data.RefreshToken,
        userId: response.data.Id,
      })
      axios.defaults.headers.common['token'] = response.data.Token
      dispatch('setLogoutTimer', response.data.RefreshExpiresIn)
      dispatch('setRefreshTimer', response.data.ExpiresIn)
      router.push('/')
    })
    .catch(error => {
      console.log(error.request.status)
      if (error.request.status === 401) {
        localStorage.setItem('userId', null)
        localStorage.setItem('token', '401')
        localStorage.setItem('refreshToken', null)
      }
      commit('crud/loadSetter', false, { root: true })
      router.go(0)
    })
}

const refresh = ({ commit, dispatch }) => {
  axios.post('/auth/refreshToken/', {
    RefreshToken: localStorage.getItem('refreshToken'),
  })
    .then(response => {
      localStorage.setItem('token', response.data.Token)
      commit('refreshUser', {
        token: response.data.Token,
      })

      axios.defaults.headers.common['token'] = response.data.Token
      dispatch('setRefreshTimer', response.data.ExpiresIn)
    })
    .catch(error => {
      console.log(error)
      if (error.response.status === 401) {
        dispatch('logout')
      }
    })
}

const reload = ({ commit, dispatch }) => {
  axios.post('/auth/refreshToken/', {
    RefreshToken: localStorage.getItem('refreshToken'),
  }
  )
    .then(response => {
      localStorage.setItem('token', response.data.Token)
      commit('refreshUser', {
        token: response.data.Token,
      })

      axios.defaults.headers.common['token'] = response.data.Token
      dispatch('setRefreshTimer', response.data.ExpiresIn)
      dispatch('setLogoutTimer', response.data.RefreshExpiresIn)
    })

    .catch(error => console.log(error))
}

const logout = ({ commit }) => {
  commit('crud/loadSetter', true, { root: true })
  axios.get('/auth/logout/', {
    headers: {
      'token': localStorage.getItem('token'),
    },
  })
    .then(response => {
      commit('crud/loadSetter', false, { root: true })
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      commit('authUser', {
        token: null,
        refreshToken: null,
        userId: null,
      })
      router.push('/')
      router.go(0)
    })
    .catch(error => {
      console.log(error)
      commit('authUser', {
        token: null,
        refreshToken: null,
        userId: null,
      })
      router.push('/')
      router.go(0)
      commit('crud/loadSetter', false, { root: true })
    })
}

const setLogoutTimer = ({ dispatch }, expirationTimeIn) => {
  setTimeout(() => {
    dispatch('logout')
  }, (expirationTimeIn * 1000) - 5)
}

const setRefreshTimer = ({ dispatch }, expirationTimeIn) => {
  setTimeout(() => {
    dispatch('refresh')
  }, (expirationTimeIn * 1000) - 5)
}

export default {
  login,
  logout,
  setLogoutTimer,
  refresh,
  setRefreshTimer,
  reload,
  state,
  mutations,
  actions,
}
