new Vue({
    //el - доступ к дом 
    el: "#app",
    data: {
        name: 'Yura',
        job: 'Im front end developer'
    },
    methods: {
        greet: function(){
            return 'Hello me name is ' + this.name;
        }
    }
})