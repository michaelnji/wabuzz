<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import f from "$lib/images/file.svg";
  import e from "$lib/images/404.svg";
  import Button from "$lib/components/ui/button/button.svelte";
  import Banner from "$lib/components/custom/banner.svelte";
  import Footer from "$lib/components/custom/footer.svelte";
  import { BxlTelegram, BxlWhatsapp } from "svelte-boxicons";
  import { onMount } from "svelte";
  import { addToast } from "$lib/scripts/helper/toaster/index.js";
  import { Loader, Users2 } from "lucide-svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { saveVcfFile } from "$lib/scripts/helper/index.js";
  import Loading from "$lib/components/custom/loading.svelte";
  export let data;
  let ready: boolean = false;
  let isLoading: boolean = false;

  function downloadFile() {
    isLoading = true;
    addToast("Download started", "success");
    setTimeout(() => {
      saveVcfFile(data.content);
      isLoading = false;
    }, 2000);
  }

  onMount(() => {
    ready = true;
    if (data.error) addToast(data.error, "error", 6000);
  });
</script>

{#if ready && data.status == 200 && data.createFile}
  <Banner date={data.expires} name={data.name} finishes={data.archived_at} />

  <section class="pt-8 h-screen w-full grid place-items-center">
    <div class="p-6 w-full max-w-lg">
      <h1
        in:fly={{ y: -30, delay: 100, duration: 300 }}
        class="mb-3 font-head scroll-m-20 text-5xl font-extrabold tracking-tight text-center"
      >
        Get VCF file
      </h1>

      <p in:fade={{  delay: 150 }} class="text-base text-muted-foreground text-center">
        <b class="text-primary">{data.name}</b> is now complete and its file is available
        for download
      </p>

      <div class="bg-white p-5 rounded-xl border mt-8 w-full" in:fly={{ y: 80, delay: 100 }}>
        <h2
          in:fly={{ y: -20 }}
          class="scroll-m-20 text-3xl font-bold tracking-tight font-head mb-4"
        >
          Please Note!
        </h2>

        <ul
          class="list-disc list-outside pl-4 space-y-2 mx-auto max-w-md text-muted-foreground"
        >
          <li in:fly={{ y: 20, delay: 150 }}>Contacts gained from this site are for business use only!</li>
          <li in:fly={{ y: 20, delay: 200 }}>
            We have a <b>strict no-spam policy</b>. read more
            <a href="/terms" class="underline text-primary">here</a>.
          </li>

          <li in:fly={{ y: 20, delay: 250 }}>
            Before making any monetary transactions with these contacts, please
            contact the wabuzz admin.
          </li>
          <li in:fly={{ y: 20, delay: 300 }}>
            The admin's contact is found in this file and is stored as
            admin@wabuzz
          </li>
          <li in:fly={{ y: 20, delay: 350 }}>
            All contacts in this file are prefixed with <Badge variant="outline"
              >wb</Badge
            >
          </li>
          <li in:fly={{ y: 20, delay: 400 }}>DO NOT SUBMIT YOUR CONTACT UNTIL TOMORROW</li>
        </ul>
      </div>
      <div class="bg-white rounded-xl border p-3 mt-8 w-full" in:fly={{ x: 60, delay: 350 }}>
        <div class="flex items-center justify-between">
          <div
            class="flex items-center gap-x-2 text-xs sm:text-sm md:text-base"
          >
            <Users2 size="18" /> <b>{data.amount}</b> contacts
          </div>
          <Button size="sm" disabled={isLoading} on:click={downloadFile}
            >{#if isLoading}
              <div class="animate animate-spin"><Loader /></div>
            {:else}
              download
            {/if}</Button
          >
        </div>
      </div>
    </div>
  </section>
   <Footer />
{:else if ready && data.status == 200 && !data.createFile}
  <Banner date={data.expires} name={data.name} finishes={data.archived_at} />
  <section class="pt-8 h-screen w-full grid place-items-center">
    <div class="max-w-lg mx-auto">
      <img
        src={f}
        class="max-w-md"
        in:fly={{ y: 40 }}
        alt="file illustration"
      />
      <h2
        in:fly={{ y: -20 }}
        class="scroll-m-20 text-3xl text-center tracking-tight font-head mb-4"
      >
        The file is not yet available for download
      </h2>
      <p class="opacity-80 text-center text-md" in:fade>
        Please come back again later
      </p>
    </div>
  </section>

  <Footer />
{:else if data.status == 500}
  <section class="pt-8 h-screen w-full grid place-items-center">
    <div class="max-w-lg mx-auto">
      <img src={e} class="max-w-md" alt="error 404 illustration" />
      <h2
        in:fly={{ y: -20 }}
        class="scroll-m-20 text-3xl text-center tracking-tight font-head mb-4"
      >
        An error seems to have occurred
      </h2>
      <p class="opacity-80 text-center text-md">
        This is surely related to your internet connection.
      </p>
    </div>
  </section>
   <Footer />
{:else}
  <Loading />
{/if}
