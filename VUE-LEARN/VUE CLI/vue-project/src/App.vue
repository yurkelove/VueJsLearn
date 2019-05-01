<template>
  <div id="app">
 
    <h2>Outer title</h2>
    <!-- <h1>{{title}}</h1> -->
    <!-- Добавим компонент в разметку -->
    <!-- v-bind:people="people" - пробросим props -->
    <List v-bind:people="people" @message="displayMessage"></List>
    <!-- Slot - передадим внуть компонента  -->
    <Slot>
      <h2 slot="title">{{slotTitle}}</h2>
      <p slot="text">Paragraph slot component</p>
    </Slot>
  </div>
</template>

<script>
// Локально импортим
// локально - только из компонента где зарегестрировали,  глобально - может быть доступен в любом другом компоненте
import List from './components/List'
import Slot from './components/Slot'

export default {
  //import
  components: {
    'List' : List,
    Slot
  },
  data() {
    return {
      title: 'My application',
      slotTitle: 'Test title for slot component',
      people: ['Nastya','Yura','Leo']
    }
  },
  methods: {
    displayMessage: function(message){
      this.people.push(message)
    }
  }
}
</script>


<style scoped>
/* scoped - что б стили не перебивались , между друг другом, и инкапсулирует стили внутри компонента */
  h2 {
    color:red;
  }

</style>
