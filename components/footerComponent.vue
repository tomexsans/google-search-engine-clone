<template>
    <footer class="bg-slate-200 h-[13vh] flex flex-col px-7">
        <div class="h-[50px] flex items-center">
            <p class="text-sm">Philippines</p>
        </div>
        <div class="flex justify-between">
            <nav>
                <ul>
                    <li>
                        <navigation-nav-link>About</navigation-nav-link>
                    </li>
                    <li>
                        <navigation-nav-link>Advertising</navigation-nav-link>
                    </li>
                    <li>
                        <navigation-nav-link>Business</navigation-nav-link>
                    </li>
                    <li>
                        <navigation-nav-link>How Search Works</navigation-nav-link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <navigation-nav-link>Privacy</navigation-nav-link>
                    </li>
                    <li>
                        <navigation-nav-link>Terms</navigation-nav-link>
                    </li>
                    <li>
                        <navigation-nav-link>Settings</navigation-nav-link>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<style scoped>
nav ul li{
    @apply inline;
}
nav ul li a{
    @apply text-sm mr-3;
}
</style>