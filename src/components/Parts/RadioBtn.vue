<template>
  <label class="radio-btn">
    <input type="radio" :name="props.name" :checked="props.checked" />
    {{ props.label }}
  </label>
</template>
<script lang="ts">
  type Props = { label: string; name?: string; checked?: boolean }
</script>
<script setup lang="ts">
  const props = withDefaults(defineProps<Props>(), {
    label: '',
    name: '',
    checked: false,
  })
</script>
<style lang="scss" scoped>
  .radio-btn {
    position: relative;
    display: flex;
    gap: 0 0.5em;
    align-items: center;
    max-width: 150px;
    padding: 0.5em 0.7em;
    margin-bottom: 0.4em;
    font-size: 12px;
    cursor: pointer;
    background-color: #d0255026;
    border: 1px solid #d02550;
    border-radius: 3px;
  }

  .radio-btn:has(:checked) {
    color: #fff;
    background-color: #d02550;
  }

  .radio-btn::before,
  .radio-btn:has(:checked)::after {
    content: none;
    border-radius: 50%;
  }

  .radio-btn::before {
    width: 14px;
    height: 14px;
    background-color: #fff;
  }

  .radio-btn:has(:checked)::after {
    position: absolute;
    top: 50%;
    left: calc(7px + 0.7em);
    width: 7px;
    height: 7px;
    background-color: #d02550;
    transform: translate(-50%, -50%);
  }

  .radio-btn input {
    display: none;
  }
</style>
