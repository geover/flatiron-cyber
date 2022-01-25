<template>
  <header class="sticky top-0 bg-white shadow-md z-40">
    <nav
      class="
        h-16
        lg:max-w-7xl
        lg:mx-auto
        px-6
        flex flex-row
        items-center
        justify-center
        text-primary
      "
    >
      <nuxt-link to="/" class="font-bold">FLATIRON CYBER</nuxt-link>
      <div v-if="!$auth.loggedIn" class="ml-auto text-gray-500 transition-all">
        <nuxt-link to="/sign-in" class="text-sm hover:text-primary px-4 py-2">
          <span class="mr-1">
            <font-awesome-icon icon="sign-in-alt" />
          </span>
          <span>SIGN IN</span>
        </nuxt-link>
        <nuxt-link to="/sign-up" class="text-sm hover:text-primary px-4 py-2">
          <span class="mr-1">
            <font-awesome-icon icon="user-plus" />
          </span>
          <span>SIGN UP</span>
        </nuxt-link>
      </div>
      <button
        v-else
        type="button"
        class="
          px-2
          py-1
          rounded
          text-gray-500
          hover:text-primary
          ml-auto
          focus:outline-none
          focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
        "
        @click.prevent="signOut"
      >
        <span class="text-sm mr-1">
          <font-awesome-icon icon="sign-out-alt" />
        </span>
        Sign out
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    async signOut() {
      await this.$auth.logout();
    },
  },
};
</script>

<style>
</style>
