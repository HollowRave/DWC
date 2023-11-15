<template>
    <div>
        <h1>{{ message }}</h1>
        <ul>
            <TodoItem v-for="(elemento, index) in todos" :key="index" :elem="elemento"></TodoItem>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoList',
    props: {
        message: String
    },
    components: {
    TodoItem
},
    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: 'Learn JavaScript',
                    done: false,
                },
                {
                    id: 2,
                    title: 'Learn Vue',
                    done: false,
                },
                {
                    id: 3,
                    title: 'Play around in JSFiddle',
                    done: true,
                },
                {
                    id: 4,
                    title: 'Build something awesome',
                    done: true,
                }
            ]
        }
    }
}
</script>

<style scoped></style>