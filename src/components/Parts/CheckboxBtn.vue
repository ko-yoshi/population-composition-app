<template>
  <div class="checkbox-btn">
    <label :class="{ checked: model }">
      <input v-model="model" type="checkbox" @change="emits('change', model)" />
      {{ props.label }}
    </label>
  </div>
</template>
<script lang="ts">
  type Props = { label: string; checked?: boolean }
  type Emits = { (e: 'change', val: boolean): void }
</script>
<script setup lang="ts">
  const props = withDefaults(defineProps<Props>(), {
    label: '',
    checked: false,
  })
  const emits = defineEmits<Emits>()
  const model = ref(props.checked)
</script>
<style lang="scss" scoped>
  .checkbox-btn {
    position: relative;
    display: inline-block;

    input {
      position: absolute;
      left: 0;
      opacity: 0;
    }

    label {
      display: inline-block;
      min-width: 6em;
      padding: 0.6em;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      background-color: #eee;
      border-radius: 5px;
      transition: 0.2s;

      &:hover,
      &.checked {
        color: #fff;
        background-color: #4287f5;
      }
    }
  }
</style>
