<template>
    <div class="h-[82vh] flex flex-col">
        <section id="content-logo" class="mt-3 ">
            <div>
                <img src="~/assets/img/googlelogo.png" alt="">
            </div>
        </section>
        <section id="content-input" class="mt-10 flex flex-col ">
            <div class="text-center w-[582px] mx-auto">     
                <input type="text" 
                class="border p-3 border-slate-200  rounded-3xl w-full
                    hover:shadow-lg
                "/>
            </div>
            <div class="text-center mt-5">
                <form-button btn-gray>Google Search</form-button>
                <form-button btn-gray>I'm Feeling Lucky</form-button>                
            </div>

        </section>
        <section id="content-language" class="mt-5">
            <div class="text-sm text-gray-600">
                <span>Google offered in: </span><span>Filipino | cebuano</span>
            </div>
        </section>
    </div>
</template>

<style scoped>
section{
    @apply flex justify-center ;
}
</style>