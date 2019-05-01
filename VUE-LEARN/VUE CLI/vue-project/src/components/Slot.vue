<template>
<!-- Сделаем обертку что б возвращать только один елемент -->
    <div class="">
    <!-- тут из App.vue обратимся к slot -->
    <slot name="title"></slot>
    <h1>Slot title</h1>
    <slot name="text"></slot>
    </div>
</template>

<script>



export default {
    data() {
        return {

        }
    }
}
</script>


<style>

</style>