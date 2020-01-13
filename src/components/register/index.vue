<template>
  <div>
    <b-card title="Register User Form">
      <b-card-text>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group> 

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: "Register",
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        store.dispatch('add', this.form)
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
      }
    }
  }
</script>