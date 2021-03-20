<template>
  <v-app id="app">
    <TopNav :openDrawer="openDrawer" />
    <MobileDrawer :drawer="drawer" />

    <v-content mb-8>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn
        light
        text
        @click="updateSnackbar({show: false})"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import TopNav from '@/components/TopNav.vue'
import MobileDrawer from '@/components/MobileDrawer.vue'

export default {
  components: {
    TopNav,
    MobileDrawer
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapState(['snackbar', 'loading'])
  },
  methods: {
    ...mapMutations(['updateSnackbar']),
    openDrawer () {
      this.drawer = true
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
