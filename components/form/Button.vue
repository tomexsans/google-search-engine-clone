<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>

button {
    @apply text-sm mx-2;
}

[btn-gray] {
    @apply py-2 px-3 bg-zinc-100 rounded-lg border 
    border-zinc-100 hover:border-zinc-300 hover:shadow-md;
}
</style>