<script lang="ts">
	import { fade, fly } from "svelte/transition";
  import i from "$lib/images/w.webp";
  import e from '$lib/images/404.svg'
  import Button from "$lib/components/ui/button/button.svelte";
  import Faq from "$lib/components/custom/faq.svelte";
  import Banner from "$lib/components/custom/banner.svelte";
  import Footer from "$lib/components/custom/footer.svelte";
  import { BxlTelegram, BxlWhatsapp } from "svelte-boxicons";
  import { onMount } from "svelte";
  import { addToast } from "$lib/scripts/helper/toaster/index.js";
  import { Loader } from "lucide-svelte";
  import Loading from "$lib/components/custom/loading.svelte";
  export let data
  let ready:boolean = false

  onMount(()=>{
    ready = true
    if(data.error) addToast(data.error,'error',6000)
  })
</script>

{#if ready && data.status == 200}
  
<Banner date={data.expires} name={data.name} finishes={data.archived_at}/>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12 pt-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section
      class="flex flex-col justify-between gap-6 sm:gap-10 xl:flex-row overflow-x-hidden"
    >
      <!-- content - start -->
      <div class="flex flex-col justify-between xl:w-5/12">
        <!-- <div /> -->

        <div class="text-center lg:py-12 lg:text-left">
          <p in:fly={{x:-20, duration:500}} class="mb-2 md:text-lg xl:text-xl">
           Formerly known as <b class="text-primary">Whatsgrow</b>
          </p>

          <h1 in:fly={{y:-20,delay:100, duration:300}}
            class="mb-8  text-black  md:mb-12 font-head scroll-m-20 text-5xl font-extrabold tracking-tight md:text-8xl text-center lg:text-left"
           
          >
            Want to have higher views on WhatsApp? try w/<span class="text-primary"
              >wabuzz</span
            >
          </h1>

          <div in:fly={{y:20,delay:150}} 
             class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button href="/add" variant="default" size="lg">
              Submit Contact
            </Button>
            <Button href="/download" variant="secondary" size="lg">
              Download VCF file
            </Button>
          </div>
        </div>

        <!-- social - start -->
        <div in:fly={{x:20, duration:500}}
          class="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start"
        >
          <span
            class="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base"
            >Social</span
          >
          <span class="h-px w-12 bg-gray-200" />

          <div class="flex gap-4">
            <a
              href="/"
              target="_blank"
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
             <BxlWhatsapp/>
            </a>

            <a
              href="/"
              target="_blank"
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
             <BxlTelegram/>
            </a>

          
          </div>
        </div>
        <!-- social - end -->
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class=" overflow-hidden lg:hidden xl:block xl:w-6/12" in:fade={{ duration:500}}> 
        <img 
          src={i}
          loading="lazy"
          alt="by Fakurian Design"
          class=" w-full object-cover object-center  rotate-12"
        />
      </div>
      <!-- image - end -->
    </section>
  </div>
</div>

<Faq/>

<Footer/>

{:else if data.status == 500}
<section class="pt-8  h-screen w-full  grid place-items-center">

 <div class='max-w-lg  m-auto '>
      <img src={e} class='max-w-md' alt='error 404 illustration'/>
       <h2
          in:fly={{ y: -20 }}
          class="scroll-m-20 text-3xl text-center tracking-tight font-head mb-4"
        >
      An error seems to have occurred
        </h2>
        <p class="opacity-80 text-center text-md">This is surely related to your internet connection.</p>
      </div>
    </section>
    <Footer/>
    {:else}
   <Loading/>
{/if}