<template>
  <div id="app">
    <b-card header-tag="nav">
      <template v-slot:header>
        <b-nav card-header tabs>
          <b-nav-item :class="[routeName === 'home' ? 'active' : '']">
            <router-link to="/">HomePage</router-link>
          </b-nav-item>
          <b-nav-item :class="[routeName === 'register' ? 'active' : '']">
            <router-link to="/register">Register</router-link>
          </b-nav-item>
          <b-nav-item :class="[routeName === 'list' ? 'active' : '']">
            <router-link to="/list">User List</router-link>
          </b-nav-item>
        </b-nav>
      </template>
      <b-card-text>
        <router-view></router-view>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>


export default {
  name: 'app',
   computed: {
    routeName() {
      // We will see what `params` is shortly
      /* eslint-disable no-console */
      console.log(' :: ', this.$route)
      return this.$route.name
    }
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.active {
  color: #495057 !important ;
  background-color: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
