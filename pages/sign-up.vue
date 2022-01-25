<template>
  <div
    class="flex-grow flex flex-col items-center justify-center text-gray-900"
  >
    <div class="">
      <form @submit.prevent="onSubmit">
        <div class="w-screen md:w-96 p-6 md:rounded md:shadow-md">
          <div class="text-gray-600 mb-12">
            <span class="text-xl mr-2">
              <font-awesome-icon icon="user-plus" />
            </span>
            <span class="text-2xl">Create a new account </span>
          </div>

          <!-- Error message -->
          <alert :alert="alert" />
          <!-- First name -->
          <app-input
            id="firstname"
            :model-value="form.firstname"
            label="First name"
            type="text"
            @update:value="form.firstname = $event"
          />
          <!-- Last name -->
          <app-input
            id="lastname"
            :model-value="form.lastname"
            label="Last name"
            type="text"
            @update:value="form.lastname = $event"
          />
          <!-- Email -->
          <app-input
            id="email"
            :model-value="form.email"
            label="Email"
            type="email"
            @update:value="form.email = $event"
          />
          <!-- Password -->
          <app-input
            id="password"
            :model-value="form.password"
            label="Password"
            type="password"
            @update:value="form.password = $event"
          />
          <!-- Confirm password -->
          <app-input
            id="confirmPassword"
            :model-value="form.confirmPassword"
            label="Confirm password"
            type="password"
            @update:value="form.confirmPassword = $event"
          />

          <!-- Submit -->
          <div class="flex flex-row items-center justify-end">
            <button
              type="submit"
              class="
                bg-primary
                hover:bg-opacity-95
                text-gray-100
                px-3
                py-1.5
                rounded
                focus:outline-none
                focus:ring-2 focus:ring-primary/25 focus:ring-offset-2
                shadow
              "
              :class="disabledButtonStyles"
              :disabled="isSubmitting"
            >
              <span class="text-sm mr-1">
                <font-awesome-icon
                  v-if="!isSubmitting"
                  icon="check-circle"
                  class=""
                />
                <font-awesome-icon
                  v-else
                  icon="circle-notch"
                  class="animate-spin"
                />
              </span>
              Submit
            </button>
          </div>

          <div class="mt-8">
            <span class="text-gray-700 mr-1">Already have an account?</span>
            <nuxt-link to="/sign-in" class="text-primary hover:underline"
              >Sign in</nuxt-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  auth: 'guest',
  data() {
    return {
      isSubmitting: false,
      alert: {
        icon: 'exclamation-circle',
        message: '',
        show: false,
        success: false,
      },
      form: {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  computed: {
    disabledButtonStyles() {
      if (this.isSubmitting) {
        return 'bg-opacity-50 hover:bg-opacity-50 cursor-not-allowed shadow-none';
      } else {
        return '';
      }
    },
  },
  methods: {
    async onSubmit() {
      this.isSubmitting = true;
      this.alert.show = false;

      let response = null;
      try {
        response = (await this.$axios.post('/sign-up', this.form)).data;
      } catch (error) {
        response = null;
      } finally {
        this.isSubmitting = false;
      }

      if (response !== null) {
        if (!response.success) {
          this.alert.show = true;
          this.alert.message = response.message;
        } else {
          this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password,
            },
          });
        }
      }
    },
  },
};
</script>
