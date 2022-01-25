<template>
  <div
    class="flex-grow flex flex-col items-center justify-center text-gray-900"
  >
    <div class="">
      <form @submit.prevent="onSubmit">
        <div class="w-screen md:w-96 p-6 md:rounded md:shadow-md">
          <div class="text-gray-600 mb-12">
            <span class="text-xl mr-2">
              <font-awesome-icon icon="shield-alt" />
            </span>
            <span class="text-2xl">Sign in to your account</span>
          </div>

          <!-- Error message -->
          <alert :alert="alert" />

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
                  icon="sign-in-alt"
                  class=""
                />
                <font-awesome-icon
                  v-else
                  icon="circle-notch"
                  class="animate-spin"
                />
              </span>
              Sign in
            </button>
          </div>

          <div class="mt-8">
            <span class="text-gray-700 mr-1">Don't have an account yet?</span>
            <nuxt-link to="/sign-up" class="text-primary hover:underline"
              >Sign up</nuxt-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInPage',
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
        password: '',
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
        response = await this.$auth.loginWith('local', { data: this.form });
      } catch (error) {
        response = null;
      } finally {
        this.isSubmitting = false;
      }

      if (response !== null) {
        if (!response.data.success) {
          this.alert.show = true;
          this.alert.message = response.data.message;
        }
      }
    },
  },
};
</script>
