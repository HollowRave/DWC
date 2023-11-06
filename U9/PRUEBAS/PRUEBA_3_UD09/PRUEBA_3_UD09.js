// PRUEBA 03_UD9: Prueba este código para escuchar eventos y entiende su funcionamiento de
// manera correcta.
Vue.createApp({
    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: 'Aprender JS',
                    done: false,
                },
                {
                    id: 2,
                    title: 'Aprender jQuery',
                    done: false,
                },
                {
                    id: 3,
                    title: 'Aprender Vue',
                    done: false,
                },
            ]
        }
    },
    methods: {
        delTodos(){
            if(confirm('Deseas borrar la lista de cosas a hacer?')){
                this.todos = [];
            }
        }
    }
}).mount('#app')