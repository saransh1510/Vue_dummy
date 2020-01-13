<template>
  <div>
    <b-card>
      <b-card-text>
        <div class="list-content">
          <b-table striped hover :items="users"></b-table>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: "UserList",
    data() {
      return {
        items: [
          { name: 'Dickerson', email: 'macdonald@test.com' },
          { name: 'Larsen', email: 'shaw@test.com' },
          { name: 'Geneva', email: 'wilson@test.com' },
          { name: 'Jami', email: 'carney@test.com' }
        ]
      }
    },
    computed: {
      users() {
        /* eslint-disable no-console */
        console.log(':: store.users ',store)
        return store.state.users
      }
    }
  }
</script>

<style>
.list-content {
  display: flex;
  justify-content: center;
}
</style>