// PRUEBA 02_UD9: Prueba este código de la directiva v-for y entiende su funcionamiento de manera
// correcta.
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
    }
}).mount('#app')