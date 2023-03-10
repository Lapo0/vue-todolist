const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: [
            {
            text: 'Bere tanto',
            done: true,
            },
            {
            text: 'Ricordarsi di bere tanto',
            done: false,
            },
            {
            text: 'Ricordarsi di ricordarsi di bere tanto',
            done: true,
            },
            {
            text: 'Ricordarsi di bere acqua',
            done: false,
            },
            {
            text: 'Comprare il Gin',
            done: false,
            },
        ],
        newTask: ''
      }
    },
    methods: {
        removeTask(taskIndex) {
            this.todoList.splice(taskIndex, 1)
        },
        addTask() {
            this.todoList.push({
                text: this.newTask,
                done: false
            })
        }
    }
    
  }).mount('#app')