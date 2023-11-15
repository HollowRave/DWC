<template>
    <div>
        <button v-on:click="borrar()">Borrar Todo</button>
    </div>
</template>

<script>
export default{
    name:'DelAll',
    methods:{
        borrar: function(){
            alert("Has borrado todo")
        }
    }
}
</script>

<style scoped>

</style>