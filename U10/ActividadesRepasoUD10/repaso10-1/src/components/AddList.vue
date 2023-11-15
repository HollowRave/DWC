<template>
    <div>
        <input type="text" v-model="input"><button type="submit" v-on:click=" añadir()">Añadir</button>
    </div>
</template>

<script>
    export default{
        name: 'AddList',
        data(){
            return{
                input:''
            }
        },
        methods:{
            añadir: function(){
                alert("Has añadido el elemento: " + this.input)
            }
        }
    }
</script>

<style scoped>

</style>