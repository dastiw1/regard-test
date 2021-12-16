<template>
  <div class="container">
    <DynamicTable :data="users" :columns="columns">
      <template v-slot:name="props">
        <div class="name-col">Имя мистера: {{ props.row.name }}</div>
      </template>
    </DynamicTable>
  </div>
</template>

<script>
/**
Есть компонент A, принимающий слот, внутри компонента A лежит компонент B, внутри которого компонент C. Задача - передать слот из компонента A в компонент C

Уточнение - прокинуть слот с ограниченной областью видимости из родительского компонента в самый нижний.
Допустим есть таблица, внутри которой компонент строки, внутри которого компонент ячейки.
И в этот компонент ячейки должен передаться слот с ограниченной областью видимости из компонента таблицы.

Передача слота в компонент A:
MainComponent
	ComponentA
		SlotComponent

Иерархия в компоненте A:
ComponentA
	ComponentB
		ComponentC

*/
import DynamicTable from "./Task2-components/DynamicTable.vue";
export default {
  components: { DynamicTable },
  data() {
    return {
      //
      users: [],
      columns: [
        {
          name: "name",
        },
        {
          name: "username",
        },
        {
          name: "address.street",
        },
      ],
    };
  },
  methods: {
    async getData() {
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.name-col {
  font-weight: bold;
  font-size: 18px;
}
</style>
