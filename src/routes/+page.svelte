<script lang="ts">
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
          <p class="mb-2 md:text-lg xl:text-xl">
            NEXT FILE DROPS IN <b class="text-primary">TWO DAYS</b>
          </p>

          <h1
            class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-8xl font-head"
          >
            Want more whatsapp views? try w/<span class="text-primary"
              >wabuzz</span
            >
          </h1>

          <div
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
        <div
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
      <div class=" overflow-hidden xl:w-5/12">
        <img
          src={i}
          loading="lazy"
          alt="by Fakurian Design"
          class="h-full w-full object-cover object-center shadow-xl shadow-zinc-600"
        />
      </div>
      <!-- image - end -->
    </section>
  </div>
</div>

<Faq/>

<Footer/>
