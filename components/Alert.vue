<template>
  <div
    v-if="alert.show"
    class="flex flex-row items-center space-x-2 px-3 py-2 border-l-4 mb-8"
    :class="containerStyles"
    role="alert"
  >
    <span :class="iconStyles">
      <font-awesome-icon :icon="alert.icon" />
    </span>
    <span :class="messageStyles">
      {{ alert.message }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AlertBox',
  props: {
    alert: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    containerStyles() {
      if (this.alert.success) {
        return 'bg-green-50 border-green-500';
      } else {
        return 'bg-red-50 border-red-500';
      }
    },
    iconStyles() {
      if (this.alert.success) {
        return 'text-green-500';
      } else {
        return 'text-red-500';
      }
    },
    messageStyles() {
      if (this.alert.success) {
        return 'text-green-900';
      } else {
        return 'text-red-900';
      }
    },
  },
};
</script>

<style>
</style>
