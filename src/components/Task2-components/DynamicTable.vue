<template>
  <table>
    <thead>
      <tr>
        <th v-for="(i, col) in columns" :key="col.name">
          {{ col.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <DynamicTableRow
        v-for="(row, j) in data"
        :columns="columns"
        :key="row[uniqueKey] || j"
        :row="row"
      >
        <template v-for="(_, slot) in $scopedSlots" v-slot:[slot]="props">
          <slot :name="slot" v-bind="props" />
        </template>
      </DynamicTableRow>
    </tbody>
  </table>
</template>

<script>
import DynamicTableRow from "./DynamicTableRow.vue";
export default {
  components: { DynamicTableRow },
  name: "DynamicTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    uniqueKey: {
      type: String,
      default: "id",
    },
  },
};
</script>
