<template>
  <div>
    <b-card>
      <b-card-text>
        <div class="homepage-content">
          Total Number of Registered Users are: {{ usersCount }}
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: "HomePage",
    computed: {
      usersCount() {
        return store.state.users.length
      }
    }
  }
</script>

<style>
.homepage-content {
  display: flex;
  justify-content: center;
}
</style>