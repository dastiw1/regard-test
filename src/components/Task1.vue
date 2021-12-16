<template>
  <div class="container">
    <h6>Task #1</h6>
    <div class="input-block">
      <label for="">Объект</label>
      <textarea v-model="rawObject"></textarea>
    </div>
    <div class="input-block">
      <label for="">Пути для копирования</label>
      <textarea v-model="paths"></textarea>
    </div>

    <div class="actions">
      <button type="button" @click="copyPathsOfObject">Пуск</button>
    </div>

    <div class="results">
      <h5>Результат:</h5>
      <code v-html="result"></code>
    </div>
  </div>
</template>

<script>
/**
Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны
в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции
copy(obj, ['key1.key2.key3', 'key2.key1']).
Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может
отсутствовать в объекте, например:

a = {
b: null
}

a.b.c
*/
import { copy } from "../tools/helpers";

export default {
  data() {
    return {
      rawObject: ` { "a": { "b": { "c": 2 } } }`,
      result: undefined,
      paths: "a.b.c",
      parsedObject: undefined,
    };
  },
  computed: {
    // selectedObject() {},
  },
  methods: {
    copyPathsOfObject() {
      try {
        this.parsedObject = eval("(" + this.rawObject + ")");
      } catch (error) {
        this.parsedObject = undefined;
      }
      console.log("parsed obj", this.parsedObject);
      const paths = this.paths.split(",").map((i) => i.trim());
      console.log("parsed paths", paths);
      this.result = copy(this.parsedObject, paths);
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
  width: 1024px;
}
.input-block {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.input-block textarea {
  width: 600px;
  height: auto;
  min-height: 300px;
}
</style>
