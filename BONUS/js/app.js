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
        newTask: '',
        selectedTask: null,
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
        });
        this.newTask = '';
        },
        changeDone(taskIndex) {
            this.todoList[taskIndex].done = !this.todoList[taskIndex].done;
        }
    }
    
  }).mount('#app')