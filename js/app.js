const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: [
            {
            text: 'ciao',
            done: true,
            },
            {
            text: 'ciao numero due',
            done: false,
            },
            {
            text: 'ciao numero tre',
            done: true,
            },
            {
            text: 'ciao numero quattro',
            done: false,
            }
        ]
      }
    }
  }).mount('#app')