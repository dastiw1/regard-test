<template>
  <div class="container">
    <h5>booleanToInt</h5>
    <h6>Откройте консоль разработчика</h6>
    <p>
      Результат выполнения функции с разными входными данными отображаются в
      консоли
    </p>
  </div>
</template>

<script>
/**
Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
Т.е. пример
*/
import { booleanToInt } from "../tools/helpers";

export default {
  name: "Task3",
  mounted() {
    this.parse("qwerty"); // 'qwerty'
    this.parse(1); // 1
    this.parse(false); // 0
    this.parse(true); // 1
    this.parse([1, "qwerty", false]); // [1, 'qwerty', 0]
    this.parse([1, "qwerty", { a: true }]); // [1, 'qwerty', { a: 1 }]
    this.parse({ a: { b: true }, c: false, d: "qwerty" }); // { a: { b: 1 }, c: 0, d: 'qwerty' }
    this.parse({
      date1: {
        date1_1: 1,
        date1_2: [
          {
            date2_1: false,
            date2_2: "str1",
          },
          {
            date2_3: true,
            date2_4: "str2",
          },
          {
            date2_5: false,
            date2_6: "str1",
          },
        ],
        date1_3: false,
        date1_4: {
          date3_1: true,
          date3_2: false,
          date3_3: "str1",
          date3_4: true,
          date3_5: 123,
        },
        date1_5: "true",
      },
    }); /**
  date1: {
    date1_1: 1,
    date1_2: [
      {
        date2_1: 0,
        date2_2: 'str1',
      },
      {
        date2_3: 1,
        date2_4: 'str2',
      },
      {
        date2_5: 0,
        date2_6: 'str1',
      },
    ],
    date1_3: 0,
    date1_4: {
      date3_1: 1,
      date3_2: 0,
      date3_3: 'str1',
      date3_4: 1,
      date3_5: 123,
    },
    date1_5: 'true',
  }
  */
  },
  methods: {
    parse(obj) {
      console.log({
        input: Object.assign({}, obj),
        output: booleanToInt(obj),
      });
    },
  },
};
</script>
