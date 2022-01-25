<template>
  <div class="text-gray-900">
    <landing-page v-if="!$auth.loggedIn" />
    <dashboard-page v-else />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: 'guest',
};
</script>

<style>
</style>
