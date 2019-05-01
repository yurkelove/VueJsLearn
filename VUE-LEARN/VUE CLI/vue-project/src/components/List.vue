<template>
  <div>
  <input type="text" v-model="message" @keyup.enter="saveMessage">
  <h2>Inner Title</h2>
  <ul>
      <li v-for="person in people">
          {{person}}
      </li>
  </ul>
  </div>
</template>

<script>

export default {
  //отрисуем из props
  // props: ['people'], - первый способ,

  // validation - способ через валидацию
  props: {
    people: {
      type: Array,
      required: true, // обязательное значение, или не обьязательное
      default: [], //если компонент List - будет undefined, то будет пустой массив при выводе
    }
  },
  data() {
    return {
      message: '',
      // people: ['Nastya','Yura','Leo'] - научимся делать через пропс и вынесем значения в родительсий елемент
    }
  },
  methods: {
    saveMessage: function(){
      // console.log(this.message);
      //Пользовательское событие
      this.$emit('message', this.message);
    }
  }
}
</script>

<style scoped>
  h2 {
    color:green;
  }

</style>
