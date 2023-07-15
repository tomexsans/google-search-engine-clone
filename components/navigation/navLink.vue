<script setup>

const clickhandler = () => alert('This is a google Clone')
</script>

<template>
    <a @click.prevent="clickhandler" href="#">
        <slot></slot>
    </a>
</template>

<style scoped>
[rounded-link] {
    @apply rounded-full hover:bg-slate-200 h-[50px] w-[50px]
    flex justify-center items-center;
}
</style>