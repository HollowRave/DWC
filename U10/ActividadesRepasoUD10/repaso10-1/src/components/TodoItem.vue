<template>
    <div>
        <li>
            <input type="checkbox" v-model="done">
            <label v-if="!done">{{ elem.title }}</label>
            <del v-else>{{ elem.title }}</del>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props:{ //¿Variables que importas de otros ficheros?
        elem: Object, //¿Como sabe que es un elem de todos en TodoList?
    },
    data(){
        return{
            done:this.elem.done
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
</style>