
//Component
Vue.component('comp', {
    template: '<h2>{{title}} <button @click="changeTitle">Change title</button></h2>',
    data: function() {
        return {
            title: 'Title template'
        }
    },
    methods: {
        changeTitle: function() {
            this.title = 'Updated'
        }
    }
});


new Vue({
    el: "#app",
    data: {

    },
    methods: {
    }
})

new Vue({
    el: '#app-refs',
    data: {
        titleRefs: 'Title',
    },
    computed: {

    },
    methods: {
        changeTitle: function(){
            //Выведем глобальный обьект
            console.log(this.$refs)
            //Переопределим наш тайтл через глобальный обьект refs в котором обратимся к ключу input и значению value
            this.titleRefs = this.$refs.input.value;
            //paragraph - новая ссылка ключ в глобальном обьеке
            //refs - ссылки рендер функцией, нельзя при первычном рендере, не существуют при первычном вызове, не нужно использовать в шаблонах, не является реактивным
        }
    }
})


var one = new Vue({
    el: "#app-one",
    data: {
        title: 'Title one'
    },
    computed: {
        greet: function(){
            return 'Heelo from Vue one'
        }
    },
    methods: {

    }
});


var two = new Vue({
    el: "#app-two",
    data: {
        title: 'Title two'
    },
    computed: {
        greet: function(){
            return 'Heelo from Vue two'
        }
    },
    methods: {
        changeTitleOne: function(){
            one.title = 'Changed from Vue two!';
        }
    }
});


//Вне vue instance
two.title = 'Changed from outside!';




