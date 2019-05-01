new Vue({
    //el - доступ к дом 
    el: "#app",
    data: {
        name: 'Yura',
        job: 'Im front end developer',
        //Привязка данных(data-binding)
        link: 'http://google.com',
        markup: '<a href="http://google.com">Link</a>',
        //events
        counter: 0,
        //Динамический лист вставить
        people:[
            {
                nameP: 'Frank',
                stillAlive:false,
            },
            {
                nameP: 'Alex',
                stillAlive:true,
            },
            {
                nameP: 'John',
                stillAlive:false,
            }
        ],
        //Переопределим нажатие клавиш самостоятельно
        config: {
            keyCodes: {
                f2: 113
            }
        },
        //two-way-data-binding
        nameTwoWay: '',
        checked: true,
        //computed-properties
        a: 0,
        b: 0,
        age: 20 ,
        //conditionals
        error: false,
        success: false,
     
    },
    // methods
    methods: {
        greet: function(){
            return 'Hello me name is ' + this.name;
        },
        //event-обработчик через функцию
        substract: function(){
            this.counter--;
        },
        changeName: function(){
            console.log('Name is updated');
        },
    },
    //computed-properties-methods
    // что бы в хтмл модели не срабатывали 2 сразу метода по нажатию на определенный метод
    computed: {
        addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }
    }
    

})