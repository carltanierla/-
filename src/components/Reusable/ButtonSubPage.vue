<template>
    <button class=" d-flex">
        <font-awesome-icon :icon="iconPack" class="mr-2 align-self-center"/>
        <h6 class="my-3">{{ name }}</h6>
    </button>
</template>

<script>
    export default {
        name: 'ButtonSubPage',
        props: { 
            name: String,
            iconPack: String,
        }
    }
</script>

<style lang="scss" scoped>
button a {
    color: #000000;
    text-decoration: none;
}
</style>