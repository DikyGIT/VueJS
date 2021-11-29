import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    // TODO : state berfungsi sebagai tempat penyimpanan data pada aplikasi, di dalam state mempunyai sebuah value bernama count yang mana nilai defaultnya adalah nol
    state: {
        count: 0,
        title: 'Belajar Hitung'
    },
    // TODO : mutations berfungsi untuk mengubah state / data pada sebuah aplikasi
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

new Vue({
    el: '#app',
    computed: {
        count() {
            return store.state.count
        }
    },
    methods: {
        increment() {
            store.commit('increment')
        },
        decrement() {
            store.commit('decrement')
        }
    }
})