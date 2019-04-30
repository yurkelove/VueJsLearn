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
     
    },
    // methods
    methods: {
        greet: function(){
            return 'Hello me name is ' + this.name;
        },
        //event-обработчик через функцию
        substract: function(){
            this.counter--;
        }
    }
    

})