<script lang="ts">
	import { fade, fly } from "svelte/transition";
  import i from "$lib/images/w.webp";
  import Button from "$lib/components/ui/button/button.svelte";
  import Faq from "$lib/components/custom/faq.svelte";
  import Banner from "$lib/components/custom/banner.svelte";
  import Footer from "$lib/components/custom/footer.svelte";
  import { BxlTelegram, BxlWhatsapp } from "svelte-boxicons";
</script>


<Banner/>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12 pt-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section
      class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row"
    >
      <!-- content - start -->
      <div class="flex flex-col justify-between xl:w-5/12">
        <!-- <div /> -->

        <div class="sm:text-center lg:py-12 lg:text-left">
          <p in:fly={{x:-20, duration:500}} class="mb-2 md:text-lg xl:text-xl">
            NEXT FILE DROPS IN <b class="text-primary">TWO DAYS</b>
          </p>

          <h1 in:fly={{y:-20,delay:100, duration:300}}
            class="mb-8  text-black  md:mb-12 font-head scroll-m-20 text-5xl font-extrabold tracking-tight md:text-8xl"
           
          >
            Want more whatsapp views? try w/<span class="text-primary"
              >wabuzz</span
            >
          </h1>

          <div in:fly={{y:20,delay:150}} 
             class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button href="/add" variant="default" size="lg">
              Add Phone Number
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
      <div class=" overflow-hidden xl:w-6/12" in:fade={{ duration:500}}> 
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
