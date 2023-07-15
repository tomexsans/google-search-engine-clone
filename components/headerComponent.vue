<script setup>

</script>
<template>
    <header class="px-2">
        <nav class=" h-[8vh] flex justify-end items-center">
            <ul class="flex items-center">
                <li>
                    <navigation-nav-link>Gmail</navigation-nav-link>
                </li>
                <li>
                    <navigation-nav-link>Images</navigation-nav-link>
                </li>
                <li>
                    <navigation-nav-link rounded-link>
                        <Icon name="ic:outline-apps"
                            color="gray"
                            class="text-2xl"/>
                    </navigation-nav-link>
                </li>
                <li>
                    <navigation-nav-link rounded-link>
                        <img src="https://www.gravatar.com/avatar/6ee06363ff5a3883cf80421b340fe348?s=35" 
                        alt="" class="rounded-full">
                    </navigation-nav-link>
                </li>
            </ul>        
        </nav>
    </header>
</template>

<style scoped>
nav ul li{
    @apply inline-block text-sm;
}
nav ul li a{
    @apply inline-block mx-1;
}
</style>