<template>
  <div class="relative mb-8">
    <input
      :id="id"
      :type="inputType"
      class="
        peer
        w-full
        bg-gray-50
        px-3
        py-1.5
        border-b-2 border-gray-300
        rounded-t
        focus:outline-none
        focus:border-primary
        placeholder-transparent
      "
      placeholder="secret"
      :value="modelValue"
      @input="onInput"
    />
    <label
      :for="id"
      class="
        absolute
        -top-5
        left-3
        text-sm text-primary
        hover:cursor-text
        peer-focus:text-sm
        peer-focus:-top-5
        peer-focus:text-primary
        peer-placeholder-shown:top-1.5
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        transition-all
      "
      >{{ label }}</label
    >
    <template v-if="type === 'password'">
      <button
        type="button"
        class="
          absolute
          right-2
          top-1.5
          bg-gray-50
          text-gray-400
          hover:text-gray-600
          px-1
          rounded-sm
          focus:outline-none
          focus:ring-2 focus:ring-gray-200 focus:ring-offset-2
        "
        tabindex="-1"
        @click.prevent="onTogglePassword"
      >
        <font-awesome-icon :icon="icon" />
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
      default: '',
    },
    label: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      inputType: this.type,
      icon: 'eye-slash',
    };
  },
  methods: {
    onTogglePassword() {
      if (this.inputType === 'text') {
        this.inputType = 'password';
        this.icon = 'eye-slash';
      } else {
        this.inputType = 'text';
        this.icon = 'eye';
      }
    },
    onInput(event) {
      this.$emit('update:value', event.target.value);
    },
  },
};
</script>

<style>
</style>
