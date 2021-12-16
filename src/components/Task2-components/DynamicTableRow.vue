<template>
  <tr class="dynamic-table-row">
    <DynamicTableCol
      v-for="(col, i) in columns"
      :key="col.name || i"
      :field="col.name"
    >
      <template v-for="(col, _) in columns" v-slot:[`${col.name}`]="props">
        <slot :name="col.name" v-bind="{ ...props, row }">
          {{ getColText(col.name) }}
        </slot>
      </template>
    </DynamicTableCol>
  </tr>
</template>

<script>
import { get } from "../../tools/helpers";
import DynamicTableCol from "./DynamicTableCol.vue";
export default {
  components: { DynamicTableCol },
  name: "DynamicTableRow",
  props: {
    row: {
      type: Object,
      deafult: () => ({}),
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getColText(path) {
      return get(this.row, path);
    },
  },
};
</script>
