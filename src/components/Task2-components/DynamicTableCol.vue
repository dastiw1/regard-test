<template>
  <td class="dynamic-table-col">
    <slot :name="field"> </slot>
  </td>
</template>

<script>
export default {
  name: "DynamicTableCol",
  props: {
    field: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style scoped>
.dynamic-table-col {
  text-align: left;
}
</style>
