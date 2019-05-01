new Vue({
    el: "#app",
    data: {
        currentTask: '',
        editValue: '',
        tasks: [
            {
                text: 'Subscribe me',
                isCompleted:false,
                isEditing: false,
            },
            {
                text: 'Like this video',
                isCompleted:false,
                isEditing: false,
            },
            {
                text: 'Learn Vue.js',
                isCompleted:true,
                isEditing: false,
            }
        ]
    },
    methods: {
        addTask: function(){
            this.tasks.push({
                text: this.currentTask,
                isCompleted: false
            })
            this.currentTask = '';
        },
        removeTask: function(taskText) {
            this.tasks = this.tasks.filter(task => {
                return task.text !== taskText;
            });
        },
        changeEditing: function(taskText){
            this.editValue = taskText;
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText){
                    task.isEditing = !task.isEditing;
                }
                return task;
            })
        },
        editTask: function(taskText){
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText){
                    task.isEditing = task.isEditing;
                    //с input берем текст и заменяем его
                    task.text = this.editValue;
                }
                return task;
            })
        }

    }
})