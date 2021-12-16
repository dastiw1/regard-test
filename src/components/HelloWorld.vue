<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="i in tasks" :key="i">
        <a :class="{ active: task == i }" @click.stop="task = i"
          >Задача №{{ i }}</a
        >
      </li>
    </ul>

    <Task1 v-if="task === 1"></Task1>
    <Task2 v-else-if="task === 2"></Task2>
    <Task3 v-else-if="task === 3"></Task3>
  </div>
</template>

<script>
import Task1 from "./Task1.vue";
import Task2 from "./Task2.vue";
import Task3 from "./Task3.vue";
export default {
  components: { Task1, Task2, Task3 },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    const tasks = [1, 2, 3];
    return {
      task: 3,
      tasks,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
li > a:hover {
  cursor: pointer;
}

li > a.active {
  color: blueviolet;
}
</style>
